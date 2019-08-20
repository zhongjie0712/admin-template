import Vue from "vue";
import Router from "vue-router";
import Login from "@views/login/Login";
import Layout from "@views/layout/Layout";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      hidden: true
    },
    {
      path: "/home",
      // name: "Home",
      component: Layout,
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("@views/home/Home"),
          meta: { title: "中国农业银行湖南分行", icon: "el-icon-menu" }
        }
      ]
    },
    {
      path: "/shop",
      name: "Shop",
      component: Layout,
      redirect: "/shop/phone",
      meta: { title: "Shop", icon: "el-icon-goods", lv: true },
      children: [
        {
          path: "phone",
          name: "Phone",
          component: () => import("@views/shop/Phone"),
          meta: { title: "Phone", icon: "el-icon-mobile-phone" },
          children: [
            {
              path: "phone",
              name: "Phone",
              component: () => import("@views/shop/Phone"),
              meta: { title: "Phone", icon: "el-icon-mobile-phone" }
            },
            {
              path: "pc",
              name: "Pc",
              component: () => import("@views/shop/Pc"),
              meta: { title: "PC", icon: "el-icon-picture-outline" }
            }
          ]
        },
        {
          path: "pc",
          name: "Pc",
          component: () => import("@views/shop/Pc"),
          meta: { title: "PC", icon: "el-icon-picture-outline" }
        },
        {
          path: "tv",
          name: "Tv",
          component: () => import("@views/shop/Tv"),
          meta: { title: "TV", icon: "el-icon-picture-outline" }
        }
      ]
    }
  ]
});
