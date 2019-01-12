<template>
  <div class="list-container">
    <blog-item
      v-for="(item, index) in blogList"
      :key="index"
      :item="item"
    ></blog-item>
  </div>
</template>

<script>
import BlogItem from 'src/components/Blog/BlogItem';
import { mapGetters } from 'vuex';
export default {
    data () {
        return {};
    },
    components: {
        BlogItem
    },
    created () {
        this.$store.dispatch('getBlogList');
    },
    methods: {},
    computed: {
        ...mapGetters(['blogList'])
    }
};
</script>

<style scoped lang="scss">
.list-container {
}
</style>

<style lang="scss">
</style>

