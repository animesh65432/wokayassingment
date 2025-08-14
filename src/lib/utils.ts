import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Users, Flower, Home, Inbox, LayoutDashboard, CircleEllipsis, Plus } from "lucide-react"

export const Sidebardata = {
  navMain: [
    {
      title: "Home",
      url: "",
      icon: Home,
      isActive: false,
    },
    {
      title: "Inbox",
      url: "",
      icon: Inbox,
    },
    {
      title: "Dashboard",
      url: "",
      icon: LayoutDashboard,
    },
    {
      title: "More",
      url: "",
      icon: CircleEllipsis,
    },
  ],
}
export const SidebarMoredata = {
  navMain: [
    {
      title: "Everthing",
      url: "",
      icon: Flower,
      isActive: false,
    },
    {
      title: "Team Space",
      url: "",
      icon: Users,
      isActive: false,
    },
    {
      title: "Create Space",
      url: "",
      icon: Plus,
      isActive: false,
    }
  ],
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
