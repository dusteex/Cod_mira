import { useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { useNavigate } from "react-router-dom"
import { ICreateTemplateForm, ISkill } from "@/types/templates.types"
import { createTemplate } from "@/store/slices/templatesSlice"
import { TEMPLATES_ROUTE } from "@/constants/routes"
import { parseSkills } from "@/lib/skills"

export const useCreateTemplateForm = () => {
  const form = useForm<ICreateTemplateForm>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const loadingCreate = useAppSelector(store=>store.templates.loadingCreate)
 
  async function onSubmit(data: ICreateTemplateForm) {

    const parsedSkills = parseSkills(data.skills)

    await dispatch(createTemplate({
        name: data.name,
        filters: {workYears:+data.filters.workYears},
        skills: parsedSkills as ISkill[]
    })) 
    navigate(TEMPLATES_ROUTE)
  }

  return {form,onSubmit,loading:loadingCreate}
}
