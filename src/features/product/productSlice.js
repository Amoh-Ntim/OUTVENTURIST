import { createSlice } from "@reduxjs/toolkit"

import { products } from "../../utils/products-data"

const initialState = {
    products: products
}


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        //
    }
})

export default productSlice.reducer