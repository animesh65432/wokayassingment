import { useSidebar, } from "@/components/ui/sidebar"
import Header from "./Header"
import Table from "./Table"
import { ArrowBigRight, CircleDashed, ArrowBigDown, Ellipsis, Plus } from "lucide-react"
import { useState } from "react"
import { useContextTodo } from "@/context"
export default function Dashboard() {
    const [IsOpenDashboard, SetIsopenDashboard] = useState<boolean>(false)
    const [IsCreateTaskabove, SetIsCreateTaskabove] = useState<boolean>(false)
    const { todos } = useContextTodo()
    const { open: IsSidebarOpen } = useSidebar()
    return (
        <div className="flex flex-col gap-3 overflow-y-auto">
            <Header IsSidebarOpen={IsSidebarOpen} />
            <div className="flex px-5 items-center gap-5">
                <div>
                    {!IsOpenDashboard &&
                        <ArrowBigRight onClick={() => SetIsopenDashboard(true)} className="h-4 w-4 text-[rgb(255_258_248/50%)]" />}
                    {IsOpenDashboard && <ArrowBigDown onClick={() => SetIsopenDashboard(false)} className="h-4 w-4 text-[rgb(255_258_248/50%)]" />}
                </div>
                <div className="bg-[rgb(255_258_248/10%)] p-1 px-2 flex  items-center rounded-md  gap-2">
                    <CircleDashed className="h-4 w-4 text-[rgb(255_258_248/50%)]" />
                    <p className="text-[0.8rem]">TODO</p>
                </div>
                <div className="text-sm text-[rgb(255_258_248/50%)]">{todos.length}</div>
                <div>
                    <Ellipsis className="h-4 w-4 text-[rgb(255_258_248/50%)]" />
                </div>
                <div className="flex items-center  gap-2" onClick={() => SetIsCreateTaskabove((prev) => !prev)}>
                    <Plus className="h-4 w-4 text-[rgb(255_258_248/50%)]" />
                    <p className="text-sm text-[rgb(255_258_248/50%)]">Add Task</p>
                </div>
            </div>
            {IsOpenDashboard &&
                <Table IsCreateTaskabove={IsCreateTaskabove} SetIsCreateTaskabove={SetIsCreateTaskabove} />
            }
        </div>
    )
}
