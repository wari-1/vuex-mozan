import moment from "moment";
const products = {
  state: {
    all: [
      {
        id: "1",
        title: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
        price: 79,
        inventory: 5,
        src: "../assets/images/home_09.jpg",
        deadline: "2019-09-24T15:05:42+08:00",
        style: "iphone 5",
        size: "XL",
        count: 1,
        checked: false,
        over: false,
        tooltip: false
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
        count: 1,
        checked: false,
        tooltip: false,
        over: false
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
        count: 1,
        checked: false,
        tooltip: false,
        over: false
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
        count: 1,
        checked: false,
        tooltip: false
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
        count: 1,
        checked: false,
        tooltip: false
      }
    ],
    newProducts: [],
    checked2: false,
    checked3: false,
    checked4: false,
    count: "",
    timer: null,
    zhifuType: "",
    phonenum: "",
    pwd: "",
    types: [
      {
        id: "122",
        type: "iPhone 5",
        checked: false
      },
      {
        id: "12redd2",
        type: "iPhone 6",
        checked: false
      },
      {
        id: "12fdsd2",
        type: "iPhone 6+",
        checked: false
      }
    ],
    sizes: [
      {
        id: "45421",
        size: "XXS",
        checked: false
      },
      {
        id: "45wewe421",
        size: "XS",
        checked: false
      },
      {
        id: "45refe421",
        size: "S",
        checked: false
      },
      {
        id: "454wqdwqd21",
        size: "M",
        checked: false
      },
      {
        id: "454qwdd21",
        size: "L",
        checked: false
      },
      {
        id: "454qqwd21",
        size: "XL",
        checked: false
      },
      {
        id: "45sdffd421",
        size: "XXL",
        checked: false
      }
    ],
    count: 1,
    choseProduct: null
  },
  mutations: {
    add1(state) {
      state.count++;
    },
    sub1(state) {
      if (state.count > 1) {
        state.count--;
      }
    },
    changetype(state, payload) {
      state.types = state.types.map(item => {
        return {
          ...item,
          checked: false
        };
      });
      state.types.find(
        item => item.id === payload.id
      ).checked = !state.types.find(item => item.id === payload.id).checked;
    },
    changesize(state, payload) {
      state.sizes = state.sizes.map(item => {
        return {
          ...item,
          checked: false
        };
      });
      state.sizes.find(
        item => item.id === payload.id
      ).checked = !state.sizes.find(item => item.id === payload.id).checked;
    },
    getNewProduct(state) {
      state.choseProduct = {
        id: new Date().getTime(),
        size: state.sizes.find(item => item.checked).size,
        type: state.types.find(item => item.checked).type,
        count: state.count
      };
    },
    updatephonenum(state, phonenum) {
      state.phonenum = phonenum;
    },
    updatepwd(state, pwd) {
      state.pwd = pwd;
    },
    add(state, payload) {
      state.all.find(item => item.id === payload.id).count++;
    },
    sub(state, payload) {
      if (state.all.find(item => item.id === payload.id).count > 1) {
        state.all.find(item => item.id === payload.id).count--;
      } else {
        state.all = state.all.filter(item => item.id != payload.id);
      }
    },
    tooltipShow(state, payload) {
      state.all.find(item => item.id === payload.id).tooltip = !state.all.find(
        item => item.id === payload.id
      ).tooltip;
    },
    del(state, payload) {
      state.all = state.all.filter(item => item.id != payload.id);
    },
    delChecked(state) {
      state.all = state.all.filter(item => !item.checked);
    },
    changeChecked(state, payload) {
      state.all.find(item => item.id === payload.id).checked = !state.all.find(
        item => item.id === payload.id
      ).checked;
    },
    changeAll(state, payload) {
      console.log("111");
      state.all = state.all.map(item => {
        return {
          ...item,
          checked: !payload.allState
        };
      });
      console.log(state.all);
    },
    addOrder(state) {
      const m1 = moment().format("YYYY-MM-DD HH:mm:ss");
      state.newProducts = state.all.filter(
        item =>
          item.checked &&
          item.inventory > 0 &&
          moment(item.deadline).diff(m1, "second") > 0
      );
      state.all = state.all.filter(
        item =>
          !item.checked &&
          item.inventory > 0 &&
          moment(item.deadline).diff(m1, "second") > 0
      );

      // console.log(state.newProducts);
    },
    changeChecked2(state) {
      state.checked2 = !state.checked2;
    },
    changeChecked3(state) {
      state.checked3 = !state.checked3;
    },
    changeChecked4(state) {
      state.checked4 = !state.checked4;
    },
    getCode(state) {
      const TIME_COUNT = 60;
      if (!state.timer) {
        state.count = TIME_COUNT;
        state.timer = setInterval(() => {
          if (state.count > 0 && state.count <= TIME_COUNT) {
            state.count--;
          } else {
            clearInterval(state.timer);
            state.timer = null;
          }
        }, 1000);
      }
    }
  },
  getters: {
    goodsNum(state) {
      return state.all
        .filter(item => item.checked)
        .reduce((res, item) => res + item.count, 0);
    },
    total(state) {
      const m1 = moment().format("YYYY-MM-DD HH:mm:ss");
      // const m2=moment(state.products.find(item => item.id === id).deadline).diff(
      //   m1,
      //   "second"
      // )
      return state.all
        .filter(
          item =>
            item.checked &&
            item.inventory > 0 &&
            moment(item.deadline).diff(m1, "second") > 0
        )
        .reduce((res, item) => res + item.count * item.price, 0)
        .toFixed(2);
    },
    choseNum(state) {
      return state.newProducts.reduce((res, item) => res + item.count, 0);
    },
    choseTotal(state) {
      return state.newProducts.reduce(
        (res, item) => res + item.count * item.price,
        0
      );
    }
  }
};
export default products;
