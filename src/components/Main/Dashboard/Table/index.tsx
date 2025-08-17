import { columns } from "./Columns"
import { DataTable } from "./Datatable"
import { useContextTodo } from "@/context"

type Props = {
    IsCreateTaskabove: boolean,
    SetIsCreateTaskabove: React.Dispatch<boolean>
}
export default function Table({ IsCreateTaskabove, SetIsCreateTaskabove }: Props) {
    const { todos } = useContextTodo()
    return (
        <div className="container mx-auto ">
            <DataTable columns={columns} data={todos} SetIsCreateTaskabove={SetIsCreateTaskabove} IsCreateTaskabove={IsCreateTaskabove} />
        </div>
    )
}
