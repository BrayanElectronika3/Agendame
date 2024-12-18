import { Calendar, Home, Inbox, Settings, Calendar1Icon } from "lucide-react"

import { AppUser } from "@/components/Global/customSideBar/app-user"
import { AppSwitcher } from "@/components/Global/customSideBar/app-switcher"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

// Header and Fotter
const data = {
  user: { name: "Usuario 123", email: "usuario123@example.com", avatar: "user.svg", },
  teams: [
    { name: "AGENDAME", logo: Calendar1Icon, plan: "Pro", },
  ],
}

// Menu items.
const items = [
  { title: "Inicio", url: "home", icon: Home, },
  { title: "Notificaciones", url: "notification", icon: Inbox, },
  { title: "Calendario", url: "calendar", icon: Calendar, },
  { title: "Configuracion", url: "config", icon: Settings, },
]
 
export function AppSidebar() {
  return (
    <Sidebar collapsible={"icon"}>
      {/* Header */}
      <SidebarHeader>
        <AppSwitcher apps={data.teams}/>
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Aplicación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter>
        <AppUser user={data.user}/>
      </SidebarFooter>
    </Sidebar>
  )
}