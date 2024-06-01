import { getTemplates } from "@/store/slices/templatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { useEffect } from "react"

export const useTemplates = ()=>{
  
  const items = useAppSelector(store=>store.templates.items)
  const loading = useAppSelector(store=>store.templates.loadingAll)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    if(!items || items.length === 0)
      dispatch(getTemplates())
  },[])

  return {items,loading}
}
