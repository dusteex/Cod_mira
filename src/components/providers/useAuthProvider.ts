import { authActions } from "@/store/slices/authSlice"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { IUser } from "@/types/user.types"
import { useEffect } from "react"

export const useAuthProvider = () => {
  const userToken = useAppSelector(store=>store.auth.userToken)

  const dispatch = useAppDispatch()

  useEffect(()=>{
    const token = localStorage.getItem('userToken')
    const info = JSON.parse(localStorage.getItem('userInfo') || "null") ?? null as IUser | null
    if(token && info) {
      dispatch(authActions.setUser({token,info}))
    }
  },[])

  return {userToken}
}
