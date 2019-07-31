const carts = {
  state: {
    carts: {
      productIds: [],
      quantityById: {}
    }
  },
  mutations: {
    getCarts(state, carts) {
      state.carts = carts;
    }
  }
};
export default carts;
