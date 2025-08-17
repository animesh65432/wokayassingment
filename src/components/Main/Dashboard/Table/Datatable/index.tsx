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
import React from "react"
import { Button } from "@/components/ui/button"
import { useContextTodo } from "@/context"
import { Select, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { SelectTrigger } from "@radix-ui/react-select"
import { Calendar, Flag } from "lucide-react"
import { DatePicker } from "@/components/ui/datepicker"


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
    const { setTodos } = useContextTodo()
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

    const addtodo = () => {
        setTodos((prev) => {
            return { ...prev }
        })
    }

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
                                    />
                                    <div className="flex items-center gap-3">
                                        <DatePicker />
                                        <Select
                                            onValueChange={(val) => console.log(val)}
                                        >
                                            <SelectTrigger className="border-0 hover:border-0  focus:outline-none focus:ring-0 focus:border-0 focus:shadow-none">
                                                <Flag className="h-4 w-4" />
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[rgba(28,28,28,30)] text-white">
                                                <SelectItem value="Pending">Pending</SelectItem>
                                                <SelectItem value="Completed">Completed</SelectItem>
                                                <SelectItem value="In Progress">In Progress</SelectItem>
                                                <SelectItem value="all">All</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Button
                                            size="sm"
                                            onClick={() => {

                                                console.log("Task created")
                                            }}
                                        >
                                            Save
                                        </Button>
                                        <Button size="sm" variant="ghost" onClick={() => SetIsCreateTaskabove(false)} >
                                            Cancel
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
                </TableBody>
            </Table>
        </div>
    )
}