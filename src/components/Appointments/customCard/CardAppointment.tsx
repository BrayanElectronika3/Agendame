import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Appointment } from "@/store/appointmentStore"

interface CardAppointmentProps {
    appointment: Appointment
}

const CardAppointment = ({ appointment }: CardAppointmentProps) => {
    const { title, description, headquearters, start, selectItem } = appointment

    return (
        <Card className={`w-full overflow-auto mr-2 ${selectItem ? 'bg-blue-100' : 'bg-white'}`} >
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="text-xs">{description}</CardDescription>
            </CardHeader>
            <CardContent className="text-xs p-2">
                <p><strong>Sede: </strong>{headquearters}</p>
                <p><strong>Fecha y hora: </strong>{start.toLocaleString().toString()}</p>
            </CardContent>
        </Card>        
    )
}

export default CardAppointment