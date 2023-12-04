import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux-slice/CartReduser";
import RestaurantSlice from "./redux-slice/RestaurantSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: RestaurantSlice,
  },
});
