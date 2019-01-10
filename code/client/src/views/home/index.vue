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
  </div>
</template>
<script>
import TeslaHeader from './header.vue';
import TeslaFooter from './footer.vue';
import TeslaMain from './main.vue';
export default {
    components: {
        TeslaHeader,
        TeslaFooter,
        TeslaMain
    }
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    min-width: 1000px;
    overflow: hidden;
  .header {
    width: 100%;
    min-width: 1000px;
    z-index: 3;
    /* border-top: 3px solid #009a61; */
    border-top: 3px solid #008acd;
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
    /* border-bottom: 3px solid #009a61; */
    border-bottom: 3px solid #008acd;
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

