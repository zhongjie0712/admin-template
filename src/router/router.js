import Vue from "vue";
import Router from "vue-router";
import Login from "@views/login/Login";
import Layout from "@views/layout/Layout";
Vue.use(Router);

const SIDEBAR_MENUS = [
  //* 首页
  {
    path: "/home",
    // name: "Home",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@views/home/Home"),
        meta: { title: "首页", icon: "el-icon-menu" }
      }
    ]
  },
  //* 购物车
  {
    path: "/shop",
    name: "Shop",
    component: Layout,
    redirect: "/shop/phone",
    meta: { title: "SHOP", icon: "el-icon-goods" },
    children: [
      {
        path: "phone",
        name: "Phone",
        component: () => import("@views/shop/Phone"),
        meta: { title: "PHONE", icon: "el-icon-picture-outline" }
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
];

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      hidden: true
    },
    ...SIDEBAR_MENUS
  ]
});
