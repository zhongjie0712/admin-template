<template>
  <div>
    <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in levelList" :key="item.path">
          <a @click="toRoute(item.name)" class="mr-2">{{item.meta.title}}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    toRoute(name) {
      this.$router.push({ name });
    },
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
      // console.log(matched);
      if (matched[0].name == "Home") {
        this.levelList = [
          { path: "/home", name: "Home", meta: { title: "首页" } }
        ];
        // console.log("home")
      } else {
        this.levelList = [
          { path: "/home", name: "Home", meta: { title: "首页" } }
        ].concat(matched);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>