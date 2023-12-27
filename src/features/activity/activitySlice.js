import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    click: false,
}

export const activitySlice = createSlice({
    name: "activity",
    initialState,
    reducers: {
        onActivityClick: (state) => {
            state.click = !state.click
        }

    }
})

export const { onActivityClick } = activitySlice.actions
export default activitySlice.reducer