const address = {
  state: {
    address: [
      {
        id: "445",
        name: "yyqx",
        text: "北京市昌平区宏福中路4号",
        phoneNum: "150****9702",
        isDefault: false,
        checked: false,
        tooltip: false
      },
      {
        id: "44we5",
        name: "yyqxtt",
        text: "河北省秦皇岛市海港区燕山大学西校区(快递柜代收)",
        phoneNum: "150****9702",
        isDefault: false,
        checked: false,
        tooltip: false
      },
      {
        id: "4fsev45",
        name: "xxxx",
        text: "江西省赣州市于都县贡江镇里泗村五里组8号",
        phoneNum: "150****9702",
        isDefault: false,
        checked: false,
        tooltip: false
      },
      {
        id: "4fseaqwv45",
        name: "xxxxxxxxxx",
        text: "江西省赣州市于都县贡江镇里泗村五里组8号",
        phoneNum: "150****9702",
        isDefault: false,
        checked: false,
        tooltip: false
      },
      {
        id: "4fseawwqwqqqwv45",
        name: "xxxxx从v的xxxx",
        text: "江西省赣州市于都县贡江镇里泗村屋里五里组8号",
        phoneNum: "150****9702",
        isDefault: false,
        checked: false,
        tooltip: false
      }
    ],
    name: "",
    phone: "",
    dizhi: ""
  },
  mutations: {
    tooltipShow1(state, payload) {
      state.address.find(
        item => item.id === payload.id
      ).tooltip = !state.address.find(item => item.id === payload.id).tooltip;
    },
    del1(state, payload) {
      state.address = state.address.filter(item => item.id != payload.id);
    },
    changeChecked1(state, payload) {
      if (!state.address.find(item => item.id === payload.id).checked) {
        state.address = state.address.map(item => {
          return {
            ...item,
            checked: false
          };
        });
        state.address.find(item => item.id === payload.id).checked = true;
      } else {
        state.address.find(item => item.id === payload.id).checked = false;
      }
    },
    changeDefault(state, payload) {
      // if (!state.address.find(item => item.id === payload.id).isDefault) {
      state.address = state.address.map(item => {
        return {
          ...item,
          isDefault: false
        };
      });
      state.address.find(item => item.id === payload.id).isDefault = true;
      // } else {
      //   state.address.find(item => item.id === payload.id).isDefault = false;
      // }
    },
    updateName(state, name) {
      state.name = name;
    },
    updatePhone(state, phone) {
      state.phone = phone;
    },
    updateDizhi(state, dizhi) {
      state.dizhi = dizhi;
    },
    restoreDizhi(state, payload) {
      if (state.name.trim() && state.phone.trim() && state.dizhi.trim()) {
        state.address.push({
          name: state.name,
          text: `${payload.province}${payload.city}${payload.area}${
            state.dizhi
          }`,
          phoneNum: state.phone,
          isDefault: payload.isDefault,
          checked: false,
          tooltip: false
        });
        state.name = "";
        state.phone = "";
        state.dizhi = "";
      }
    }
  },
  getters: {
    newAddress(state) {
      if (state.address.find(item => item.checked)) {
        return state.address.find(item => item.checked);
      } else if (state.address.find(item => item.isDefault)) {
        return state.address.find(item => item.isDefault);
      } else {
        return null;
      }
    },
    num(state) {
      return state.address.length;
    }
  }
};
export default address;
