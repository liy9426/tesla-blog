<template>
  <div class="main-container">
    <el-container class="main-container2">
      <el-aside class="main-content">
        <blog-item v-for="(item, index) in blogList" :key="index" :item="item"></blog-item>
      </el-aside>
      <el-main class="main-side">
              <side></side>
      </el-main>
    </el-container>
    <fixer class="main-fixer"></fixer>
  </div>
</template>

<script>
import Side from './side/index';
import BlogItem from 'src/components/Blog/BlogItem';
import Fixer from 'src/components/Fixer/Fixer';
import { mapGetters } from 'vuex';
export default {
    data () {
        return {};
    },
    components: {
        Side,
        BlogItem,
        Fixer
    },
    created () {
        this.$store.dispatch('getBlogList');
    },
    methods: {
    },
    computed: {
        ...mapGetters(['blogList'])
    }
};
</script>

<style scoped lang="scss">
.main-container {
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;

  .main-container2 {
    width: 850pt!important;
    flex: none;

    .main-content {
      width: 610pt!important;
    }

    .main-side {
      /* border: 1px solid red; */
      width: 240pt;
      flex: none;
      padding: 0;
      margin: 0 10px;
    }
  }

  .main-fixer {
    position: fixed;
    right: 50px;
    bottom: 75pt;
  }
}
</style>

<style lang="scss">

</style>

