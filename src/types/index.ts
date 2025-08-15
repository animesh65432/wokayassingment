export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export type Todo = {
    id: number
    title: string
    dueDate: string
    priority: "High" | "Medium" | "Low"
    status: "Pending" | "Completed" | "In Progress"
}