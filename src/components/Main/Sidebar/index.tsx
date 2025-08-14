import type * as React from "react"
import { BadgeQuestionMark, UsersRound, Users, Flower, Home, Inbox, LayoutDashboard, CircleEllipsis, ChevronRight, Ellipsis, Search, Plus } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarTrigger,
    useSidebar
} from "@/components/ui/sidebar"

const data = {
    navMain: [
        {
            title: "Dashboard",
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
const Moredata = {
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { open } = useSidebar()
    return (
        <Sidebar variant="inset" {...props} className="bg-[rgb(255_258_248/4%)] text-[rgb(255_258_248/95%)] p-0 border-r border-[rgb(53,52,52)]">
            <SidebarHeader className="broder-0 border-b border-[rgb(53,52,52)] p-1">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <div className="w-[100%]">
                                <div className={`flex  ${open ? "ml-0" : "mx-auto"} bg-green-800 aspect-square size-7 items-center justify-center rounded-lg `}>
                                    A
                                </div>
                                <div className="grid w-[56%] text-left text-[1.2rem] leading-tight">
                                    <span className="truncate font-semibold">Animesh Dutta</span>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <SidebarTrigger />
                                </div>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="pb-2 ">
                <SidebarGroup className="border-b border-[rgb(53,52,52)]">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton tooltip={item.title} isActive={item.isActive}>
                                        <item.icon />
                                        <span className="text-sm">{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup className=" flex flex-col  gap-3">
                    {open &&
                        <p className="text-[0.9rem] text-[rgb(255_258_248/50%)] flex items-center">
                            Favorites
                            <span><ChevronRight className="h-3 w-3" /></span>
                        </p>
                    }
                    {open &&
                        <div className="flex justify-between text-[rgb(255_258_248/50%)]">
                            <p className="text-[0.9rem] ">Spaces</p>
                            <div className="flex items-center gap-2">
                                <Ellipsis className="h-4 w-4" />
                                <Search className="h-4 w-4" />
                                <div className="bg-[#514abe] p-1 rounded">
                                    <Plus className="h-4 w-4 text-white font-bold" />
                                </div>
                            </div>
                        </div>
                    }
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {Moredata.navMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton tooltip={item.title} isActive={item.isActive} >
                                        <item.icon />
                                        <span className="text-sm">{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            {open &&
                <SidebarFooter className="pb-14 text-sm border-t border-[rgb(53,52,52)] flex flex-row justify-around items-center">
                    <div className="flex gap-1 items-center">
                        <UsersRound className="h-4 w-4" />
                        <span>Invite</span>
                    </div>
                    <div className="h-full border-l border-[rgb(53,52,52)]" />
                    <div className="flex gap-1 items-center">
                        <BadgeQuestionMark className="h-4 w-4" />
                        <span>Help</span>
                    </div>
                </SidebarFooter>
            }
            {!open &&
                <SidebarFooter className="pb-14 text-sm border-t border-[rgb(53,52,52)] flex flex-col justify-around items-center">
                    <div className="flexitems-center">
                        <UsersRound className="h-4 w-4" />
                    </div>
                    <div className="h-full border-l border-[rgb(53,52,52)]" />
                    <div className="flex items-center">
                        <BadgeQuestionMark className="h-4 w-4" />
                    </div>
                </SidebarFooter>
            }

            <SidebarRail />
        </Sidebar>
    )
}
