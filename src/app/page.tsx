"use client"

import { useTransition } from "react";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { type New, createSchema } from "./validations"
import { createUser } from "./actions"
import { useToast } from "@/components/ui/use-toast"

export default function Home() {
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition();

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

    <main className="bg-slate-500 flex items-center justify-center h-[100vh]">

      <div className="container border rounded-md bg-white shadow-md p-5 w-[300px]">

        <h1 className="text-center">Form</h1>

        <Form {...form}>
          <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
          control={form.control}
          name="name"
          render={({ field }) => (

            <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit">Submit</Button>

          </form>
        </Form>

      </div>

    </main>
  );
}
