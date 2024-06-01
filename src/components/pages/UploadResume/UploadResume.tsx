import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import ImageUpload from "@/components/ui/image-upload"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useUploadResume } from "./useUploadResume"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { ReloadIcon } from "@radix-ui/react-icons"
import { CREATE_TEMPLATE_ROUTE } from "@/constants/routes"
import { Link } from "react-router-dom"

export const UploadResume = ()=> {

  const {templates, form, onSubmit, loading} = useUploadResume()

  return (
    <Container>
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <h2 className="text-lg font-bold mb-4"> Загрузка резюме</h2>
            <div>
              <div className="mb-4">
                <ImageUpload/>
              </div>
              {
                templates?.length > 0 ? 
              <FormField
                name="templateId"
                control={form.control}
                rules={{ required: "Выберите шаблон!" }}
                render={({ field }) => (
                  <FormItem className="mb-4 ">
                    <FormLabel>Шаблон</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите шаблон для анализа резюме" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                      {
                        templates.map(template=>(
                          <SelectItem key={template.id} value={""+template.id}>{template.name}</SelectItem>
                          )
                        )
                      }
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
                >
              </FormField> 
                : <div>
                  <span className="mr-2">
                У вас нет шаблонов
                </span>
                <Link className="text-gray-500 text-md underline" to={CREATE_TEMPLATE_ROUTE}>Создать!</Link>
                </div>

              }

              <div className="flex justify-end">
              <Button type="submit" disabled={!form.formState.isValid || templates?.length === 0 || loading}>
                {loading ? <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Загружаем...
                </> : "Загрузить" }
            </Button>
            </div>

            </div>
          </form>
        </Form>
      </Card>
    </Container>
    ) 
}
