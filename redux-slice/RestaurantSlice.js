import { createSlice } from "@reduxjs/toolkit";

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    id: null,
    image: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    description: null,
    dishes: null,
  },
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = RestaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default RestaurantSlice.reducer;
