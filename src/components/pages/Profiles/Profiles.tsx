import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { ProfilesListItem } from "@/components/features/ProfilesListItem/ProfilesListItem"
import { useProfiles } from "./useProfiles"

export const Profiles = ()=>{

  const {items,loading} = useProfiles() 

  return <Container>
    <Card>
      <div className="flex w-full justify-between mb-4">
        <div className="text-lg font-bold">
          Загруженные резюме
        </div>
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
              <ProfilesListItem template_name={item.template_p.name} competency_rating={item.compProfile?.overall} id={item.credentials.id} name={item.credentials.name}  key={item.credentials.id} />
            )) }
          </div> : !loading && <div className="h-full text-gray-300 text-4xl w-full flex items-center justify-center">Пока нет загруженных резюме</div>
        }
      </div>
    </Card>
  </Container> 

}
