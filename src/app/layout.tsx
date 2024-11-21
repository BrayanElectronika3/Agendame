import { AppSidebar } from "@/components/customSideBar/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset } from "@/components/ui/sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import BigCalendar from "../components/customCalendar/big-calendar"
import { useState } from "react"

interface EventCalendar {
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
    description: string;
    direction: string;
    selectItem: boolean;
}

const initialEvents = [
  {
    title: 'Cita 1',
    start: new Date(new Date().setDate(new Date().getDate() - 2)),
    end: new Date(new Date(new Date().setDate(new Date().getDate() - 2)).setHours(new Date().getHours() + 2)),
    allDay: false,
    description: 'Programada en el consultorio 1',
    direction: 'Bogota',
    selectItem: false,
  },
  {
    title: 'Cita 2',
    start: new Date(),
    end: new Date(new Date().setHours(new Date().getHours() + 2)),
    allDay: false,
    description: 'Programada en el consultorio 2',
    direction: 'Cucuta',
    selectItem: false,
  },
  {
    title: 'Cita 3',
    start: new Date(new Date().setDate(new Date().getDate() + 2)),
    end: new Date(new Date(new Date().setDate(new Date().getDate() + 2)).setHours(new Date().getHours() + 2)),
    allDay: false,
    description: 'Programada en el consultorio 3',
    direction: 'Tolima',
    selectItem: false,
  },
  {
    title: 'Cita 4',
    start: new Date(new Date(new Date().setDate(new Date().getDate() + 2)).setHours(new Date().getHours() + 3)),
    end: new Date(new Date(new Date().setDate(new Date().getDate() + 2)).setHours(new Date().getHours() + 6)),
    allDay: false,
    description: 'Programada en el consultorio 4',
    direction: 'Barranquilla',
    selectItem: false,
  },
]
 
export default function Layout() {
  const [events, setEvents] = useState(initialEvents)

  const handleEventSelect = (event: EventCalendar) => {
    const changeEvents = (events: EventCalendar[]) => {
      return events.map(item => ({
        ...item,
        selectItem: item.title === event.title,
      }))
    }

    setEvents(changeEvents)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Inicio
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col p-2">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-gray-50 md:min-h-min">
            <div className="flex flex-col items-left justify-center">
              <div>
                  <Button className="max-w-[200px] m-1">+ Añadir cita</Button>
                  {/* <Button className="max-w-[200px] m-1">☑️ Editar cita</Button> */}
                  {/* <Button className="max-w-[200px] m-1">🗑️ Eliminar cita</Button> */}
              </div>
              <div className="flex items-center max-h-[200px] p-1">
                { events.map((item, index) => (
                  <Card 
                    key={index} 
                    className={`max-w-[250px] mr-2 ${item.selectItem ? 'bg-blue-100' : 'bg-white-500'}`}
                  >
                    <CardHeader className="space-y-1 p-2">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-xs">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs p-2 pt-0">
                      <p><strong>Sede: </strong>{item.direction}</p>
                      <p><strong>Fecha y hora: </strong>{item.start.toLocaleString().toString()}</p>
                    </CardContent>
                  </Card>
                )) }
              </div>
              <div className="p-1 bg-gray-100 rounded-md shadow-md m-1">
                <BigCalendar events={events} onEventSelect={handleEventSelect}/>
              </div>
            </div>
          </div>          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}