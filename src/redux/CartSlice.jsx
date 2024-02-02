import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    count: 1,
    cartProducts: [],
  },
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setCartProducts: (state, action) => {
      state.cartProducts = action.payload;
    },
    addToCard: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id == action.payload
      );},

    increaseCount: (state, action) => {
      const { id, newCount } = action.payload;
      state.cartProducts = state.cartProducts.map((product, index) =>
        index === id ? { ...product, count: newCount } : product
      );
    },
    decreaseCount: (state, action) => {
      const { id, newCount } = action.payload;
      state.cartProducts = state.cartProducts.map((product, index) =>
        index === id ? { ...product, count: newCount } : product
      );
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    updateCartData: (state, action) => {
      state.cartProducts = action.payload
    },

  },
});

export const {
  setCount,
  setCartProducts,
  addToCart,
  increaseCount,
  decreaseCount,
  removeFromCart,
  updateCartData,
} = cartSlice.actions;

export default cartSlice.reducer;