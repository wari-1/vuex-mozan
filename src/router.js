import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Cart1 from "./components/Cart1.vue";
import Cart2 from "./components/Cart2.vue";
import Order from "./components/Order.vue";
import Shouyingtai1 from "./components/Shouyingtai1.vue";
import Shouyingtai2 from "./components/Shouyingtai2.vue";
import Shouyingtai3 from "./components/Shouyingtai3.vue";
import Shouyingtai4 from "./components/Shouyingtai4.vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/cart1",
      component: Cart1
    },
    {
      path: "/cart2",
      component: Cart2
    },
    {
      path: "/order",
      component: Order
    },
    {
      path: "/shouyingtai1",
      component: Shouyingtai1
    },
    {
      path: "/shouyingtai2",
      component: Shouyingtai2
    },
    {
      path: "/shouyingtai3",
      component: Shouyingtai3
    },
    {
      path: "/shouyingtai4",
      component: Shouyingtai4
    }
  ],
  mode: "history"
});
