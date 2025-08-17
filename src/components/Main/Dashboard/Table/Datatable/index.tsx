import {
    type ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getFilteredRowModel
} from "@tanstack/react-table"
import type { ColumnFiltersState } from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { useContextTodo } from "@/context"
import { Select, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { SelectTrigger } from "@radix-ui/react-select"
import { Flag, Plus } from "lucide-react"
import { DatePicker } from "@/components/ui/datepicker"
import type { addtodo, Todo } from "@/types"


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    IsCreateTaskabove: boolean,
    SetIsCreateTaskabove: React.Dispatch<boolean>
}


export function DataTable<TData, TValue>({
    columns,
    data,
    IsCreateTaskabove,
    SetIsCreateTaskabove
}: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = React.useState({})
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]) // ✅ typed
    const { setTodos, todos } = useContextTodo()
    const [todo, setodo] = useState<addtodo>({
        title: "",
        dueDate: "",
        status: "",
        priority: "",
        id: todos.length
    })
    const [active, setactive] = React.useState<boolean>(false)
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onRowSelectionChange: setRowSelection,
        onColumnFiltersChange: setColumnFilters,
        state: {
            rowSelection,
            columnFilters,
        },
    })

    const addtodo = (postion: "below" | "above") => {
        if (todo.title.trim().length === 0) return
        const today = new Date();
        const formattedToday = today.toISOString().split("T")[0];

        const newTodo: Todo = {
            ...todo,
            dueDate: todo.dueDate ? todo.dueDate : formattedToday,
            priority: (todo.priority || "Low") as "High" | "Medium" | "Low",
            status: (todo.status || "Pending") as "Pending" | "Completed" | "In Progress",
        };

        if (postion === "above") {
            setTodos((prev) => [newTodo, ...prev])
        }
        else {
            setTodos((prev) => [...prev, newTodo])
        }
        setodo({ ...todo, title: "", dueDate: "", priority: "", status: "" })
    }

    console.log(todos)

    return (
        <div className="overflow-hidden rounded-md w-[95%] lg:w-[92%] xl:w-[95%] mx-auto">
            <Table>
                <TableHeader className="">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} className="text-[rgb(255_258_248/50%)] text-sm">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="text-sm">
                    {IsCreateTaskabove && (
                        <TableRow>
                            <TableCell colSpan={columns.length}>
                                <div className="flex items-center justify-between">
                                    <input
                                        style={{ outline: "none", boxShadow: "none" }}
                                        className="hover:border-0 focus:outline-none focus:ring-0 focus:border-0 focus:shadow-none"
                                        placeholder="Enter task name..."
                                        onChange={(e) => setodo((prev) => {
                                            return { ...prev, title: e.target.value }
                                        })}
                                    />
                                    <div className="flex items-center gap-3">
                                        <DatePicker setodo={setodo} />
                                        <Select
                                            onValueChange={(value) => setodo((prev) => {
                                                return { ...prev, priority: value === "all" ? "" : value }
                                            })}
                                        >
                                            <SelectTrigger className="border flex items-center gap-1 border-[rgba(28,28,28,30)] p-2 rounded  focus:outline-none focus:ring-0 focus:border-0 focus:shadow-none">
                                                <Flag className="h-4 w-4" />
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent className="border border-[rgba(28,28,28,30)] bg-[rgba(28,28,28,30)] text-white shadow-none">
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
                                        <Button className="border text-[rgb(255_258_248/50%)]  text-sm border-[rgba(28,28,28,30)] hover:!bg-transparent hover:!text-white" size="sm" variant="ghost" onClick={() => SetIsCreateTaskabove(false)} >
                                            Cancel
                                        </Button>
                                        <Button
                                            size="sm"
                                            className="bg-[#4a3fea] hover:!bg-[#4a3fea] hover:!text-white"
                                            onClick={() => addtodo("above")}
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}

                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                    {!active &&
                        <div
                            className="flex items-center gap-2 mt-2"
                            onClick={() => setactive((prev) => !prev)}
                        >
                            <Plus className="h-4 w-4 text-white/50" />
                            <p className="text-sm">Add Task</p>
                        </div>
                    }

                    {active && (
                        <TableRow>
                            <TableCell colSpan={columns.length}>
                                <div className="flex items-center justify-between border-b border-[rgb(53,52,52)]">
                                    <input
                                        style={{ outline: "none", boxShadow: "none" }}
                                        className="hover:border-0 focus:outline-none focus:ring-0 focus:border-0 focus:shadow-none"
                                        placeholder="Enter task name..."
                                        onChange={(e) => setodo((prev) => {
                                            return { ...prev, title: e.target.value }
                                        })}
                                    />
                                    <div className="flex items-center gap-3">
                                        <DatePicker setodo={setodo} />
                                        <Select
                                            onValueChange={(value) => setodo((prev) => {
                                                return { ...prev, priority: value === "all" ? "" : value }
                                            })}
                                        >
                                            <SelectTrigger className="border flex items-center gap-1 border-[rgba(28,28,28,30)] p-2 rounded  focus:outline-none focus:ring-0 focus:border-0 focus:shadow-none">
                                                <Flag className="h-4 w-4" />
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent className="border border-[rgba(28,28,28,30)] bg-[rgba(28,28,28,30)] text-white shadow-none">
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
                                        <Button className=" border text-[rgb(255_258_248/50%)]  text-sm border-[rgba(28,28,28,30)] hover:!bg-transparent hover:!text-white" size="sm" variant="ghost" onClick={() => setactive(false)} >
                                            Cancel
                                        </Button>
                                        <Button
                                            size="sm"
                                            className="bg-[#4a3fea] hover:!bg-[#4a3fea] hover:!text-white"
                                            onClick={() => addtodo("below")}

                                        >
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}