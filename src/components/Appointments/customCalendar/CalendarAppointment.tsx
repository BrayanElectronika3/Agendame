import { Appointment, useAppointmentStore } from "@/store/appointmentStore"

import BigCalendar from "./big-calendar"

const CalendarAppointment = () => {
    const appointments = useAppointmentStore((state) => state.appointments)
    const selectItems = useAppointmentStore((state) => state.selectItems)

    const handleEventSelect = (appointment: Appointment) => {
        selectItems(appointment.title)
    }

    return (
        <div className="p-1 bg-gray-100 rounded-md shadow-md m-1 mr-0">
            <BigCalendar appointments={appointments} onEventSelect={handleEventSelect}/>
        </div>
    )
}
  
export default CalendarAppointment