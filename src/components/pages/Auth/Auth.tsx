import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useAuthForm } from "./useAuthForm"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useUserRole } from "@/components/providers/useUserRole"

export default function Auth() {
  
  const {form, onSubmit, loading} = useAuthForm()

  const role = useUserRole()
  
  return (
    <Card className="max-w-96 w-full mt-20 mx-auto" >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Выберите роль</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="hr" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Рекрутер
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="hm" />
                      </FormControl>
                      <FormLabel className="font-normal">
                      Нанимающий менеджер
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="rm" />
                      </FormControl>
                      <FormLabel className="font-normal">Ресурсный менеджер</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={!form.getValues().role || loading}>
            {loading ? <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Входим...
            </> : "Войти" }
          </Button>
        </form>
      </Form>
    </Card>

  )
}
