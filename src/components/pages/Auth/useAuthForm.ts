import { useForm } from "react-hook-form"
import { IAuthForm } from "@/types/user.types"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { signIn } from "@/store/slices/authSlice"
import { useNavigate } from "react-router-dom"

export const useAuthForm = () => {
  const form = useForm<IAuthForm>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const loading = useAppSelector(store=>store.auth.loading)
 
  async function onSubmit(data: IAuthForm) {
    await dispatch(signIn(data)) 
    navigate("/")
  }

  return {form,onSubmit,loading}
}
