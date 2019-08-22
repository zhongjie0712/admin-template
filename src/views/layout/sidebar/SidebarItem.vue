<template>
  <div class="sidebaritem">
    <!-- 有子路由，且只有一个子路由 -->
    <el-menu-item
      v-if="item.children && item.children.length==1"
      :index="item.children[0].name"
      @click="toRoute(item.children[0].name)"
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
        <!-- 判断首层组件是否为'Layout',为true时，侧边栏隐藏时，首层标签名隐藏 -->
        <span
          slot="title"
          :class="{'top_text':isCollapse && item.component.name=='Layout' }"
        >{{item.meta.title}}</span>
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
  </div>
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
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  methods: {
    toRoute(name) {
      this.$router.push({ name });
    }
  }
};
</script>
<style lang="scss" scoped>
.top_text {
  visibility: hidden;
}
</style>