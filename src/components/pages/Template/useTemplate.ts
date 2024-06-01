import { templatesActions } from "@/store/slices/templatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const useTemplate = ()=>{
  
  const item = useAppSelector(store=>store.templates.active)
  const items = useAppSelector(store=>store.templates.items)
  const loading = useAppSelector(store=>store.templates.loadingActive)
  const {id} = useParams()
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    const item = items.find(item=>+item?.id === +id)
    dispatch(templatesActions.setTemplate({template:item}))
  },[])

  return {loading, item}
}
