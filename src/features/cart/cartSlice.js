import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  //   cart: [],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }) {
      state.cart.push(payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItem(state, { payload }) {
      const item = state.cart.find((item) => item.pizzaId === payload);
      item.quantity++;
      state.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItem(state, { payload }) {
      const item = state.cart.find((item) => item.pizzaId === payload);
      item.quantity--;
      state.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, { payload });
    },
    clearItem(state, { payload }) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, increaseItem, decreaseItem, clearItem } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCard = (state) => state.cart.cart;
export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);

export const getCurrentQunatityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
