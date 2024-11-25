import { Button } from "@/components/ui/button"

import CustomAlertDialog from "@/components/Global/customAlertDialog/CustomAlertDialog"
import CustomSheet from "@/components/Global/customSheet/CustomSheet"
import AddAppointmentForm from "@/components/Appointments/customForm/AddAppointment/AddAppointmentForm"

import { useAppointmentStore } from "@/store/appointmentStore"

type AppointmentButton = {
    id: string
    label: string
    action: () => void
    alertDialog?: {
        title: string
        description: string
        cancelLabel: string
        acceptLabel: string
        cancelAction: () => void
        acceptAction: () => void
    },
    sheet?: {
        title: string,
        description: string,
        titleAlert: string,
        descriptionAlert: string,
        buttonCancelAlert: string,
        buttonAcceptAlert: string,
    }
}

const ButtonAppointment = () => {
    const currentSelection = useAppointmentStore((state) => state.currentSelection)

    const appointmentButtons: AppointmentButton[] = [
        { 
            id: "addAppointmentButton", 
            label: "➕ Crear Cita",
            action: () => console.log('Add appointment'),
            sheet: {
                title: "Crear Cita",
                description: "Por favor, completa los siguientes campos para programar una nueva cita.",
                titleAlert: "¿Seguro que deseas añadir esta cita?",
                descriptionAlert: "Se añadirá una nueva cita con los datos ingresados. ¿Deseas continuar?",
                buttonCancelAlert: "Cancelar",
                buttonAcceptAlert: "Aceptar",
            }
        },
        { 
            id: "viewAppointmentButton", 
            label: "✔️ Ver Detalles",
            action: () => console.log("Revisando cita"),
        },
        { 
            id: "editAppointmentButton", 
            label: "➖ Editar Cita", 
            action: () => console.log("Editar cita"), 
            sheet: {
                title: "Editar Cita",
                description: "Por favor, modifica los siguientes campos para editar la cita.",
                titleAlert: "¿Seguro que deseas editar esta cita?",
                descriptionAlert: "Se modificará la cita con los datos ingresados. ¿Deseas continuar?",
                buttonCancelAlert: "Cancelar",
                buttonAcceptAlert: "Aceptar",
            }
        },
        { 
            id: "deleteAppointmentButton", 
            label: "✖️ Eliminar Cita", 
            action: () => console.log("Eliminar cita"),
            alertDialog: {
                title: "¿Seguro que deseas eliminar esta cita?",
                description: "Esta acción eliminará de forma permanente la cita seleccionada. ¿Deseas continuar?",
                cancelLabel: "Cancelar",
                acceptLabel: "Aceptar",
                cancelAction: () => console.log("Cancelando eliminación de la cita..."),
                acceptAction: () => console.log("Eliminando cita con confirmacion..."),
            },
        },
    ]

    const handleSave = () => {
        console.log("Guardando...")
    }

    return (
        <div className="ml-1 flex flex-wrap justify-center gap-2 lg:justify-normal">
            {appointmentButtons.map((button) => {
                const isVisible = button.id === "addAppointmentButton" || currentSelection
                if (!isVisible) return null
                
                return button.alertDialog ? (
                    <CustomAlertDialog
                        key={button.id}
                        title={button.alertDialog.title}
                        description={button.alertDialog.description}
                        cancelLabel={button.alertDialog.cancelLabel}
                        continueLabel={button.alertDialog.acceptLabel}
                        cancelAction={button.alertDialog.cancelAction}
                        continueAction={button.alertDialog.acceptAction}
                    >
                        <Button
                            className={`w-full md:flex-1 lg:flex-none lg:w-1/6`}
                            onClick={button.action}
                        >
                            {button.label}
                        </Button>
                    </CustomAlertDialog>
                ) : (
                    <CustomSheet
                        key={button.id}
                        trigger={
                            <Button className="w-full md:flex-1 lg:flex-none lg:w-1/6">
                              {button.label}
                            </Button>
                        }
                        title={button.sheet?.title}
                        description={button.sheet?.description}
                        onSave={handleSave}
                        saveButtonLabel="Guardar"
                    >
                        <AddAppointmentForm/>
                    </CustomSheet>
                )
            })}
        </div>
    )
}

export default ButtonAppointment