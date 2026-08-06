import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let itemId = state.items.findIndex((item) => item.id === action.payload);
      if (itemId >= 0) {
        state.items[itemId].count += 1;
      } else {
        state.items.push({ id: action.payload, count: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        if (state.items[index].count > 1) {
          state.items[index].count -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },

    removeFromCartFullItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
          state.items.splice(index, 1);
      }
    },

  },
});

export const itemsInCart = (state) => state.cart.items.length;

export const { addToCart, removeFromCart, removeFromCartFullItem } = cartSlice.actions;
export default cartSlice.reducer;
