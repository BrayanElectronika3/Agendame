import { Appointment, useAppointmentStore } from "@/store/appointmentStore"

import BigCalendar from "./big-calendar"

const CalendarAppointment = () => {
    const appointments = useAppointmentStore((state) => state.appointments)
    const selectItems = useAppointmentStore((state) => state.selectItems)
    const currentSelection = useAppointmentStore((state) => state.currentSelection) 

    const handleEventSelect = (appointment: Appointment) => {
        selectItems(appointment.id)
    }

    return (
        <div className="p-2 bg-white rounded-md shadow-md m-1 mr-0">
            <BigCalendar appointments={appointments} onEventSelect={handleEventSelect} currentSelection={currentSelection}/>
        </div>
    )
}
  
export default CalendarAppointment