<template>
  <div class="nav">
    <div class="nav-top x-flex ai-center jc-between">
      <!-- 左侧信息 -->
      <div class="x-flex ai-center">
        <el-button
          type="primary"
          :icon="iconArrow ?'el-icon-arrow-right':'el-icon-arrow-left'"
          size="mini"
          plain
          @click.native.prevent="togglerSideBar"
        ></el-button>
        <h3 class="m-3 dp-ib">admin管理平台</h3>
      </div>
      <!-- 右侧用户信息栏 -->
      <div>
        <span class="mr-3 font-xs">
          欢迎
          <a href="javascript:;">{{testUser}}</a>
        </span>
        <el-dropdown>
          <el-button size="mini">
            <img src="@as/img/duck.png" alt width="15" heigh="15" style="vertical-align: bottom;" />
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- 面包屑导航 -->
    <breadcrumb />
    <!-- 标签导航 -->
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
      testUser: "涪陵榨菜",
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
.nav-top {
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0px 27px 3px #ddd;
  -moz-box-shadow:  0 0px 27px 3px #ddd;
  -webkit-box-shadow: 0 0px 27px 3px #ddd;
}
</style>
