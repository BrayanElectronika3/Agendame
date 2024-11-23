import { Button } from "@/components/ui/button"

interface Buttons {
    label: string
    action: () => void
}

const Buttons: Buttons[] = [
    { label: "➕ Añadir cita", action: () => console.log("Añadir cita") },
    { label: "➖ Editar cita", action: () => console.log("Editar cita") },
    { label: "✖️ Eliminar cita", action: () => console.log("Eliminar cita") },
]

const ButtonAppointment = () => {
    return (
        <div className="ml-1 flex flex-wrap justify-center gap-2 lg:justify-normal">
            {Buttons.map((button, index) => (
            <Button key={index} className="w-full md:flex-1 lg:flex-none lg:w-1/6" onClick={button.action}>
                {button.label}
            </Button>
            ))}
        </div>
    )
}

export default ButtonAppointment