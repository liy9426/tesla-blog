<template>
  <div class="chart-container">
    <div
      :class="[className, mode]"
      :style="{width:width}"
      class="stock-chart"
      v-loading="loading"
    ></div>
    <el-button
      class="detail-btn"
      type="text"
      v-if="mode==='simple'"
      @click="detailChartVisible=true"
    >查看详情</el-button>
    <el-dialog
      :visible.sync="detailChartVisible"
      :show-close="true"
      v-if="mode==='simple'"
      width="60%"
      top="10vh"
    >
      <stock-chart mode="detail"></stock-chart>
    </el-dialog>
  </div>
</template>

<script>
import echarts from 'echarts';
import { debounce } from 'src/utils/utils';
import axios from 'axios';

require('echarts/theme/macarons'); // echarts theme

export default {
    name: 'StockChart',
    props: {
        className: {
            type: String,
            default: 'chart'
        },
        width: {
            type: String,
            default: '100%'
        },
        /* height: {
            type: String,
            default: '350px'
        }, */
        mode: {
            type: String,
            default: 'simple'
        }
    },
    data () {
        return {
            chart: null,
            upColor: '#ec0000',
            upBorderColor: '#8A0000',
            downColor: '#00da3c',
            downBorderColor: '#008F28',
            alpha: null,
            data0: {},
            detailChartVisible: false,
            loading: false
        };
    },
    mounted () {
        this.initData();
        this.__resizeHanlder = debounce(() => {
            if (this.chart) {
                this.chart.resize();
            }
        }, 100);
        window.addEventListener('resize', this.__resizeHanlder);
    },
    deactivated () {
        window.removeEventListener('resize', this.__resizeHanlder);
    },
    activated () {
        window.addEventListener('resize', this.__resizeHanlder);
    },
    beforeDestroy () {
        if (!this.chart) {
            return;
        }
        window.removeEventListener('resize', this.__resizeHanlder);
        this.chart.dispose();
        this.chart = null;
    },
    methods: {
        splitData1 (rawData) {
            let categoryData = Object.keys(rawData).reverse();
            let values = [];
            let tempData = Object.values(rawData).reverse();
            for (let val of tempData) {
                values.push([
                    parseFloat(val['1. open']),
                    parseFloat(val['4. close']),
                    parseFloat(val['3. low']),
                    parseFloat(val['2. high'])
                ]);
            }
            return {
                categoryData: categoryData,
                values: values
            };
        },
        calculateMA (dayCount) {
            var result = [];
            for (var i = 0, len = this.data0.values.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += this.data0.values[i - j][1];
                }
                result.push(sum / dayCount);
            }
            return result;
        },
        initChart () {
            let chartOption = {
                title: {
                    text: 'TSLA',
                    left: 0
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {
                    data: ['日K']
                },
                xAxis: {
                    type: 'category',
                    data: this.data0.categoryData,
                    scale: true,
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    splitLine: { show: false },
                    splitNumber: 20,
                    min: 'dataMin',
                    max: 'dataMax'
                },
                yAxis: {
                    scale: true,
                    splitArea: {
                        show: true
                    }
                },
                dataZoom: [
                    {
                        type: 'inside',
                        start: 90,
                        end: 100
                    },
                    {
                        show: true,
                        type: 'slider',
                        bottom: '0'
                    }
                ],
                series: [
                    {
                        name: '日K',
                        type: 'candlestick',
                        data: this.data0.values,
                        itemStyle: {
                            normal: {
                                color: this.upColor,
                                color0: this.downColor,
                                borderColor: this.upBorderColor,
                                borderColor0: this.downBorderColor
                            }
                        }
                    }
                ]
            };
            if (this.mode !== 'simple') {
                chartOption.legend.data = ['日K', 'MA5', 'MA10', 'MA20', 'MA30'];
                chartOption.series[0].markPoint = {
                    label: {
                        normal: {
                            formatter: function (param) {
                                return param != null ? Math.round(param.value) : '';
                            }
                        }
                    },
                    data: [
                        {
                            name: 'XX标点',
                            coord: ['2013/5/31', 2300],
                            value: 2300,
                            itemStyle: {
                                normal: {color: 'rgb(41,60,85)'}
                            }
                        },
                        {
                            name: 'highest value',
                            type: 'max',
                            valueDim: 'highest'
                        },
                        {
                            name: 'lowest value',
                            type: 'min',
                            valueDim: 'lowest'
                        },
                        {
                            name: 'average value on close',
                            type: 'average',
                            valueDim: 'close'
                        }
                    ],
                    tooltip: {
                        formatter: function (param) {
                            return param.name + '<br>' + (param.data.coord || '');
                        }
                    }
                };
                chartOption.series[0].markLine = {
                    symbol: ['none', 'none'],
                    data: [
                        [
                            {
                                name: 'from lowest to highest',
                                type: 'min',
                                valueDim: 'lowest',
                                symbol: 'circle',
                                symbolSize: 10,
                                label: {
                                    normal: {show: false},
                                    emphasis: {show: false}
                                }
                            },
                            {
                                type: 'max',
                                valueDim: 'highest',
                                symbol: 'circle',
                                symbolSize: 10,
                                label: {
                                    normal: {show: false},
                                    emphasis: {show: false}
                                }
                            }
                        ],
                        {
                            name: 'min line on close',
                            type: 'min',
                            valueDim: 'close'
                        },
                        {
                            name: 'max line on close',
                            type: 'max',
                            valueDim: 'close'
                        }
                    ]
                };
                chartOption.series = [chartOption.series[0],
                    {
                        name: 'MA5',
                        type: 'line',
                        data: this.calculateMA(5),
                        smooth: true,
                        lineStyle: {
                            normal: { opacity: 0.5 }
                        }
                    },
                    /* {
                        name: 'MA10',
                        type: 'line',
                        data: this.calculateMA(10),
                        smooth: true,
                        lineStyle: {
                            normal: { opacity: 0.5 }
                        }
                    }, */
                    {
                        name: 'MA20',
                        type: 'line',
                        data: this.calculateMA(20),
                        smooth: true,
                        lineStyle: {
                            normal: { opacity: 0.5 }
                        }
                    }/* ,
                    {
                        name: 'MA30',
                        type: 'line',
                        data: this.calculateMA(30),
                        smooth: true,
                        lineStyle: {
                            normal: { opacity: 0.5 }
                        }
                } */];
            }
            this.chart.setOption(chartOption);
            this.loading = false;
        },
        initData () {
            this.loading = true;
            this.chart = echarts.init(
                document.getElementsByClassName(this.mode)[0],
                'macarons'
            );
            axios.get('/alphavantage').then(res => {
                if (res && res.data['Weekly Adjusted Time Series']) {
                    this.data0 = this.splitData1(res.data['Weekly Adjusted Time Series']);
                    this.initChart();
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.chart-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    .stock-chart {
    }
    .detail-btn {
      position: absolute;
      right: 40px;
      top: -8px;
    }
    .simple {
        height: 350px;
    }
    .detail {
        height: 500px;
    }
}
</style>

