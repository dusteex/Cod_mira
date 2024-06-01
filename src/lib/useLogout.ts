import { authActions } from "@/store/slices/authSlice"
import { useDispatch } from "react-redux"

export const useLogout = ()=>{
  const dispatch = useDispatch()

  const logout = ()=>{
    dispatch(authActions.setUser({token:null,info:null})) 
    localStorage.removeItem('userToken')
    localStorage.removeItem('userInfo')
  }

  return logout
}
