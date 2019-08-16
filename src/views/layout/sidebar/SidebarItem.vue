<template>
  <!-- 有子路由，且只有一个子路由 -->
  <el-menu-item
    v-if="item.children && item.children.length==1"
    :index="item.name"
    @click="toRoute(item.name)"
  >
    <i :class="item.children[0].meta.icon"></i>
    <span slot="title">{{item.children[0].meta.title}}</span>
  </el-menu-item>
  <!-- 有子路由，且多个子路由 -->
  <el-submenu
    v-else-if="item.children && item.children.length>1"
    :index="item.name"
    @click="toRoute(item.name)"
  >
    <template slot="title">
      <i :class="item.meta.icon"></i>
      <span slot="title">{{item.meta.title}}</span>
    </template>
    <!-- 多级子集的时候递归 -->
    <sidebar-item
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :base-path="child.path"
    />
  </el-submenu>
  <!-- 无子路由，且不为login级别组件 -->
  <el-menu-item
    v-else-if="!item.children && !item.hidden"
    :key="item.path"
    :index="item.name"
    @click="toRoute(item.name)"
  >
    <i :class="item.meta.icon"></i>
    <span slot="title">{{item.meta.title}}</span>
  </el-menu-item>
</template>
<script>
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    toRoute(name) {
      this.$router.push({ name });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>