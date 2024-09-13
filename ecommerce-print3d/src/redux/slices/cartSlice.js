// src/redux/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        // Increment the quantity if the item already exists
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity of 1 if it doesn't exist
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload.id;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    // Optionally, you might want to add an action to adjust item quantities or clear the cart
    adjustQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, adjustQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
