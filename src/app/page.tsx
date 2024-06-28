
import { type New, createSchema } from "./validations"
import UsersList from "@/components/users-list";
import CreateForm from "@/components/form";



export default async function Home() {


  return (

    <main className="bg-slate-500 flex items-center justify-center h-[100vh]">

      <div className="container border rounded-md bg-white shadow-md p-5 w-[700px]">

        <h1 className="text-center">Form</h1>

        <div className="">
         <CreateForm/>
        </div>

        {/* TABLE */}
        <div className="">
          <UsersList/>
        </div>

      </div>

    </main>
  );
}
