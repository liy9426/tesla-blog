<template>
  <div class="header-container">
    <img
      src="../../images/logo.png"
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
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">专题</template>
            <el-menu-item index="2-1">MODEL X</el-menu-item>
            <el-menu-item index="2-2">MODEL S</el-menu-item>
            <el-menu-item index="2-3">MODEL Y</el-menu-item>
            <el-menu-item index="2-4">MODEL 3</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">特斯拉中国</el-menu-item>
          <el-menu-item index="6">特斯拉全球</el-menu-item>
          <el-menu-item index="3">技术分享</el-menu-item>
          <el-menu-item index="5"><a
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
            activeIndex: '1',
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
