import { TEMPLATES_ROUTE } from "@/constants/routes"
import { parseSkills } from "@/lib/skills"
import { createTemplate, editTemplate } from "@/store/slices/templatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { ICreateTemplateForm } from "@/types/templates.types"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

export const useTemplateForm = () => {
  const form = useForm<ICreateTemplateForm>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {id} = useParams() 
  const loadingEdit = useAppSelector(store=>store.templates.loadingEdit)
 
  async function onSubmit(data: ICreateTemplateForm) {

    const parsedSkills = parseSkills(data.skills)

    await dispatch(editTemplate({
        id: +id,
        name: data.name,
        filters: {workYears:+data.filters.workYears},
        skills: parsedSkills
    })) 
    navigate(TEMPLATES_ROUTE)
  }

  return {form,onSubmit,loading:loadingEdit}
}
