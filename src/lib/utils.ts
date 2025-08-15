import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Users, Flower, Home, Inbox, LayoutDashboard, CircleEllipsis, Plus } from "lucide-react"
import type { Todo } from "@/types"
import type { ColumnDef } from "@tanstack/react-table"


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
export const dummyTodos: Todo[] = [
  {
    id: 1,
    title: "Finish project proposal",
    dueDate: "2025-08-17",
    priority: "High",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Call the supplier",
    dueDate: "2025-08-16",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: 3,
    title: "Buy groceries",
    dueDate: "2025-08-15",
    priority: "Low",
    status: "Completed",
  },
  {
    id: 4,
    title: "Prepare presentation slides",
    dueDate: "2025-08-20",
    priority: "High",
    status: "Pending",
  },
  {
    id: 5,
    title: "Update company website",
    dueDate: "2025-08-22",
    priority: "Medium",
    status: "In Progress",
  },
]

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "title",
    header: "Name",
  },
  {
    accessorKey: "dueDate",
    header: "Due date",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
