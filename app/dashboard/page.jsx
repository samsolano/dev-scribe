import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
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
        <div className=" grid grid-cols-6 grid-rows-6 grid-flow-col flex flex-1 flex-col gap-4 p-4 pt-0">

          <div className="border border-black row-span-3"></div>
          <div className="border border-black row-span-3"></div>
          <div className="border border-black row-span-6 col-span-5"></div>

        </div>

        <div className="flex flex-row justify-between">

          <div>
            <button>Generate Documentation</button>
          </div>

          <div className="flex px-4 gap-4">
            <button className="border border-solid px-8">Edit</button>
            <button className="border border-solid px-8">Export</button>
          </div>

        </div>

      </div>



      </SidebarInset>
    </SidebarProvider>)
  );
}



// 1. lets figure out how to get all the components words being our stuff
// 2. get rid of all of the extra stuff like breadcrumb
// 3. put up divs and make it formatted like in giannis figma
// 4. if still time, add dark mode