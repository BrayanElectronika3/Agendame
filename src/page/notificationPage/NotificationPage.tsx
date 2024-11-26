import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

import { AppSidebar } from "@/components/Global/customSideBar/app-sidebar"
import Header from "@/components/Global/customHeader/header"

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="w-full">
        <Header label="Notificaciones" href="notification"/>
        <div className="flex flex-1 flex-col p-2 h-screen">
          <div className="flex-1 rounded-xl bg-gray-200 items-center justify-center gap-4 p-2 pl-1">
            <h1>Notification Page</h1>
          </div>          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}