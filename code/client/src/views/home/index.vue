<template>
  <div>
    <el-container class="container">
      <el-header class="header">Header</el-header>
      <el-main class="main">Main</el-main>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import infoComponent from './info.vue';
import BlogComponent from './blog.vue';
import TagsComponent from './tags.vue';
export default {
    data () {
        return {
            winH: document.documentElement.clientHeight || document.body.clientHeight
        };
    },
    components: {
        infoComponent,
        BlogComponent,
        TagsComponent
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
          // this.pageindex ++;
          // this.$store.dispatch('getBlogList', {
          //     type: this.$route.params.classify,
          //     pageindex: this.pageindex
          // })
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
  .header {
    width: 100%;
    height: 200px;
    position: relative;
    z-index: 3;
    border-top: 3px solid #009a61;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
    background: #fafafa;
  }
  .main {
    min-height: calc(100vh - 110px);
  }
  .footer {
    background: #fafafa;
    border-bottom: 3px solid #009a61;
  }
}
</style>
<style lang="scss">
.container {
    .footer {
        height: 50px!important;
    }
}
</style>

