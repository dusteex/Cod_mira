import { getProfiles } from "@/store/slices/profilesSlice"
import { getTemplates } from "@/store/slices/templatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { useEffect } from "react"

export const useProfiles = ()=>{
  
  const items = useAppSelector(store=>store.profiles.items)
  const loading = useAppSelector(store=>store.profiles.loadingAll)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    if(!items || items.length === 0)
      dispatch(getProfiles())
  },[])

  return {items,loading}
}
