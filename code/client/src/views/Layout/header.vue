<template>
  <div class="header-container">
    <img
      src="../../assets/images/logo.png"
      alt="logo"
      class="logo-img"
    >
    <div class="nav">
      <div class="nav-menu">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          background-color="#fafafa"
          active-text-color="#008acd"
          router
        >
          <el-menu-item index="home">首页</el-menu-item>
          <el-submenu>
            <template slot="title">专题</template>
            <el-menu-item index="model-s">MODEL S</el-menu-item>
            <el-menu-item index="model-3">MODEL 3</el-menu-item>
            <el-menu-item index="model-x">MODEL X</el-menu-item>
            <el-menu-item index="model-y">MODEL Y</el-menu-item>
          </el-submenu>
          <el-menu-item index="tesla-china">特斯拉中国</el-menu-item>
          <el-menu-item index="tesla-world">特斯拉全球</el-menu-item>
          <el-menu-item index="geek">技术分享</el-menu-item>
          <el-menu-item index="more"><a
              href="https://www.ele.me"
              target="_blank"
            >更多</a></el-menu-item>
        </el-menu>
      </div>
      <div class="nav-search">
        <el-input
          placeholder="搜索关键字"
          v-model="input5"
          class="search"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
          ></el-button>
        </el-input>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TeslaHeader',
    data () {
        return {
            activeIndex: 'home',
            input5: ''
        };
    },
    methods: {
        handleSelect (key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-img {
    width: 30px;
    display: inline-block;
    margin-right: 60px;
  }

  .search {
  }

  .nav {
      display: flex;
      .nav-menu,
      .nav-search {
          display: inline-block;
      }

      .nav-search {
          padding-top: 10px;
          margin-left: 50px;
      }
  }
}
</style>
