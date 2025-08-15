import { SidebarTrigger } from "@/components/ui/sidebar"
import { CircleCheckBig, ListFilter, Rows4, AudioWaveform, Group, Plus, ChartNoAxesGantt, Calendar, UsersRound, Slash, Kanban, Ellipsis, HatGlasses, Share2, CalendarSync, BotMessageSquare, List, Table, Search, Settings, ListChecks } from "lucide-react"

type Props = {
    IsSidebarOpen: boolean
}
export default function Header({ IsSidebarOpen }: Props) {
    return (
        <div className="flex flex-col w-full ">
            <div className="flex items-center justify-between px-2 h-14 w-full border border-[rgb(53,52,52)]">
                <div className="flex gap-4 items-center shrink">
                    {!IsSidebarOpen && <SidebarTrigger className="text-white" />}
                    <div className="flex h-4 items-center gap-1">
                        <div className="bg-[rgba(62,99,221,1)] p-1 rounded">
                            <UsersRound className="h-3 w-3" />
                        </div>
                        <p className="text-sm ">Team Space</p>
                        <div>
                            <Slash className="h-3 w-3" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <Kanban className="h-4 w-4" />
                        <p className="text-sm">Project 1</p>
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
                        <CalendarSync className="h-4 w-4" />
                        <p className="text-sm hidden lg:block">automate</p>
                    </div>
                    <div className="flex gap-1 items-center border border-[rgb(255_255_255/15%)] p-1 rounded">
                        <BotMessageSquare className="h-4 w-4" />
                        <p className="text-sm hidden lg:block">Ask Ai</p>
                    </div>
                    <div className="flex gap-1 items-center border border-[rgb(255_255_255/15%)] p-1 rounded">
                        <p className="text-sm hidden lg:block">Share</p>
                        <Share2 className=" block h-4 w-4 lg:hidden" />
                    </div>
                </div>
            </div>
            <div className="flex text-[rgb(255_258_248/50%)] justify-between px-2 items-center h-14 border-b  border-[rgb(53,52,52)]">
                <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                        <List className="h-4 w-4" />
                        <p className="text-sm">List</p>
                    </div>
                    <div className="flex lg:hidden items-center">
                        <p className="text-sm">4 More...</p>
                    </div>

                    <div className=" hidden lg:flex items-center gap-1">
                        <Kanban className="h-4 w-4" />
                        <p className="text-sm">Board</p>
                    </div>
                    <div className="hidden lg:flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <p className="text-sm">Calendar</p>
                    </div>
                    <div className=" hidden lg:flex items-center gap-1">
                        <ChartNoAxesGantt className="h-4 w-4" />
                        <p className="text-sm">Gantt</p>
                    </div>
                    <div className="hidden lg:flex items-center gap-1">
                        <Table className="h-4 w-4" />
                        <p className="text-sm">Gantt</p>
                    </div>
                    <div className="border-l border-[rgb(53,52,52)]"></div>
                    <div className="flex items-center gap-1">
                        <Plus className="h-4 w-4" />
                        <p className="text-sm  hidden md:block">View</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Search className="h-4 w-4" />
                        <p className="text-sm  hidden md:block">Search</p>
                    </div>
                    <div className=" md:flex items-center gap-1">
                        <ListChecks className="h-4 w-4" />
                        <p className="text-sm hidden md:block">Hide</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Settings className="h-4 w-4" />
                        <p className="text-sm  hidden md:block text-[rgb(255_258_248/50%)]">Customize</p>
                    </div>
                    <div className="bg-[#4a3fea] text-white text-sm  hidden lg:block rounded-md px-4 p-1">Add task</div>
                </div>
            </div>
            <div className="flex text-[rgb(255_258_248/50%)] p-2 px-3 justify-between">
                <div className="flex items-center gap-2">
                    <div className="border border-[rgb(255_258_248/50%)] p-1 px-2 rounded-lg text-sm flex items-center gap-1">
                        <Group className="h-3 w-3" />
                        <p className="text-[0.7rem]  hidden lg:block">Group : Status</p>
                    </div>
                    <div className="border border-[rgb(255_258_248/50%)] p-1 px-2 rounded-lg text-sm flex items-center gap-1">
                        <AudioWaveform className="h-3 w-3" />
                        <p className="text-[0.7rem] hidden lg:block">Subtasks</p>
                    </div>
                    <div className="border border-[rgb(255_258_248/50%)] p-1 px-2 rounded-lg text-sm flex items-center gap-1">
                        <Rows4 className="h-3 w-3" />
                        <p className="text-[0.7rem] hidden lg:block">Columns</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="border border-[rgb(255_258_248/50%)] p-1 px-2 rounded-lg text-sm flex items-center gap-1">
                        <ListFilter className="h-3 w-3" />
                        <p className="text-[0.7rem] hidden lg:block">Filter</p>
                    </div>
                    <div className="border border-[rgb(255_258_248/50%)] p-1 px-2 rounded-lg text-sm flex items-center gap-1">
                        <CircleCheckBig className="h-3 w-3" />
                        <p className="text-[0.7rem] hidden lg:block">Closed</p>
                    </div>
                    <div className="border border-[rgb(255_258_248/50%)] p-1 px-2 rounded-lg text-sm flex items-center gap-1">
                        <UsersRound className="h-3 w-3" />
                        <p className="text-[0.7rem] hidden lg:block">Assignee</p>
                    </div>
                    <div className={`flex text-white size-6  bg-green-800 p-2 text-sm aspect-square items-center justify-center rounded-lg `}>
                        A
                    </div>
                    <div className="border-l border-[rgb(53,52,52)] h-full"></div>
                    <div className="border border-[rgb(53,52,52)] text-sm px-2 w-[150px] rounded p-1">
                        Search...
                    </div>
                </div>
            </div>
        </div>
    )
}
