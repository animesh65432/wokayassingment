import { AppSidebar } from "./Sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Dashboard from "./Dashboard"

export default function Home() {

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Dashboard />
            </SidebarInset>
        </SidebarProvider>

    )
}
