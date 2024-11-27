import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "Enero", desktop: 20 },
  { month: "Febrero", desktop: 30 },
  { month: "Marzo", desktop: 10 },
  { month: "Abril", desktop: 5 },
  { month: "Mayo", desktop: 35 },
  { month: "Junio", desktop: 20 },
]

const chartConfig = {
  desktop: {
    label: "Agendamientos",
    color: "black",
  },
} satisfies ChartConfig

export const CustomChart = () => {
  return (
    <Card className="overflow-hidden border-none shadow-none">
        <CardHeader className="items-center text-center p-2">
            <CardTitle className="text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold">Historial de citas</CardTitle>
            <CardDescription className="text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg truncate">{new Date().toLocaleString().toString()}</CardDescription>
        </CardHeader>

        <CardContent className="p-2">
            <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
            </BarChart>
            </ChartContainer>
        </CardContent>

        <CardFooter className="text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-center text-gray-600 p-2 justify-center">
            Agendamiento de citas en los últimos 6 meses
        </CardFooter>
    </Card>
  )
}
