import { ReactNode } from "react"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"  

export interface PropsAlertDialog {
    // Titulo y descripcion
    title: string
    description: string
    // Boton de cancelar acccion en el Alert Dialog
    cancelButton?: boolean
    cancelLabel?: string
    cancelAction?: () => void
    // Boton de confirmar accion en el alert Dialog
    continueButton?: boolean
    continueLabel?: string
    continueAction?: () => void
    // Contenido de la tarjeta en caso de ser requerido
    content?: boolean
    headquarters?: string
    start?: Date
    end?: Date
}

interface Props {
    children: ReactNode
    props: PropsAlertDialog
}

const CustomAlertDialog = ({ children, props }: Props) => {

    const { 
        title,
        description,
        cancelButton = false,
        cancelLabel = "Cancelar", 
        cancelAction = () => {},
        continueButton = true,
        continueLabel = "Aceptar", 
        continueAction = () => {},
        content = false,
        headquarters,
        start,
        end,
    } = props
    
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                { content && 
                    <div>
                        <p className="text-sm"><strong>• Sede: </strong>{headquarters}</p>
                        <p className="text-sm"><strong>• Fecha y hora inicial: </strong> {start?.toLocaleString().toString()}</p>
                        <p className="text-sm"><strong>• Fecha y hora final: </strong> {end?.toLocaleString().toString()}</p>
                    </div>
                }
                <AlertDialogFooter>
                    {cancelButton && 
                        <AlertDialogCancel onClick={cancelAction}>{cancelLabel}</AlertDialogCancel>
                    }
                    {continueButton &&
                        <AlertDialogAction onClick={continueAction}>{continueLabel}</AlertDialogAction>
                    }
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CustomAlertDialog