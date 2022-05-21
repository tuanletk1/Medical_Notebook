import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    step1: undefined,
    step2: undefined
}

export const injectSlice = createSlice({
    name: 'inject',
    initialState,
    reducers: {
        addStep1(state, action) {
            state.step1 = action.payload
        },
        addStep2(state, action) {
            state.step2 = action.payload
        },
        clearInjectState(state){
            state = initialState
        }
    }
})

// Action creators are generated for each case reducer function
export const { addStep1, addStep2, clearInjectState } = injectSlice.actions

export default injectSlice.reducer