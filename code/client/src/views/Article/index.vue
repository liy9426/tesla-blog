<template>
  <article class="article-container">
    <h1 class="title">{{blogInfo.title}}</h1>
    <div v-html="blogHtml" class="html"></div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data () {
        return {
            blogHtml: ''
        };
    },
    async mounted () {
        await this.$store.dispatch('getBlogInfo', this.$route.params.id);
        this.blogHtml = this.blogInfo.html;
        console.log('this.blogHtml', this.blogHtml);
    },
    methods: {},
    computed: {
        ...mapGetters(['blogInfo'])
    },
    watch: {
        blogInfo () {
            document.title = this.blogInfo.title;
        }
    }
};
</script>


<style lang="less" scoped>
.article-container {
    padding: 20px;
    .title {
        text-align: center;
        margin-bottom: 20px;
        font-size: 22px;
    }
    .html {
        line-height: 28px;
        text-indent: 2em;
        text-align: justify;
        font-size:medium;
    }
}
</style>

<style lang="scss">
.ql-align-center {
        text-align: center;
}
</style>




