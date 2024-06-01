import { Alert } from "@/components/ui/alert"
import { Card } from "@/components/ui/card"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { PROFILE_ROUTE, TEMPLATE_ROUTE } from "@/constants/routes"
import { cn } from "@/lib/utils"
import { FC } from "react"
import { Link } from "react-router-dom"

const getRatingColor = (rating:number) => {
  if(rating >= 85) return "text-green-700" 
  if(rating >= 70) return "text-green-400" 
  if(rating >= 50) return "text-orange-500" 
  return "text-red-500" 
} 

interface Props {
  id: number
  name: string,
  competency_rating?: number,
  template_name: string,
  career_rating: number,
}

export const ProfilesListItem:FC<Props> = ({id,name,template_name,competency_rating})=>{
  return ( 
  <Link to={PROFILE_ROUTE(id).base} >
    <Card className="min-h-12 flex justify-between ">
      <div className="text-lg leading-1">
        <span className="mr-2">
          {name}
        </span>
        <span className="text-sm leading-1 p-0 m-0 text-gray-400">
          {template_name}
        </span>
      </div>
      <div >
        {
          competency_rating ? <div className={cn(getRatingColor(competency_rating), "font-bold")}>
          {competency_rating}
            
        </div> : <div className="flex items-center gap-2 text-gray-500">
          <span>Анализируем </span>
          <LoadingSpinner className="w-4 h-4"/>
        </div>
        }
        
      </div>
    </Card>
  </Link> 
  )
}
