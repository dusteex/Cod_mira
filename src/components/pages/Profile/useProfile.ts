import { profilesActions } from "@/store/slices/profilesSlice"
import { templatesActions } from "@/store/slices/templatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const useProfile = ()=>{
  
  const item = useAppSelector(store=>store.profiles.active)
  const items = useAppSelector(store=>store.profiles.items)
  const loading = useAppSelector(store=>store.templates.loadingActive)
  const {id} = useParams()
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    const item = items.find(item=>+item?.credentials.id === +id)
    dispatch(profilesActions.setProfile({profile:item}))
  },[])

  return {loading, item}
}
