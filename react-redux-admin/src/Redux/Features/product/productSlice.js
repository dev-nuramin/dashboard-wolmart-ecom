// create apiSlice

import { createSlice } from "@reduxjs/toolkit";
import { createBrand, deleteBrand, getAllBrand } from "./productApiSlice";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    category: null,
    tag: null,
    brand: null,
    message: null,
    error: null,
    loader: false,
  },

  reducers: {
    setMessageEmpty: (state, action) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.brand = state.brand ?? [];
        state.brand.push(action.payload.brands),
          (state.message = action.payload.message),
          (state.loader = false);
      })
      .addCase(createBrand.rejected, (state, action) => {
        (state.error = action.error.message), (state.loader = false);
      })
      .addCase(getAllBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getAllBrand.fulfilled, (state, action) => {
        (state.brand = action.payload.brands), (state.loader = false);
      })
      .addCase(getAllBrand.rejected, (state, action) => {
        (state.error = action.error.message), (state.loader = false);
      })
      .addCase(deleteBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(deleteBrand.fulfilled, (state, action) => {
        console.log(action.payload.brands);
        state.brand = state.brand.filter(
          (item) => item._id !== action.payload.brands._id
        );
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(deleteBrand.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

//selectors

//actions
export const { setMessageEmpty } = productSlice.actions;
//export authSlice
export default productSlice.reducer;
