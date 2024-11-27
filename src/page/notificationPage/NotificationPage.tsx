import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

import { AppSidebar } from "@/components/Global/customSideBar/app-sidebar"
import Header from "@/components/Global/customHeader/header"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="w-full">
        <Header label="Notificaciones" href="notification"/>
        <div className="flex flex-1 flex-col p-2 h-screen">
          <div className="flex-1 rounded-xl bg-gray-50 items-center justify-center gap-4 p-2 pl-1">
            {/* Tabla de notificaciones */}
            <Table>
              <TableCaption>No tienes más notificaciones en este momento</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/5">Estado</TableHead>
                  <TableHead className="w-3/5">Mensaje</TableHead>
                  <TableHead className="w-1/5">Fecha de notificacion</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              <TableRow>
                  <TableCell className="font-medium">No leido</TableCell>
                  <TableCell>Tienes una cita agendada para el dia 30/11/2024 a las 10:00 AM en el consultorio 100 de la sede 1</TableCell>
                  <TableCell>{new Date().toLocaleString().toString()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">No leido</TableCell>
                  <TableCell>Tienes una cita agendada para el dia 30/11/2024 a las 10:00 AM en el consultorio 100 de la sede 1</TableCell>
                  <TableCell>{new Date().toLocaleString().toString()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Leido</TableCell>
                  <TableCell>Tienes una cita agendada para el dia 30/11/2024 a las 10:00 AM en el consultorio 100 de la sede 1</TableCell>
                  <TableCell>{new Date().toLocaleString().toString()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>

          </div>          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}