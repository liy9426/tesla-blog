<template>
  <div>
    <el-container class="container">
      <el-header class="header">
        <tesla-header></tesla-header>
      </el-header>
      <el-main class="main">
        <tesla-main></tesla-main>
      </el-main>
      <el-footer class="footer">
        <tesla-footer></tesla-footer>
      </el-footer>
    </el-container>





    
      <div class="home-wrapper cf">
        <infoComponent></infoComponent>
        <div :class="{'tags-box': pc_bol}">
            <TagsComponent></TagsComponent>
        </div>
        <div :class="{'view-box': pc_bol}">
            <router-view>
                <BlogComponent></BlogComponent>
            </router-view>
        </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import infoComponent from './info.vue';
import BlogComponent from './blog.vue';
import TagsComponent from './tags.vue';
import TeslaHeader from './header.vue';
import TeslaFooter from './footer.vue';
import TeslaMain from './main.vue';
export default {
    data () {
        return {
            winH: document.documentElement.clientHeight || document.body.clientHeight
        };
    },
    components: {
        infoComponent,
        BlogComponent,
        TagsComponent,
        TeslaHeader,
        TeslaFooter,
        TeslaMain
    },
    mounted () {
        window.addEventListener('scroll', () => {
            let distance =
        document.documentElement.scrollTop || document.body.scrollTop;
            let scrollH =
        document.documentElement.scrollHeight || document.body.scrollHeight;

            if (distance + this.winH >= scrollH) {
                if (this.blogLoadingBol) {
                    console.log(111);
                }
            }
        });
    },
    computed: {
        ...mapGetters(['pc_bol'])
    }
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    min-width: 1000px;
    overflow-x: auto;
  .header {
    width: 100%;
    min-width: 900px;
    z-index: 3;
    border-top: 3px solid #009a61;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
    background: #fafafa;
    box-sizing: border-box;
    position: fixed;
  }
  .main {
    min-height: calc(100vh - 110px);
    margin-top: 60px;
  }
  .footer {
    background: #fafafa;
    border-bottom: 3px solid #009a61;
  }
}
</style>
<style lang="scss">
.container {
  .header {
    height: 63px !important;
  }
  .footer {
    height: 50px !important;
  }
  .main {
    padding: 10px;
  }
}
</style>
<style lang="less" scoped>
.tags-box {
  width: 30%;
  float: left;
}
.view-box {
  width: 67%;
  float: right;
}
</style>

