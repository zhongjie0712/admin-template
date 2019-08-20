<template>
  <div class="layout">
    <!-- <el-scrollbar class="sidebar-container"> -->
      <sidebar />
    <!-- </el-scrollbar> -->

    <div class="main-container">
      <div class="navbar-container">
        <navbar />
      </div>
      <app-main class="app-main-container" />
    </div>
  </div>
</template>

<script>
import sidebar from "./sidebar/Sidebar";
import navbar from "./navbar/Navbar";
import AppMain from "./appMain/AppMain";
export default {
  name: "Layout",
  components: {
    sidebar,
    navbar,
    AppMain
  },
  data() {
    return {};
  },
  computed: {
    fixedHeader() {
      return false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@as/style/variables.scss";
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: $sideBarWidth;
  min-height: 100vh;
}
.layout {
  display: flex;
}
.sidebar-container {
  height: 100vh;
  background-color: #545c64;
}
.sidebar-container ::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.main-container {
  flex: 1;
  .navbar-container {
    height: $navbarContainerHeigt;
  }
  .app-main-container {
    height: calc(100% - $navbarContainerHeigt);
  }
}
</style>

