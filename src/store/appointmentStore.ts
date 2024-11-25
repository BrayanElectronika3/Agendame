import { create } from 'zustand'
import { produce } from 'immer'
import { subscribeWithSelector } from "zustand/middleware"

export interface Appointment {
    title: string
    start: Date
    end: Date
    allDay: boolean
    description: string
    headquarters: string
    selectItem: boolean
}

interface AppointmentStore {
    appointments: Appointment[]
    selectItems: (value: string) => void
    currentSelection: Appointment | null
}

const generateAppointment = ( title: string, startOffsetDays: number, durationHours: number, description: string, headquarters: string): Appointment => {
    const now = new Date()
    const start = new Date(now.setDate(now.getDate() + startOffsetDays))
    const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000)
    return {
        title,
        start,
        end,
        allDay: false,
        description,
        headquarters,
        selectItem: false,
    }
}

export const useAppointmentStore = create(subscribeWithSelector<AppointmentStore>((set) => ({
    appointments: [
        generateAppointment('Cita 1', -2, 2, 'Programada en el consultorio 1', 'Bogota'),
        generateAppointment('Cita 2', 0, 2, 'Programada en el consultorio 2', 'Cucuta'),
        generateAppointment('Cita 3', 2, 2, 'Programada en el consultorio 3', 'Tolima'),
        generateAppointment('Cita 4', 3, 2, 'Programada en el consultorio 10', 'Barranquilla'),
    ],

    selectItems: (value: string) => {
        if (typeof value !== "string" || !value.trim()) {
            console.error("Error: El valor proporcionado no es válido")
            return
        }
    
        set(
            produce((state: AppointmentStore) => {
                // Si el elemento seleccionado ya es el mismo en `currentSelection`, lo deselecciona
                if (state.currentSelection?.title === value) {
                    // Desmarcar todos los elementos
                    state.currentSelection = null
                    state.appointments = state.appointments.map((item) => ({
                        ...item,
                        selectItem: false,
                    }))

                // Actualiza los elementos seleccionados y establece el nuevo `currentSelection`
                } else {
                    state.appointments = state.appointments.map((item) => ({
                        ...item,
                        selectItem: item.title === value,
                    }))

                    state.currentSelection = state.appointments.find(
                        (item) => item.title === value
                    ) || null
                }
            })
        )
    },

    currentSelection: null,
})))