<template>
  <div class="footer-container">
    <div class="footer-content">
      <span>
        Design by: 美国老土
      </span>
      <span>
        <a href="mailto:yaying9610@gmail.com">联系站长</a>
      </span>
      <span>
        <a @click="handleShowWechat">微信</a>
      </span>
      <span>
        <a
          href="https://github.com/liy9426"
          target="blank"
        >github</a>
      </span>
      <span>
        <a href="mailto:yaying9610@gmail.com">意见与建议</a>
      </span>
      <span>
          备案号：湘ICP备14011335号-2
      </span>
    </div>

    <el-dialog
      :visible.sync="wechatVisible"
      width="240px"
      :show-close="false"
    >
      <span><img src="../../images/wechat.png" alt="" width="200px"></span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            wechatVisible: false
        };
    },
    components: {},
    methods: {
        handleShowWechat () {
            this.wechatVisible = true;
        }
    }
};
</script>

<style scoped lang="scss">
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-content {
    span {
      display: inline-block;
      padding: 0 10px;
      font-size: 14px;
      line-height: 50px;
    }
  }
}
</style>
