import { memo } from "react"

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"

import { Appointment, useAppointmentStore } from "@/store/appointmentStore"

interface CardAppointmentProps {
    appointment: Appointment
}

const CardAppointment = memo(({ appointment }: CardAppointmentProps) => {
    const { id, title, description, headquarters, start, selectItem } = appointment
    const selectItems = useAppointmentStore((state) => state.selectItems)

    const handleClick = () => {
        selectItems(id)
    }

    return (
        <Card className={`w-full overflow-auto mr-2 ${selectItem ? 'bg-blue-100' : 'bg-white'}`} onClick={handleClick}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="text-xs">{description}</CardDescription>
            </CardHeader>
            <CardContent className="text-xs p-2">
                <p><strong>Sede: </strong>{headquarters}</p>
                <p><strong>Fecha y hora: </strong>{start.toLocaleString().toString()}</p>
            </CardContent>
        </Card>        
    )
})

export default CardAppointment