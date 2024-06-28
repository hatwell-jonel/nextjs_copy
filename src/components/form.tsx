"use client"

import { useTransition } from "react";
import { useToast } from "@/components/ui/use-toast"
import { createUser, getUsers } from "@/app/actions"
import { type New, createSchema } from "@/app/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const CreateForm = () => {
  const [isPending, startTransition] = useTransition();

  const { toast } = useToast()  

  
  const form = useForm<New>({
    resolver: zodResolver(createSchema),
    defaultValues: {
      name: "",
    },
  })
  
  
  function onSubmit(values: New) {
    try{

      (startTransition(async () => {
        const result = await createUser(values);

        toast({
          title: "Success",
          description: "User created successfully",
        });
        
      }))
    }catch(e){
      console.log(e);
    }
  }


  return (
    <Form {...form}>
    <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

      <div className="flex justify-center my-3">
        <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
            <FormItem className="w-[200px] mr-5"> 
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} value={field.value ?? ''} className="mr-4"  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mt-8" type="submit">Submit</Button>
      </div>
    </form>
  </Form>
  )
}

export default CreateForm;