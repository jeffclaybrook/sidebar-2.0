"use client"

import { ElementType, useState } from "react"
import { ChevronsUpDown, Plus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar"

export function TeamSwitcher({
 teams
}: {
 teams: {
  name: string
  logo: ElementType
  plan: string
 }[]
}) {
 const { isMobile } = useSidebar()
 const [activeTeam, setActiveTeam] = useState(teams[0])

 return (
  <SidebarMenu>
   <SidebarMenuItem>
    <DropdownMenu>
     <DropdownMenuTrigger asChild>
      <SidebarMenuButton
       size="lg"
       className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
       <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <activeTeam.logo className="size-4" />
       </div>
       <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{activeTeam.name}</span>
        <span className="truncate font-semibold">{activeTeam.plan}</span>
       </div>
       <ChevronsUpDown className="ml-auto" />
      </SidebarMenuButton>
     </DropdownMenuTrigger>
     <DropdownMenuContent
      side={isMobile ? "bottom" : "right"}
      align="start"
      sideOffset={4}
      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
     >
      <DropdownMenuLabel className="text-muted-foreground text-xs">Teams</DropdownMenuLabel>
      {teams.map((team, i) => (
       <DropdownMenuItem
        key={team.name}
        onClick={() => setActiveTeam(team)}
        className="gap-2 p-2"
       >
        <div className="flex size-6 items-center justify-center rounded-sm border">
         <team.logo className="size-4 shrink-0" />
        </div>
        {team.name}
        <DropdownMenuShortcut>⌘{i + 1}</DropdownMenuShortcut>
       </DropdownMenuItem>
      ))}
      <DropdownMenuSeparator />
      <DropdownMenuItem className="gap-2 p-2">
       <div className="flex size-6 items-center justify-center rounded-md border bg-background">
        <Plus className="size-4" />
       </div>
       <div className="font-medium text-muted-foreground">Add team</div>
      </DropdownMenuItem>
     </DropdownMenuContent>
    </DropdownMenu>
   </SidebarMenuItem>
  </SidebarMenu>
 )
}