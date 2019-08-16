<template>
  <div class="layout">
    <el-scrollbar class="sidebar-container">
      <sidebar />
    </el-scrollbar>

    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}" class="navbar-container p-2">
        <navbar />
      </div>
      <app-main class="app-main-container p-2" />
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
$navbarContainerHeigt: 100px;
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
/* .fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
} */
</style>

