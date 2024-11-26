import { ReactNode } from "react"

import { Button } from "@/components/ui/button"

import CustomAlertDialog from "@/components/Global/customAlertDialog/CustomAlertDialog"
import CustomSheet from "@/components/Global/customSheet/CustomSheet"

import AddAppointmentForm from "@/components/Appointments/customForm/AddAppointment/AddAppointmentForm"
import EditAppointmentForm from "@/components/Appointments/customForm/EditAppointment/EditAppointmentForm"

import { useAppointmentStore } from "@/store/appointmentStore"

import { PropsAlertDialog } from '@/components/Global/customAlertDialog/CustomAlertDialog'

type AppointmentButton = {
    id: string
    label: string
    action?: () => void
    alertDialog?: PropsAlertDialog,
    sheet?: {
        title: string
        description: string
        form: ReactNode
    }
}

const ButtonAppointment = () => {
    const currentSelection = useAppointmentStore((state) => state.currentSelection)
    const deleteAppointment = useAppointmentStore((state) => state.deleteAppointment)

    const appointmentButtons: AppointmentButton[] = [
        { 
            id: "addAppointmentButton", 
            label: "➕ Crear Cita",
            sheet: {
                title: "Crear Cita",
                description: "Por favor, completa los siguientes campos para programar una nueva cita.",
                form: <AddAppointmentForm />,
            }
        },
        { 
            id: "viewAppointmentButton", 
            label: "✔️ Ver Detalles",
            alertDialog: {
                title: currentSelection?.title || 'Sin titulo',
                description: (currentSelection?.description) || 'Sin descripcion',
                content: true,
                headquarters: currentSelection?.headquarters,
                start: currentSelection?.start,
                end: currentSelection?.end,
            },
        },
        { 
            id: "editAppointmentButton", 
            label: "〰️ Editar Cita", 
            sheet: {
                title: "Editar Cita",
                description: "Por favor, modifica los siguientes campos para editar la cita.",
                form: <EditAppointmentForm />,
            }
        },
        { 
            id: "deleteAppointmentButton", 
            label: "✖️ Eliminar Cita", 
            alertDialog: {
                title: "¿Seguro que deseas eliminar esta cita?",
                description: "Esta acción eliminará de forma permanente la cita seleccionada. ¿Deseas continuar?",
                cancelButton: true,
                continueAction: () => { if (currentSelection?.id) deleteAppointment(currentSelection.id) }
            },
        },
    ]

    return (
        <div className="ml-1 flex flex-wrap justify-center gap-2 lg:justify-normal">
            {appointmentButtons.map((button) => {
                const isVisible = button.id === "addAppointmentButton" || currentSelection
                if (!isVisible) return null
                
                // Render AlertDialog si esta definido
                if (button.alertDialog) {
                    return (
                        <CustomAlertDialog
                            key={ button.id }
                            props={ button.alertDialog }
                        >
                            <Button className="w-full md:flex-1 lg:flex-none lg:w-1/6">{button.label}</Button>
                        </CustomAlertDialog>
                    )
                }
        
                // Render Sheet si esta definido
                if (button.sheet) {
                    return (
                        <CustomSheet
                            key={button.id}
                            trigger={<Button className="w-full md:flex-1 lg:flex-none lg:w-1/6">{button.label}</Button>}
                            title={button.sheet.title}
                            description={button.sheet.description}
                        >
                            {button.sheet.form}
                        </CustomSheet>
                    )
                }
        
                // Render accion directa si esta definida
                if (button.action) {
                    return (
                        <Button
                            key={button.id}
                            className="w-full md:flex-1 lg:flex-none lg:w-1/6"
                            onClick={button.action}
                        >
                            {button.label}
                        </Button>
                    )
                }

                // No renderiza nada si no hay acción, alertDialog o sheet
                return null
            })}
        </div>
    )
}

export default ButtonAppointment