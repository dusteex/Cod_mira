import { useUserRole } from "@/components/providers/useUserRole"
import { headerLinks } from "@/constants/headerLinks"

export const useHeaderLinks = ()=>{
  const role = useUserRole()
  if(!role) return null
  return headerLinks[role]
}
