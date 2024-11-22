import { create } from 'zustand'
import { produce } from 'immer'

export interface Appointment {
    title: string
    start: Date
    end: Date
    allDay: boolean
    description: string
    headquearters: string
    selectItem: boolean
}

interface AppointmentStore {
    appointments: Appointment[]
    selectItems: (value: string) => void
}

const generateAppointment = ( title: string, startOffsetDays: number, durationHours: number, description: string, headquearters: string): Appointment => {
    const now = new Date()
    const start = new Date(now.setDate(now.getDate() + startOffsetDays))
    const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000)
    return {
        title,
        start,
        end,
        allDay: false,
        description,
        headquearters,
        selectItem: false,
    }
}

export const useAppointmentStore = create<AppointmentStore>((set) => ({
    appointments: [
        generateAppointment('Cita 1', -2, 2, 'Programada en el consultorio 1', 'Bogota'),
        generateAppointment('Cita 2', 0, 2, 'Programada en el consultorio 2', 'Cucuta'),
        generateAppointment('Cita 3', 2, 2, 'Programada en el consultorio 3', 'Tolima'),
        generateAppointment('Cita 4', 3, 2, 'Programada en el consultorio 10', 'Barranquilla'),
        generateAppointment('Cita 2', 0, 2, 'Programada en el consultorio 2', 'Cucuta'),
        generateAppointment('Cita 3', 2, 2, 'Programada en el consultorio 3', 'Tolima'),
        generateAppointment('Cita 4', 3, 2, 'Programada en el consultorio 10', 'Barranquilla'),
    ],

    selectItems: (value: string) => {
        set(
            produce((state: AppointmentStore) => {
                if (!value || typeof value !== 'string') {
                    console.error('Error: El valor proporcionado no es valido')
                    return null
                }

                state.appointments.forEach((appointment) => {
                    appointment.selectItem = appointment.title === value
                })
            })
        )
    }
}))