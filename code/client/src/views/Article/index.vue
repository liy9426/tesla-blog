<template>
  <article class="article-container">
    <h1 class="title">{{blogInfo.title}}</h1>
    <div class="subtitle">
        <div class="release-date">
            发布时间: {{blogInfo.releaseTime | parseTime('{y}-{m}-{d}')}}
        </div>
        <div class="category">
            <div class="category-title">分类:</div>
            <div v-for="(item,index) in blogInfo.subtypes" :key="index" class="category-item">{{item}}</div>
        </div>
        <div class="share">
            <span style="padding-right: 5px;">分享: </span>
            <social-share :article="blogInfo"></social-share>
        </div>
    </div>
    <div v-html="blogHtml" class="html"></div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import SocialShare from 'src/components/Share/SocialShare';
export default {
    data () {
        return {
            blogHtml: ''
        };
    },
    async mounted () {
        await this.$store.dispatch('getBlogInfo', this.$route.params.id);
        this.blogHtml = this.blogInfo.html;
    },
    methods: {},
    computed: {
        ...mapGetters(['blogInfo'])
    },
    watch: {
        blogInfo () {
            document.title = this.blogInfo.title;
        }
    },
    components: {
        SocialShare
    }
};
</script>


<style lang="less" scoped>
.article-container {
    padding: 20px;
    .title {
        text-align: center;
        /* margin-bottom: 20px; */
        font-size: 22px;
    }
    .subtitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #919898;
        font-size: 14px;
        margin: 4px 0;

        .release-date {
        }

        .category {
            display: flex;
            .category-title {
                margin-right: 10px;
            }
            .category-item:not(:last-child){
                margin-right: 10px;
            }
        }

        .share {
            display: flex;
            align-items: center;
        }
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




