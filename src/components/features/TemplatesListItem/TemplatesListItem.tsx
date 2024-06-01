import { Card } from "@/components/ui/card"
import { TEMPLATE_ROUTE } from "@/constants/routes"
import { FC } from "react"
import { Link } from "react-router-dom"

interface Props {
  id: number
  name: string
}

export const TemplatesListItem:FC<Props> = ({id,name})=>{
  return ( 
  <Link to={TEMPLATE_ROUTE(id).base} >
    <Card className="min-h-12">
      <div>
        <h3>{name}</h3>
      </div>
    </Card>
  </Link> 
  )
}
