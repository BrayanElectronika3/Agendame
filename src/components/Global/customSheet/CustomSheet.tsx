import { ReactNode, useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from "@/components/ui/sheet"

import { CustomSheetContext } from "./useCustomSheet"

// Componente CustomSheet
interface Props {
    trigger: ReactNode
    children: ReactNode
    title: string | undefined
    description: string | undefined
}

const CustomSheet = ({ trigger, children, title, description }: Props) => {
    try {
        const [isOpen, setIsOpen] = useState(false)

        const closeSheet = () => {setIsOpen(false)}

        return (
            <CustomSheetContext.Provider value={{ closeSheet }}>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
                            <SheetClose asChild>
                                <Button variant="secondary" className="w-full">Cancelar</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </CustomSheetContext.Provider>
        )

    } catch (error) {
        console.error("Error rendering CustomSheet:", error)
        return null
    }
}

export default CustomSheet