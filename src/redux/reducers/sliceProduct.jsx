import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.data = action.payload;
    },
    incrementProdcuts: (state, action) => {
      let product = state.data.map((item) => item._id === action.payload._id);
      if (product) {
        product.count += 1;
      }
    },
    decrementProdcuts: (state, action) => {
      let product = state.data.map((item) => item._id === action.payload._id);
      if (product && product.count > 0) {
        product.count -= 1;
      }
    },
  },
});

export const { getProducts, incrementProdcuts, decrementProdcuts } =
  productSlice.actions;
export default productSlice.reducer;
