import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../features/cart/cartSlice"
import productReducer from "../features/product/productSlice"
import activityReducer from "../features/activity/activitySlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        activity: activityReducer,
    }
})