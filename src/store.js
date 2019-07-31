import moment from "moment";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: [
      {
        id: "1",
        title: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
        price: 79,
        inventory: 5,
        src: "../assets/images/home_09.jpg",
        deadline: "2019-09-24T15:05:42+08:00",
        style: "iphone 5",
        size: "XL",
        count: 1
      },

      {
        id: "2",
        title: "龙之谷六周年纪念卡片",
        price: 29,
        inventory: 10,
        src: "../assets/images/home_11.jpg",
        deadline: "2019-07-21T15:05:42+08:00",
        style: "iphone 6",
        size: "L",
        count: 1
      },
      {
        id: "3",
        title: "龙之谷钥匙扣",
        price: 11,
        inventory: 7,
        src: "../assets/images/home_13.jpg",
        deadline: "2019-09-24T15:05:42+08:00",
        style: "iphone 6+",
        size: "XXL",
        count: 1
      },
      {
        id: "4",
        title: "龙之谷六周年T恤",
        price: 2.55,
        inventory: 0,
        src: "../assets/images/home_09.jpg",
        deadline: "2019-09-24T15:05:42+08:00",
        style: "iphone 5",
        size: "M",
        count: 1
      },
      {
        id: "5",
        title: "龙之谷六周年限定",
        price: 7.9,
        inventory: 2,
        src: "../assets/images/home_13.jpg",
        deadline: "2019-09-24T15:05:42+08:00",
        style: "iphone 5",
        size: "S",
        count: 1
      }
    ]
  },
  mutations: {
    getProducts(state) {
      state.products = products;
    },
    add(state, payload) {
      state.products.find(item => item.id === payload.id).count++;
    },
    sub(state, payload) {
      if (state.products.find(item => item.id === payload.id).count > 1) {
        state.products.find(item => item.id === payload.id).count--;
      } else {
        state.products = state.products.filter(item => item.id != payload.id);
      }
    },
    del(state, payload) {
      {
        state.products = state.products.filter(item => item.id != payload.id);
      }
    }
  },
  getters: {
    total(state) {
      return state.products
        .reduce((res, item) => res + item.price * item.count, 0)
        .toFixed(2);
    },
    goodsNum(state){
      return state.products
        .reduce((res, item) => res + item.count , 0)
    }
  }
});

export default store;
