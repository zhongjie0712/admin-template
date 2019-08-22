import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../src/assets/style/global.scss";
import "../src/assets/style/ui.scss";
import "../src/assets/style/transition.scss";
import './promission'
Vue.use(ElementUI);

//* 解决跳转重复路径的报错信息
Vue.config.productionTip = false;
const originalPush = router.push;
router.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

console.log(process.env.NODE_ENV);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
