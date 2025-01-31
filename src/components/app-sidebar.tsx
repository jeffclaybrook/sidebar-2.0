"use client"

import { ComponentProps } from "react"
import { AudioWaveform, BookOpen, Bot, Command, Frame, GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "./ui/sidebar"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"

const data = {
 user: {
  name: "Jeff Claybrook",
  email: "jeff@silverbow.io",
  avatar: "/avatar.webp"
 },
 teams: [
  {
   name: "Acme Inc",
   logo: GalleryVerticalEnd,
   plan: "Enterprise"
  },
  {
   name: "Acme Corp",
   logo: AudioWaveform,
   plan: "Startup"
  },
  {
   name: "Evil Corp",
   logo: Command,
   plan: "Free"
  }
 ],
 navMain: [
  {
   title: "Orc Warrior Ground",
   href: "/",
   icon: SquareTerminal,
   isActive: true,
   items: [
    {
     title: "History",
     href: "/"
    },
    {
     title: "Starred",
     href: "/"
    },
    {
     title: "Settings",
     href: "/"
    }
   ]
  },
  {
   title: "Models",
   href: "/",
   icon: Bot,
   items: [
    {
     title: "Genesis",
     href: "/"
    },
    {
     title: "Explorer",
     href: "/"
    },
    {
     title: "Quantum",
     href: "/"
    }
   ]
  },
  {
   title: "Documentation",
   href: "/",
   icon: BookOpen,
   items: [
    {
     title: "Introduction",
     href: "/"
    },
    {
     title: "Get Started",
     href: "/"
    },
    {
     title: "Tutorials",
     href: "/"
    },
    {
     title: "Changelog",
     href: "/"
    }
   ]
  },
  {
   title: "Settings",
   href: "/",
   icon: Settings2,
   items: [
    {
     title: "General",
     href: "/"
    },
    {
     title: "Team",
     href: "/"
    },
    {
     title: "Billing",
     href: "/"
    },
    {
     title: "Limits",
     href: "/"
    }
   ]
  }
 ],
 projects: [
  {
   name: "Design Engineering",
   href: "/",
   icon: Frame
  },
  {
   name: "Sales & Marketing",
   href: "/",
   icon: PieChart
  },
  {
   name: "Travel",
   href: "/",
   icon: Map
  }
 ]
}

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
 return (
  <Sidebar collapsible="icon" {...props}>
   <SidebarHeader>
    <TeamSwitcher teams={data.teams} />
   </SidebarHeader>
   <SidebarContent>
    <NavMain items={data.navMain} />
    <NavProjects projects={data.projects} />
   </SidebarContent>
   <SidebarFooter>
    <NavUser user={data.user} />
   </SidebarFooter>
   <SidebarRail />
  </Sidebar>
 )
}