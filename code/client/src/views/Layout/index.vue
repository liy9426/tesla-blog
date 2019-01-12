<template>
  <div>
    <el-container class="container">
      <el-header class="header">
        <tesla-header></tesla-header>
      </el-header>
      <el-main class="main">
        <el-container class="main-container">
          <el-aside class="main-content">
            <router-view></router-view>
          </el-aside>
          <el-main class="main-side">
            <side></side>
          </el-main>
        </el-container>
      </el-main>
      <el-footer class="footer">
        <tesla-footer></tesla-footer>
      </el-footer>
      <fixer class="fixer"></fixer>
    </el-container>
  </div>
</template>
<script>
import TeslaHeader from './header.vue';
import TeslaFooter from './footer.vue';
import Side from './side/index';
import Fixer from 'src/components/Fixer/Fixer';
export default {
    components: {
        TeslaHeader,
        TeslaFooter,
        Side,
        Fixer
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
        border-top: 3px solid #008acd;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1),
            0 1px rgba(0, 0, 0, 0.1);
        background: #fafafa;
        box-sizing: border-box;
        position: fixed;
    }
    .main {
        min-height: calc(100vh - 110px);
        margin-top: 60px;
        display: flex;
        justify-content: center;
        overflow: hidden;

        .main-container {
            width: 850pt !important;
            flex: none;

            .main-content {
                width: 610pt !important;
            }

            .main-side {
                /* border: 1px solid red; */
                width: 240pt;
                flex: none;
                padding: 0;
                margin: 0 10px;
            }
        }
    }
    .footer {
        background: #fafafa;
        /* border-bottom: 3px solid #009a61; */
        border-bottom: 3px solid #008acd;
    }
    .fixer {
        position: fixed;
        right: 50px;
        bottom: 75pt;
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

