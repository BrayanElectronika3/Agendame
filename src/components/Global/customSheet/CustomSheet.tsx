import { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from "@/components/ui/sheet"

interface Props {
    trigger: ReactNode
    children: ReactNode
    title: string | undefined
    description: string | undefined
    saveButtonLabel?: string
    onSave?: () => void
}

const CustomSheet = ({ trigger, children, title, description, saveButtonLabel, onSave }: Props) => {
    try {
        return (
            <Sheet>
                <SheetTrigger asChild>{trigger}</SheetTrigger>
                <SheetContent className="w-11/12 max-w-1/2 sm:w-11/12 md:w-2/3 lg:w-1/2 sm:max-w-11/12 md:max-w-2/3 lg:max-w-1/2">
                    {title || description ? (
                        <SheetHeader>
                        {title && <SheetTitle>{title}</SheetTitle>}
                        {description && <SheetDescription>{description}</SheetDescription>}
                        </SheetHeader>
                    ) : null}
                    {children}
                    <SheetFooter>
                        {onSave && (
                            <Button type="button" onClick={onSave}>{saveButtonLabel}</Button>
                        )}
                        <SheetClose asChild>
                            <Button variant="secondary">Cancelar</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        )

    } catch (error) {
        console.error("Error rendering CustomSheet:", error)
        return null
    }
}

export default CustomSheet