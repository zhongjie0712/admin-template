<template>
  <div class="nav">
    <h1>nav</h1>
    <div class='x-flex ai-center'>
      <el-button
        type="primary"
        :icon="iconArrow ?'el-icon-arrow-right':'el-icon-arrow-left'"
        size="small"
        plain
        @click.native.prevent="togglerSideBar"
      ></el-button>
      <breadcrumb />
    </div>
  </div>
</template>

<script>
import breadcrumb from './Breadcrumb'
export  default {
  components:{breadcrumb},
  data() {
    return {
      iconArrow: false
    };
  },
  computed: {},
  methods: {
    togglerSideBar() {
      this.iconArrow = !this.iconArrow;
      this.$store.commit("isCollapse")
    }
  }
};
</script>
