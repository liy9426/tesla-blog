<template>
   <div class="item-container">
       <el-card class="item-card">
          <div class="card-content">
              <div class="thumbnail"><img src="../../images/thumbnails/tesla.jpg" alt="thumbnail" height="100px"></div>
              <div class="content">
                  <div class="title">
                      <a href="">{{item.title}}</a>
                  </div>
                  <div class="tags">
                      <div class="release-time">
                          发布时间: {{item.releaseTime | parseTime('{y}-{m}-{d}')}}
                      </div>
                      <div class="category">
                          <div class="category-title">分类:</div>
                          <div v-for="(item,index) in item.subtypes" :key="index" class="category-item">{{item}}</div>
                      </div>
                  </div>
                  <div class="desc">
                      {{item.desc}}
                  </div>
              </div>
          </div>
        </el-card>
   </div>
</template>

<script>
export default {
    name: 'BlogItem',
    props: {
        item: {
            type: Object,
            default: {}
        }
    },
    data () {
        return {};
    },
    components: {},
    created () {
    }
};
</script>

<style scoped lang="scss">
.item-container {
    margin-bottom: 10px;
    .item-card {
        .card-content {
            display: flex;
            align-items: center;
            justify-content: center;
            .thumbnail {
                flex: 1;
                margin-right: 15px;
            }
            .content {
                flex: 10;
                height: 100px;

                .title a{
                    font-size: 18px;
                    font-weight: 800;
                    line-height: 26px;
                    height: 26px;
                    color: #111010;
                }

                .tags {
                    display: flex;
                    height: 33px;
                    line-height: 33px;
                    color: #919898;
                    font-size: 14px;

                    .release-time {
                        flex: 2;
                    }

                    .category {
                        flex: 3;
                        display: flex;
                        .category-title {
                            margin-right: 10px;
                        }
                        .category-item:not(:last-child){
                            margin-right: 10px;
                        }
                    }

                }

                .desc {
                    color: #526163;
                    height: 41px;
                    overflow: hidden;
                    font-size: 14px;
                    padding: 8px 9pt 3px 0;
                }
            }
        }
    }
}
</style>

