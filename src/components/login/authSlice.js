import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userApi } from '../../api/userApi'

const initialState = {
  isLoggedIn: false,
  currentUser: undefined
}

export const login = createAsyncThunk('auth/login', async (params, thunkAPI) => {
  const formData = new FormData()
  formData.append('phone', params.phone)
  formData.append('password', params.password)
  try {
    const response = await userApi.login(formData)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false
      state.currentUser = undefined
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.error = false
    },

    [login.rejected]: (state, action) => {
      state.error = action.payload
    },

    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true
      state.currentUser = action.payload.data
    },
  }
})

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions

export default authSlice.reducer