<template>
  <div class="tagBar">
    <el-tabs
      class="tabs"
      type="card"
      :value="activeTagName"
      @tab-click="routerPush"
      @tab-remove="removeTab"
    >
      <el-tab-pane
        :key="item.name"
        v-for="item in tagList"
        :closable="item.meta.title!='首页'"
        :name="item.name"
      >
        <span slot="label">
          <i :class="item.meta.icon"></i>
          {{item.meta.title}}
        </span>
      </el-tab-pane>
    </el-tabs>
    <el-dropdown split-button type="danger" size="mini" @command="handleCommand">
      更多菜单
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="toHome">返回首页</el-dropdown-item>
        <el-dropdown-item command="closeAll">关闭所有标签</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    $route(v) {
      this.searchTags(v) && this.$store.commit("set_tagList", v);
    }
  },
  computed: {
    tagList() {
      return this.$store.getters.get_tagList;
    },
    activeTagName() {
      return this.$route.name;
    }
  },
  methods: {
    // 标签下拉菜单
    handleCommand(command) {
      //返回首页
      if (command === "toHome") {
        this.$router.push({ name: "Home" });
      } else if (command === "closeAll") {
        //挂你所有标签
        this.tagList.splice(1);
        this.$router.push({ name: "Home" });
      }
    },
    // 点击标签跳转
    routerPush(tab) {
      this.$router.push({ name: tab.name });
    },
    //关闭标签
    removeTab(targetName) {
      let tagIndex = this.tagList.findIndex(item => {
        return item.name === targetName; //返回对象所在数组中的下标
      });
      if (this.$route.name === targetName) {
        this.tagList.splice(tagIndex, 1);
        this.$router.push({ name: this.tagList[tagIndex - 1].name });
      } else {
        this.tagList.splice(tagIndex, 1);
      }
    },
    //查找新打开路由是否存在在tag数组里
    searchTags(r) {
      for (let i of this.tagList) {
        if (i.meta.title === r.meta.title) {
          return false;
        }
      }
      return true;
    }
  }
};
</script>
<style lang="scss" scoped>
.tagBar {
  display: flex;
  justify-content: left;
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0px 27px 3px #ddd;
  -moz-box-shadow:  0 0px 27px 3px #ddd;
  -webkit-box-shadow:  0 0px 27px 3px #ddd;
  // border-top: 2px solid forestgreen;
  // border-bottom: 2px solid forestgreen;
  .tabs {
    width: calc(100vw - 340px);
  }
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>