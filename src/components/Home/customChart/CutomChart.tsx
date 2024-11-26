import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import './CustomChart-module.css'

export const CustomChart = () => {
  return (
    <div className="flex gap-2">
        <Card className="flex flex-col w-full md:w-1/3 p-2 shadow-md">
            <CardHeader className="items-center text-center">
                <CardTitle className="font-bold text-2xl">Proximo agendamiento</CardTitle>
                <CardDescription>{new Date().toLocaleString().toString()}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-5">
                <div className="flex items-center justify-center w-40 h-40 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 rounded-full bounce-limited">
                    <span className="text-4xl font-bold text-gray-900">Cita 10</span>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center text-sm text-gray-600">
                Recuerda llegar con antelación a la hora programada
            </CardFooter>
        </Card>

        <Card className="flex flex-col w-full md:w-2/3 p-2 shadow-md">
            <CardHeader className="items-center text-center">
                <CardTitle className="font-bold text-2xl">Noticias</CardTitle>
                <CardDescription>{new Date().toLocaleString().toString()}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-5">
                <h1>Hola aca te presento la noticia</h1>
            </CardContent>
            <CardFooter className="flex flex-col items-center text-sm text-gray-600">
                Noticia # 10
            </CardFooter>
        </Card>
    </div>
  )
}
