import { useAppSelector } from "@/store/store"
import { IRole } from "@/types/user.types"

export const useUserRole = ()=>{
  const role = useAppSelector(store=>store.auth.userInfo?.role)
  return role as IRole | undefined 
}
