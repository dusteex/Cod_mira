import { useAppSelector } from "@/store/store"
import { IUploadResumeForm } from "@/types/resumes.types"
import { useForm } from "react-hook-form"

export const useUploadResume = ()=>{
  const form = useForm<IUploadResumeForm>()
  const templates = useAppSelector(store=>store.templates.items)
  return {form,templates}
}
