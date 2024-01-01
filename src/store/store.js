import { configureStore } from "@reduxjs/toolkit";
import  categoryReducer  from "../Slices/categorySlice";
import  productReducer from "../Slices/productSlice";
import cartReducer from "../Slices/cartSlice";
import userReducer from "../Slices/userSlice";

export default configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
