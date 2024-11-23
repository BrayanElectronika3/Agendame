import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

import { AppSidebar } from "@/components/Global/customSideBar/app-sidebar"
import Header from "@/components/Global/customHeader/header"

import ButtonAppointment from "@/components/Appointments/customButton/ButtonAppointment"
import CarrouselAppointment from "@/components/Appointments/customCarousel/CarouselAppointment"
import CalendarAppointment from "@/components/Appointments/customCalendar/calendarAppointment"

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="w-full">
        <Header label="Inicio" href="#"/>
        <div className="flex flex-1 flex-col p-2 h-screen">
          <div className="flex-1 rounded-xl bg-gray-200 items-center justify-center gap-4 p-2 pl-1">
            {/* Encabezado botones de interaccion */}
            <ButtonAppointment/>
            {/* Contenido de las cartas con interaccion de carousel */}
            <CarrouselAppointment/>
            {/* Calendario personalizado */}
            <CalendarAppointment/>
          </div>          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}