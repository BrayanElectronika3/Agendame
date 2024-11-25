import { ReactNode } from "react"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"  

interface Props {
    children: ReactNode
    title: string
    description: string
    cancelLabel: string
    continueLabel: string
    cancelAction: () => void
    continueAction: () => void
}

const CustomAlertDialog = ({ children, title, description, cancelLabel, continueLabel, cancelAction, continueAction }: Props) => {
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
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={cancelAction}>{cancelLabel}</AlertDialogCancel>
                    <AlertDialogAction onClick={continueAction}>{continueLabel}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CustomAlertDialog