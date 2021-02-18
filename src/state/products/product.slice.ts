import { createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "../../types/product";

type productSliceProps = {
  loading: boolean;
  data: ProductItem[];
  error: any;
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    data: [],
    error: null,
  } as productSliceProps,
  reducers: {
    actionLoading(state, action) {
      state.loading = true;
    },
    actionError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getProductsSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    updateProductSuccess(state, action) {
      state.data = state.data.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        }
        return product;
      });
      state.loading = false;
    },
  },
});

export default productSlice.reducer;
export const {
  getProductsSuccess,
  updateProductSuccess,
  actionLoading,
  actionError,
} = productSlice.actions;
