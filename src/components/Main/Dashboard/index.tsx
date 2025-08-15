import { useSidebar, } from "@/components/ui/sidebar"
import Header from "./Header"
export default function Dashboard() {
    const { open: IsSidebarOpen } = useSidebar()
    return (
        <div className="flex flex-col overflow-y-auto">
            <Header IsSidebarOpen={IsSidebarOpen} />
        </div>
    )
}
