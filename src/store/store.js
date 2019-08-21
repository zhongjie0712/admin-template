import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: false,
    tagList: [{ name: "Home", meta: { title: "首页", icon: "el-icon-menu" } }]
  },
  getters: {
    get_tagList: state => state.tagList
  },
  mutations: {
    isCollapse(state, v) {
      state.isCollapse = !state.isCollapse;
    },
    set_tagList(state, v) {
      state.tagList.push(v);
    }
  },
  actions: {}
});
