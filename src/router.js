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
import { PUBLICURL } from "../constants";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: PUBLICURL + "/#",
      component: Home
    },
    {
      path: PUBLICURL + "/cart1#",
      component: Cart1
    },
    {
      path: PUBLICURL + "/cart2#",
      component: Cart2
    },
    {
      path: PUBLICURL + "/order#",
      component: Order
    },
    {
      path: PUBLICURL + "/shouyingtai1#",
      component: Shouyingtai1
    },
    {
      path: PUBLICURL + "/shouyingtai2#",
      component: Shouyingtai2
    },
    {
      path: PUBLICURL + "/shouyingtai3#",
      component: Shouyingtai3
    },
    {
      path: PUBLICURL + "/shouyingtai4#",
      component: Shouyingtai4
    }
  ],
  mode: "hash"
});
