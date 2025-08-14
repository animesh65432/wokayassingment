import { useSidebar, SidebarTrigger } from "@/components/ui/sidebar"
import { UsersRound, Slash } from "lucide-react"

export default function Dashboard() {
    const { open } = useSidebar()
    return (
        <div className="flex flex-col">
            <div className="flex items-center px-2 h-12 w-full border border-[rgb(53,52,52)]">
                <div className="flex gap-4 items-center shrink">
                    {!open && <SidebarTrigger className="text-white" />}
                    <div className="flex h-4 items-center gap-1">
                        <div className="bg-[rgba(62,99,221,1)] p-1 rounded">
                            <UsersRound className="h-3 w-3 text-white" />
                        </div>
                        <p className="text-sm">Team Space</p>
                        <div>
                            <Slash className="h-3 w-3" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
