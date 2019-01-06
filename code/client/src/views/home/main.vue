<template>
  <div class="main-container">
    <el-container class="main-container2">
      <el-aside class="main-content">
        <el-card>
          <div
            v-for="o in 100"
            :key="o"
            class="text item"
          >
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-aside>
      <el-main class="main-side">
              <side></side>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Side from './side';
export default {
    name: '',
    data () {
        return {};
    },
    components: {
        Side
    }
};
</script>

<style scoped lang="scss">
.main-container {
  width: 100%;
  display: flex;
  justify-content: center;

  .main-container2 {
    width: 50%!important;
    flex: none;

    .main-content {
      width: 70%!important;
    }

    .main-side {
      /* border: 1px solid red; */
      width: 30%;
      flex: none;
      padding: 0;
      margin: 0 10px;
    }
  }
}
</style>

<style lang="scss">

</style>

