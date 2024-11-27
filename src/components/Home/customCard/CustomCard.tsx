import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import CustomAlertDialog from "@/components/Global/customAlertDialog/CustomAlertDialog"

import './CustomCard-module.css'

export const CustomCard = () => {
    return (
        <Card className="shadow-md w-full h-full overflow-hidden flex flex-col items-center justify-center">
            <CardHeader className="items-center text-center p-2">
                <CardTitle className="text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold">Próximo agendamiento</CardTitle>
                <CardDescription className="text-base md:text-base lg:text-base xl:text-base 2xl:text-lg truncate">{new Date().toLocaleString().toString()}</CardDescription>
            </CardHeader>
            <CustomAlertDialog
                    key={ 1 }
                    props={{
                        title: 'Sin titulo',
                        description: 'Sin descripcion',
                        content: true,
                        headquarters: 'ABC',
                        start: new Date(),
                        end: new Date(),
                    }}
                >        
                <CardContent className="aspect-square w-1/2 flex items-center justify-center p-2 overflow-hidden">
                    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-white via-gray-300 to-gray-500 rounded-full bounce-limited">
                        <span className="text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold text-center truncate">Cita 10</span>
                    </div>
                </CardContent>
            </CustomAlertDialog>
            <CardFooter className="text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-center text-gray-600 p-2">
                Recuerda llegar con antelación a la hora programada
            </CardFooter>
        </Card>
    )
}
