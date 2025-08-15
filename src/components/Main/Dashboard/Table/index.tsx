import { dummyTodos, columns } from "@/lib/utils"
import { DataTable } from "./Datatable"
export default function Table() {
    return (
        <div className="container mx-auto ">
            <DataTable columns={columns} data={dummyTodos} />
        </div>
    )
}
