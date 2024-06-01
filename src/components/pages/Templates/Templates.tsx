import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { CREATE_TEMPLATE_ROUTE } from "@/constants/routes"
import { Link } from "react-router-dom"
import { useTemplates } from "./useTemplates"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { TemplatesListItem } from "@/components/features/TemplatesListItem/TemplatesListItem"

const CREATE_TEMPLATE_BTN_TEXT = "Создать шаблон"

export const Templates = ()=>{

  const {items,loading} = useTemplates() 

  return <Container>
    <Card>
      <div className="flex w-full justify-between mb-4">
        <div className="text-lg font-bold">
          Ваши шаблоны
        </div>
        <Link to={CREATE_TEMPLATE_ROUTE} className={buttonVariants({ variant: "default" })}>              {CREATE_TEMPLATE_BTN_TEXT}
        </Link>
      </div>
      <div className="w-full min-h-20">
        {
          loading && 
          <div className="w-full flex  items-center justify-center">
            <LoadingSpinner className="text-gray-100 w-20 h-20"/>
          </div>
        }
        {
          items?.length > 0 ? 
          <div className="flex flex-col gap-4">
            {items?.map?.(item=>(
              <TemplatesListItem id={item.id} name={item.name} key={item.id} />
            )) }
          </div> : !loading && <div className="h-full text-gray-300 text-4xl w-full flex items-center justify-center">Пока шаблонов нет</div>
        }
      </div>
    </Card>
  </Container> 

}
