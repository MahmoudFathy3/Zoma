import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Product/Product";
import Carts from "./Cart/Cart";


const Store = configureStore({
  reducer: {
    Product: ProductSlice,
    Carts,
  }
})

export default Store;