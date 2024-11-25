import { useMemo } from "react"

import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Props {
    interval?: number
    selectedTime?: { hour: number; minute: number }
    onTimeChange: (time: { hour: number; minute: number }) => void
}

export function TimePicker({ interval = 30, selectedTime, onTimeChange}: Props) {
    // Generar opciones de tiempo basadas en el intervalo
    const timeOptions = useMemo(() => {
        const times: { hour: number; minute: number }[] = []
        for (let h = 0; h < 24; h++) {
            for (let m = 0; m < 60; m += interval) {
                times.push({ hour: h, minute: m })
            }
        }
        return times
    }, [interval])

    // Formatear hora y minuto
    const formatTime = (hour: number, minute: number) => {
        return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
    }

    return (
        <Select
            onValueChange={(value) => {
                const [hour, minute] = value.split(":").map(Number)
                onTimeChange({ hour, minute })
            }}
            value={
                selectedTime
                ? formatTime(selectedTime.hour, selectedTime.minute)
                : undefined
            }
        >
            <SelectTrigger className={cn("w-full")}>
                <SelectValue placeholder="Selecciona hora" />
            </SelectTrigger>
            <SelectContent>
                {timeOptions.map(({ hour, minute }) => (
                <SelectItem key={`${hour}-${minute}`} value={formatTime(hour, minute)}>
                    {formatTime(hour, minute)}
                </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
