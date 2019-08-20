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
    <div class="tagBar pt-1 pb-1">
      <tags style="flex:1;" />
      <el-button type="danger" size="mini" style="margin-left:10px;">关闭所有</el-button>
    </div>
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
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="scss" scoped>
.tagBar {
  display: flex;
  justify-content: space-between;
  padding:5px 15px;
  background-color: #fff;
  // border-top: 2px solid forestgreen;
  // border-bottom: 2px solid forestgreen;
}
</style>
