<template>
  <div class="nav">
    <div class="x-flex ai-center bg-white p-2">
      <el-button
        type="primary"
        :icon="iconArrow ?'el-icon-arrow-right':'el-icon-arrow-left'"
        size="small"
        plain
        @click.native.prevent="togglerSideBar"
      ></el-button>
      <h3 class="m-3">admin管理平台</h3>
    </div>
    <div>
      <breadcrumb />
    </div>
    <tags />
  </div>
</template>
<script>
import breadcrumb from "./Breadcrumb";
import tags from "./Tags";
export default {
  components: { breadcrumb, tags },
  data() {
    return {
      iconArrow: false,
      activeName: "second"
    };
  },
  computed: {},
  methods: {
    togglerSideBar() {
      this.iconArrow = !this.iconArrow;
      this.$store.commit("isCollapse");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
