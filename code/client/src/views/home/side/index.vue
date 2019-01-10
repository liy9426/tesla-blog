<template>
   <div class="side-container">
       <stock-chart mode='simple' class="side-item"></stock-chart>
       <side-top-read class="side-item"></side-top-read>
       <side-ad class="side-item" :class="{'scroll-fix': scrollFix}"></side-ad>
   </div>
</template>

<script>
import StockChart from 'src/components/Stock/StockChart';
import SideTopRead from './SideTopRead';
import SideAd from './SideAd';
export default {
    data () {
        return {
            scrollFix: false
        };
    },
    components: {
        StockChart,
        SideTopRead,
        SideAd
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            const el = document.scrollingElement || document.documentElement;
            this.scrollFix = el.scrollTop > 550;
        }
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style scoped lang="scss">
.side-container {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .side-item {
        margin-bottom: 10px;
    }

    .scroll-fix {
        position: fixed;
        left: calc(66% + 6px);
        top: 68px;
        width: 24%;
    }
}
</style>

