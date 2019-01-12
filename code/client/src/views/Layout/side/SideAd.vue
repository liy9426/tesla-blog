<template>
  <div class="top-read-container">
    <el-card class="box-card">
      <div
        slot="header"
        class="card-header"
      >
        <span>推广链接</span>
      </div>
      <div
        v-for="o in 4"
        :key="o"
        class="text item"
      >
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="scss">
.top-read-container {
    width: 100%;

    .card-header {
    }
}
</style>
