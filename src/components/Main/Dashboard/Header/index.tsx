import { SidebarTrigger } from "@/components/ui/sidebar"
import { UsersRound, Slash, Kanban, Ellipsis, HatGlasses, Share2 } from "lucide-react"

type Props = {
    IsSidebarOpen: boolean
}
export default function Header({ IsSidebarOpen }: Props) {
    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between px-2 h-14 w-full border border-[rgb(53,52,52)]">
                <div className="flex gap-4 items-center shrink">
                    {!IsSidebarOpen && <SidebarTrigger className="text-white" />}
                    <div className="flex h-4 items-center gap-1">
                        <div className="bg-[rgba(62,99,221,1)] p-1 rounded">
                            <UsersRound className="h-3 w-3 text-white" />
                        </div>
                        <p className="text-sm ">Team Space</p>
                        <div>
                            <Slash className="h-3 w-3" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <Kanban className="h-4 w-4 text-white" />
                        <p className="text-white text-sm">Project 1</p>
                    </div>
                    <div>
                        <Ellipsis className="h-3 w-3" />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex gap-1 items-center border border-[rgb(255_255_255/15%)] p-1 rounded">
                        <HatGlasses className="h-4 w-4" />
                        <p className="text-sm hidden lg:block">agents</p>
                    </div>
                    <div className="flex gap-1 items-center border border-[rgb(255_255_255/15%)] p-1 rounded">
                        <HatGlasses className="h-4 w-4" />
                        <p className="text-sm hidden lg:block">automate</p>
                    </div>
                    <div className="flex gap-1 items-center border border-[rgb(255_255_255/15%)] p-1 rounded">
                        <HatGlasses className="h-4 w-4" />
                        <p className="text-sm hidden lg:block">Ask Ai</p>
                    </div>
                    <div className="flex gap-1 items-center border border-[rgb(255_255_255/15%)] p-1 rounded">
                        <p className="text-sm hidden lg:block">Share</p>
                        <Share2 className=" block h-4 w-4 lg:hidden" />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
