import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { useTemplateForm } from "./useTemplateForm"
import { useTemplate } from "./useTemplate"
import { useEffect } from "react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { stringifySkills } from "@/lib/skills"
import { useProfile } from "./useProfile"
import { Link } from "react-router-dom"
import { TEMPLATE_ROUTE } from "@/constants/routes"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CircleHelp } from "lucide-react"

export const Profile = ()=> {

  const {loading:loadingItem,item} = useProfile()

  return (
  <Container>
      <Card>
        {
          loadingItem && 
          <div className="w-full flex  items-center justify-center">
            <LoadingSpinner className="text-gray-100 w-20 h-20"/>
          </div>
        }
        <p className="items-start mb-4">
          <h2 className="font-bold text-xl mr-2">
            {item?.credentials.name}
          </h2>
          <Link to={TEMPLATE_ROUTE(item?.template_p.id).base} className="text-sm underline leading-1 p-0 m-0 text-gray-400">
          {item?.template_p.name}
        </Link>
        </p>
        <div className="rounded-sm bg-gray-50 p-2 mb-2">
          <h4 className="mb-2 text-xl font-bold">Контактные данные</h4>
          <p className="mb-2">
          <span className="mr-2 font-bold">
            Номер телефона: 
          </span>
          <span>
          {item?.credentials.phone}
        </span>
          </p>
          <p className="mb-2">
          <span className="mr-2 font-bold">
            Дата рождения: 
          </span>
          <span>
          {item?.credentials.date_of_birth}
        </span>
          </p>
          <p className="mb-2">
          <span className="mr-2 font-bold">
            Почта: 
          </span>
          <span>
          {item?.credentials.email}
        </span>
          </p>
        </div>
        <div className="rounded-sm bg-gray-50 p-2 mb-2">
          <div className="flex justify-between">
            <h4 className="mb-2 text-xl font-bold">Компетенции</h4>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <CircleHelp className="text-gray-400"/>
                </TooltipTrigger>
                <TooltipContent>
                  Зеленым отмечены навыки, что присутствуют у кандидата, красным - те, что указаны в шаблоне и отсутствуют
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex gap-1 flex-wrap">
            {
              item?.compProfile?.skills.green.map(skill=>
                <div className="bg-green-500 text-white p-1 w-fit rounded-lg min-w-10 flex justify-center">
                  {skill}
                </div>
              )
            }
            {
              item?.compProfile?.skills.red.map(skill=>
                <div className="bg-red-500 text-white p-1 w-fit rounded-lg min-w-10 flex justify-center">
                  {skill}
                </div>
              )
            }
          </div>
        </div>
      </Card>
  </Container>
  )
}
