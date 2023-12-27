import { createSlice } from "@reduxjs/toolkit"

const items = localStorage.getItem("cartItems") !== null ? 
    JSON.parse(localStorage.getItem("cartItems")) : []

const totalAmount = localStorage.getItem("Total") !== null ? 
    JSON.parse(localStorage.getItem("Total")) : 0

const totalQuantity = localStorage.getItem("quantity") !== null ? 
    JSON.parse(localStorage.getItem("quantity")) : 0

const setItemFunc = (item, totalAmount, totalQuantity) => {
    localStorage.setItem("cartItems", JSON.stringify(item))
    localStorage.setItem("Total", JSON.stringify(totalAmount))
    localStorage.setItem("quantity", JSON.stringify(totalQuantity))

}

const initialState = {
    cartItems: items,
    quantity: totalQuantity,
    total: totalAmount,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const existingItem = state.cartItems.find(item => item.id === payload.productDetail.id)
            let totalQuantity = 0

            if (existingItem) {
                existingItem.quantity += payload.itemQuantity
            } else {
                const tempProduct = { ...payload.productDetail, quantity: 1}
                state.cartItems.push(tempProduct)
            }

            // getting total quantity
            state.cartItems.forEach(cartItem => {
                totalQuantity += cartItem.quantity
            })
            state.quantity = totalQuantity

            setItemFunc(state.cartItems.map(item => item), state.total, state.quantity)
        },
        
        removeFromCart: (state, action) => {
            const cartItemIndex = action.payload.id
            let tempItem = state.cartItems.find(item => item.id === cartItemIndex)

            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== cartItemIndex)

            if (state.cartItems.length >= 0) {
                state.quantity -= tempItem.quantity
            }

            setItemFunc(state.cartItems.map(item => item), state.total, state.quantity)
        },

        updateTotal: (state) => {
            let total = 0

            state.cartItems.forEach(item => {
                total += item.quantity * +item.price
            })
            state.total = total

            setItemFunc(state.cartItems.map(item => item), state.total, state.quantity)
        }

    }
})


export const { addToCart, removeFromCart, updateTotal } = cartSlice.actions
export default cartSlice.reducer