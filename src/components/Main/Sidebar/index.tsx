import type * as React from "react"
import { Home, Users, Settings, FileText, BarChart3, Mail } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
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
            isActive: true,
        },
        {
            title: "Users",
            url: "",
            icon: Users,
        },
        {
            title: "Analytics",
            url: "",
            icon: BarChart3,
        },
        {
            title: "Documents",
            url: "",
            icon: FileText,
        },
        {
            title: "Messages",
            url: "",
            icon: Mail,
        },
        {
            title: "Settings",
            url: "",
            icon: Settings,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { open } = useSidebar()
    return (
        <Sidebar variant="inset" {...props} className="bg-[rgb(255_258_248/4%)] p-0">
            <SidebarHeader>
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
                                <div>
                                    <SidebarTrigger />
                                </div>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton tooltip={item.title} isActive={item.isActive}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <span className="text-xs text-muted-foreground">© 2024 Your App</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
