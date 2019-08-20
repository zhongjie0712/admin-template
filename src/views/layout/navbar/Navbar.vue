<template>
  <div class="nav">
    <h1>nav</h1>
    <div class="x-flex ai-center">
      <el-button
        type="primary"
        :icon="iconArrow ?'el-icon-arrow-right':'el-icon-arrow-left'"
        size="small"
        plain
        @click.native.prevent="togglerSideBar"
      ></el-button>
      <breadcrumb />
    </div>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first" />
        <el-tab-pane label="配置管理" name="second" />
        <el-tab-pane label="角色管理" name="third" />
        <el-tab-pane label="定时任务补偿" name="fourth" />
      </el-tabs>
    </div>
  </div>
</template>

<script>
import breadcrumb from "./Breadcrumb";
export default {
  components: { breadcrumb },
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
  // display: flex;
  border-top: 2px solid forestgreen;
  border-bottom: 2px solid forestgreen;
}
</style>
