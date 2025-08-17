import type { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CircleDashed, MoreHorizontal } from "lucide-react"
import type { Todo } from "@/types"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useContextTodo } from "@/context"

export const columns: ColumnDef<Todo>[] = [
    {
        accessorKey: "title",
        header: "Name",
        cell: ({ row }) => {
            return <div className="flex items-center  gap-3">
                <CircleDashed className="h-4 w-4 text-[rgb(255_258_248/50%)]" />
                <p>
                    {row.original.title}
                </p>
            </div>
        }
    },
    {
        accessorKey: "dueDate",
        header: "Due date",
    },
    {
        accessorKey: "priority",
        header: ({ column }) => {
            return (
                <Select
                    onValueChange={(val) => column.setFilterValue(val === "all" ? null : val)}
                >
                    <SelectTrigger
                        className="border-0  focus:ring-0 focus:ring-offset-0 focus:outline-none  shadow-none"
                    >
                        <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent className="bg-[rgba(28,28,28,30)] text-white shadow-none">
                        <SelectItem value="High" className="hover:!bg-transparent focus:bg-transparent">
                            High
                        </SelectItem>
                        <SelectItem value="Medium" className="hover:!bg-transparent focus:bg-transparent">
                            Medium
                        </SelectItem>
                        <SelectItem value="Low" className="hover:!bg-transparent focus:bg-transparent">
                            Low
                        </SelectItem>
                        <SelectItem value="all" className="hover:!bg-transparent focus:bg-transparent">
                            All
                        </SelectItem>
                    </SelectContent>
                </Select>

            )
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Select
                    onValueChange={(val) =>
                        column.setFilterValue(val === "all" ? null : val)
                    }
                >
                    <SelectTrigger className="border-0 hover:!border-0 focus:border-0">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-[rgba(28,28,28,30)] text-white">
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                </Select>
            )
        },
    }
    ,
    {
        id: "actions",
        cell: ({ row }) => {
            const todo = row.original
            const { setTodos, todos } = useContextTodo()
            const deletetodo = (id: number) => {
                const filtertodos = todos.filter((todo) => todo.id !== id)
                setTodos(filtertodos)
            }

            return (
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button className="h-8 w-8 p-0 bg-transparent">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-[rgb(25,25,25)] text-white">
                        <DropdownMenuItem onClick={() => deletetodo(todo.id)} className="hover:!bg-transparent  hover:!text-white">delete</DropdownMenuItem>
                        <DropdownMenuItem className="hover:!bg-transparent hover:!text-white">Edit</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
