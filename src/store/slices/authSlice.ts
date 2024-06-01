// features/auth/authSlice.js
import {AuthService} from '@/api/AuthService'
import { IAuthForm, IRole, IUser } from '@/types/user.types'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const signIn = createAsyncThunk<any,IAuthForm>("auth/signIn", async (formData) => {
  const {data} = await AuthService.signIn(formData)
  return data
}) 

interface IAuthSlice {
  loading:boolean;
  userInfo: IUser | null;
  userToken: string | null;
  error: string | null;
  success: boolean;
}

const initialState:IAuthSlice  = {
  loading: false,
  userInfo: {} as IUser, 
  userToken: null, 
  error: null,
  success: false, 
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state,action:PayloadAction<{token:string | null,info:IUser | null}>){
      state.userInfo = action.payload.info
      state.userToken = action.payload.token
    }
  },
  extraReducers: 
  builder=>builder
    .addCase(signIn.pending, (state) => {
      state.loading = true;
    }) 
    .addCase(signIn.fulfilled, (state,action) => {
      const {userToken,role} = action.payload
      state.loading = false;
      const userInfo = {
        role: role as IRole
      }
      //TODO REPLACE
      state.userInfo = userInfo

      localStorage.setItem('userToken', userToken)
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }) 
})

export const authActions = authSlice.actions
export const authReducer =  authSlice.reducer
