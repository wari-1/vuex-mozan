import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
import carts from "./modules/carts";
import address from "./modules/address";
import options from "./modules/options";
import logger from "vuex/dist/logger";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    carts,
    address,
    options
  },
  plugins: [logger()]
});
