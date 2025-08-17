import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import type { addtodo } from "@/types"


type Props = {
    setodo: React.Dispatch<React.SetStateAction<addtodo>>
}


export function DatePicker({ setodo }: Props) {
    const [date, setDate] = React.useState<Date>()

    React.useEffect(() => {
        setodo((prev) => {
            return { ...prev, dueDate: date ? format(date, "yyyy-MM-dd") : "" }
        })
    }, [date])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    data-empty={!date}
                    className="data-[empty=true]:text-muted-foreground hover:text-white  border border-[rgba(28,28,28,30)] px-2 hover:!bg-transparent  justify-start text-left font-normal"
                >
                    <CalendarIcon className="text-white" />
                    {date ? format(date, "yyyy-MM-dd") : ""}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 text-white bg-[rgba(28,28,28,30)] border-[rgba(28,28,28,30)]">
                <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
        </Popover>
    )
}