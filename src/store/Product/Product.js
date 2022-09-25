import { createSlice } from "@reduxjs/toolkit";
import Data from "../../Model/dunmydata";

const ProductSlice = createSlice({
  name: 'Product',
  initialState: { Products: Data, Filters: Data },
  reducers: {
    HandlerFilter: (state, action) => {
      console.log(action.payload);
      state.Products = state.Filters.filter(item => item.category === action.payload)
      if (action.payload === "All") {
        state.Products = Data;
      }
    },
  },
})


export const {HandlerFilter} = ProductSlice.actions;
export default ProductSlice.reducer;