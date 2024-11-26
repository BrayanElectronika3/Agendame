import { create } from 'zustand'
import { subscribeWithSelector } from "zustand/middleware"
import { produce } from 'immer'

export interface Appointment {
    id: number
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
    currentSelection: Appointment | null

    selectItems: (idAppointment: number) => void
    addAppointment: (appointment: Appointment) => void
    editAppointment: (idAppointment: number, updatedFields: Partial<Appointment>) => void
    deleteAppointment: (idAppointment: number) => void
}

const generateAppointment = ( 
        id: number, 
        title: string, 
        startOffsetDays: number, 
        durationHours: number, 
        description: string, 
        headquarters: string
    ): Appointment => {
    const now = new Date()
    const start = new Date(now.setDate(now.getDate() + startOffsetDays))
    const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000)
    return {
        id,
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
        generateAppointment(1, 'Cita 1', -2, 2, 'Programada en el consultorio 1', 'Bogota'),
        generateAppointment(2, 'Cita 2', 0, 2, 'Programada en el consultorio 2', 'Cucuta'),
        generateAppointment(3, 'Cita 3', 2, 2, 'Programada en el consultorio 3', 'Tolima'),
        generateAppointment(4, 'Cita 4', 3, 2, 'Programada en el consultorio 10', 'Barranquilla'),
    ],
    
    currentSelection: null,

    // Seleccionar o deseleccionar citas
    selectItems: (idAppointment: number) => {
        if (typeof idAppointment !== "number" || isNaN(idAppointment)) {
            console.error("Error: El id proporcionado no es valido.")
            return
        }

        set(
            produce((state: AppointmentStore) => {
                // Si el elemento seleccionado ya es el mismo en `currentSelection`, lo deselecciona
                const isCurrentlySelected = state.currentSelection?.id === idAppointment
                
                state.appointments = state.appointments.map((item) => ({
                    ...item,
                    selectItem: item.id === idAppointment && !isCurrentlySelected,
                }))

                state.currentSelection = isCurrentlySelected
                ? null
                : state.appointments.find((item) => item.id === idAppointment) || null
            })
        )
    },

    // Añadir una nueva cita
    addAppointment: (appointment: Appointment) => {
        if (!appointment.id || !appointment.title) {
            console.error("Error: La cita debe contener un id y un titulo validos.")
            return
        }

        set(
            produce((state: AppointmentStore) => {
                const exists = state.appointments.some((item) => item.id === appointment.id)
                if (exists) {
                    console.error("Error: Ya existe una cita con el mismo id.")
                    return
                }

                state.appointments.push({ ...appointment, selectItem: false })
            })
        )
    },

    // Editar una cita existente
    editAppointment: (idAppointment: number, updatedFields: Partial<Appointment>) => {
        set(
            produce((state: AppointmentStore) => {
                const index = state.appointments.findIndex((item) => item.id === idAppointment)
                if (index === -1) {
                    console.error("Error: No se encontro la cita con el id especificado.")
                    return
                }
                
                state.appointments[index] = {
                    ...state.appointments[index],
                    ...updatedFields,
                }

                if (state.currentSelection?.id === idAppointment) {
                    state.currentSelection = state.appointments[index]
                }
            })
        )
    },

    // Eliminar una cita
    deleteAppointment: (idAppointment: number) => {
        set(
            produce((state: AppointmentStore) => {
                const index = state.appointments.findIndex((item) => item.id === idAppointment)
                if (index === -1) {
                    console.error("Error: No se encontro la cita con el id especificado.")
                    return
                }

                state.appointments.splice(index, 1)

                if (state.currentSelection?.id === idAppointment) {
                    state.currentSelection = null
                }
            })
        )
    },
})))