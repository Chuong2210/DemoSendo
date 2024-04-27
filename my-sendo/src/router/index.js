import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Product from "@/components/Product.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/menu",
    name: "menu-router",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MenuView.vue"),
  },
  {
    path: "/chaohang",
    name: "chaohang-router",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ChaoHangView.vue"),
  },
  {
    path: "/huongdan",
    name: "huongdan-router",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HuongDanView.vue"),
  },
  {
    path: "/muadee",
    name: "muadee-router",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MUADEEView.vue"),
  },
  {
    path: "/select",
    name: "select-router",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SelectView.vue"),
  },
  {
    path: "/tai-ung-dung",
    name: "TaiUngDung-router",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TaiUngDungView.vue"),
  },
  {
    path: "/product",
    name: "product-router",
    component: Product,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: () =>
      import(
        /*webpackChunkName:"product-detail"*/ "../views/ProductDetail.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
