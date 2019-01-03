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
        background-color: red;
    }
}
</style>
