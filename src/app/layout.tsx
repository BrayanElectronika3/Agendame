import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

import { AppSidebar } from "@/components/customSideBar/app-sidebar"
import BigCalendar from "../components/customCalendar/big-calendar"
import Header from "@/components/customPage/header"
// import CardAppointment from "@/components/customCardAppointment/CardAppointment"

import CarrouselAppointment from "@/components/customCarousel/CarouselAppointment"

import { useAppointmentStore, Appointment } from '../store/appointmentStore'
import { useShallow } from 'zustand/react/shallow'

export default function Layout() {
  // const { appointments } = useAppointmentStore(useShallow((state) => ({
  //   appointments: state.appointments
  // })))

  const appointments = useAppointmentStore(state => state.appointments)
  const selectItems = useAppointmentStore(state => state.selectItems)

  const handleEventSelect = (appointment: Appointment) => {
    selectItems(appointment.title)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="w-full">
        <Header label="Inicio" href="#"/>
        <div className="flex flex-1 flex-col p-2 h-screen">
          <div className="flex-1 rounded-xl bg-gray-500 items-center justify-center gap-4">

              {/* <div> */}
                  {/* <Button className="max-w-[200px] m-1">+ Añadir cita</Button> */}
                  {/* <Button className="max-w-[200px] m-1">☑️ Editar cita</Button> */}
                  {/* <Button className="max-w-[200px] m-1">🗑️ Eliminar cita</Button> */}
              {/* </div> */}
              
              <CarrouselAppointment appointments={appointments} />

              {/* <div className="p-1 bg-gray-100 rounded-md shadow-md m-1">
                <BigCalendar events={appointments} onEventSelect={handleEventSelect}/>
              </div> */}

          </div>          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}