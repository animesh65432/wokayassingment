import { dummyTodos, columns } from "@/lib/utils"
import { DataTable } from "./Datatable"
export default function Table() {
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={dummyTodos} />
        </div>
    )
}
