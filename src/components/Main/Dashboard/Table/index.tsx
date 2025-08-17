import { columns } from "./Columns"
import { DataTable } from "./Datatable"
import { useContextTodo } from "@/context"
export default function Table() {
    const { todos } = useContextTodo()
    return (
        <div className="container mx-auto ">
            <DataTable columns={columns} data={todos} />
        </div>
    )
}
