import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeToCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove product as not in cart`);
      }
      state.cart = newCart;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart } = counterSlice.actions;

export const selectCartItem = (state) => state.cart.cart;

export const selectCartItemById = (state, id) =>
  state.cart.cart.filter((item) => item.id === id);

export const selectCartTotal = (state) =>
  state.cart.cart.reduce((total, item) => (total += item.price), 0);

export default counterSlice.reducer;
