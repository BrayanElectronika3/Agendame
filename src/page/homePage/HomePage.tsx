import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Global/customSideBar/app-sidebar"
import Header from "@/components/Global/customHeader/header"
import { CustomCard } from "@/components/Home/customCard/CustomCard"
import { CustomChart } from "@/components/Home/customChart/CutomChart"
import { CustomButton } from "@/components/Home/customButton/customButton"

import tuturnoLogo from '../../assets/TuturnoLogo.png'

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="w-full">
        <Header label="Inicio" href="home"/>
        {/* Content */}
        <div className="flex flex-1 flex-col p-2 gap-6">
          <div className="grid auto-rows-min gap-6 md:grid-cols-2 lg:grid-cols-3 bg-gray-50 p-1 rounded-lg">
            {/* Carta de proximo agendamiento */}
            <div className="aspect-square rounded-xl bg-muted/50">
              <CustomCard/>
            </div>
            {/* Grafica de historico */}
            <div className="aspect-square rounded-xl bg-muted/50 flex flex-col">
              <div className="shadow-md border rounded-lg w-full h-full bg-white flex flex-col items-center justify-center">
                <CustomChart/>
              </div>
            </div>
            {/* Botones de interacción pc */}
            <div className="place-items-center items-center justify-center aspect-square sm:aspect-auto lg:aspect-square rounded-xl bg-muted/50 grid gap-6 grid-cols-4 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 visible max-lg:hidden">
              <CustomButton/>
            </div>
          </div>
          {/* Botones de interacción moviles y tablets */}
          <div className="rounded-xl bg-muted/50 grid gap-6 grid-cols-4 grid-rows-1 visible lg:hidden">
          <CustomButton/>
          </div>
          {/* Banner */}
          <div className="min-h-[25vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <div className="w-full h-full bg-gradient-to-br from-white via-gray-300 to-gray-500 rounded-lg border shadow-lg">
              <div className="w-full h-full flex items-center justify-center">
                <img src={tuturnoLogo} alt="Logo" className="w-4/5"/>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}