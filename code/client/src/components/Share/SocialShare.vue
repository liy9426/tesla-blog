<template>
  <div
    class="share-container"
    v-if="showShare"
  >
    <share :config="config"></share>
  </div>
</template>

<script>
import Share from 'vue-social-share';
export default {
    props: {
        article: {
            type: Object,
            default: {}
        }
    },
    data () {
        return {
            config: {
                url: window.location.href, // 网址，默认使用 window.location.href, 微信只使用网址, 微博使用网址和标题
                title: '', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
                description: '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
                sites: ['weibo', 'wechat', 'twitter', 'google'], // 启用的站点
                wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
                wechatQrcodeHelper:
                    '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
            },
            showShare: false
        };
    },
    components: {
        Share
    },
    watch: {
        article (nVal) {
            if (!nVal) return;
            this.config.title = nVal.title;
            this.config.description = nVal.desc;
            this.config.url = nVal.url;
            this.showShare = true;
        }
    }
};
</script>

<style scoped lang="scss">
</style>

<style lang="scss">
.share-container {
    .social-share {
        .wechat-qrcode {
            top: 45px;
            left: -50px;
            &::after {
                display: none;
            }
        }
        .icon-wechat,
        .icon-weibo,
        .icon-twitter,
        .icon-google {
            border: none;
        }


    }
}
</style>

