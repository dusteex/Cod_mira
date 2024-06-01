import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { useCreateTemplateForm } from "./useCreateTemplateForm"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

const DEFAULT_NAME = 'Безымянный шаблон'

const DESCRIPTION = "Поддерживается следующий формат: компетенция(синоним1,синоним2,синоним3...){параметр1=значение1,параметр2=значение2}. например: js(javascript,Ecmascript,ES6)){priority=0.5,}"

export const CreateTemplate = ()=> {

  const {form,loading,onSubmit} = useCreateTemplateForm()

  return (
  <Container>
      <Card>
          <Form {...form} >
            <h2 className="text-lg font-bold mb-3">{form.watch().name || DEFAULT_NAME}</h2>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Название шаблона обязательно" }}
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Название шаблона</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите название" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="filters.workYears"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Минимальный рабочий стаж (лет)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Минимальный рабочий стаж (лет)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="skills"
              rules={{ required: "Компетенции обязательны" }}
              render={({ field }) => (
                <FormItem >
                  <FormLabel>Компетенции</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Введите компетенции через запятую, следуя формату" {...field} />
                  </FormControl>
                  <FormDescription>{DESCRIPTION}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
            <Button type="submit" disabled={!form.formState.isValid || loading}>
            {loading ? <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Создаём...
            </> : "Создать" }
          </Button>
            </div>
            </form>
          </Form>
      </Card>
  </Container>
  )
}
