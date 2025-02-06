"use client"

import { AppSidebar } from "@/components/app-sidebar"
import EasyMDEEditor from "./mde";


import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { useState } from "react";

export default function Page() {

  const [output, setOutput] = useState(`## #Whats going on *italic* and **bold**`);



  return (

      (<SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
          <div className="flex flex-1 px-8">
            <input className="w-full py-0.5 border border-2 border-gray-300 rounded-full" />
          </div>
        </header>


      <div className="flex flex-1 flex-col py-6 px-6">

        {/* Main div for establishing grid structure */}
        <div className=" grid grid-cols-12 grid-rows-12 grid-flow-col flex flex-1 flex-col gap-4 px-4 py-2 pt-0">


          {/* Div for defining Prompt */}
          <div className="flex flex-col py-6 px-2 gap-1 border border-black row-span-6 col-span-3">

            <h2 className="text-center text-2xl border border-black">Docs in one click</h2>
            <h4 className="text-sm border border-black">Generate, edit, and Share all with Devscribe</h4>
            <input  className="flex align-text-top flex-1 mt-2 border border-black" 
                    placeholder="Define Prompt"/>
          </div>


          {/* Div for uploading docs repos and template */}
          <div className="flex flex-col justify-between py-8 border border-black row-span-6 col-span-3">

            <div className="border border-black mx-auto">Add Documents or Repository Link</div>
            <button className="py-4 mx-6 rounded-xl border border-black ">Documents</button>
            <button className="py-4 mx-6 rounded-xl border border-black">Repository</button>
            <div className="border border-black mx-auto">Choose your template</div>
            <button className="py-4 mx-6 rounded-xl border border-black">+</button>
          </div>
          
          {/* This is where the generated text is going to show up */}
          <div className="border border-black p-6 row-span-12 col-span-9">
                  <EasyMDEEditor />
          </div>

        </div>








        {/* This is the div below the main div section */}
        <div className="border border-black flex flex-row justify-between py-2">

          <div className="border border-black  px-4">
            <button className="border border-black py-2 px-6">Generate Documentation</button>
          </div>

          <div className="border border-black flex px-4 gap-4">
            <button className="border border-black px-8">Edit</button>
            <button className="border border-black px-8">Export</button>
          </div>

        </div>

      </div>



      </SidebarInset>
    </SidebarProvider>)
  );
}


