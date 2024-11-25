"use client"

import { useState } from "react"
import { Calendar as CalendarIcon, Clock } from "lucide-react"
import moment from "moment"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { TimePicker } from "@/components/ui/time-picker"

export function DateTimePicker() {
    const [dateTime, setDateTime] = useState<Date>()

    const handleDateChange = (selectedDate: Date | undefined) => {
        if (!selectedDate) return
        setDateTime((prevDate) => {
            const time = prevDate ? moment(prevDate).format("HH:mm") : "00:00"
            return moment(selectedDate).set({ hour: +time.split(":")[0], minute: +time.split(":")[1] }).toDate()
        })
    }
    
    const handleTimeChange = (time: { hour: number; minute: number }) => {
        setDateTime((prevDate) => {
            const currentDate = prevDate || new Date()
            return moment(currentDate).set({ hour: time.hour, minute: time.minute }).toDate()
        })
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                    "w-full justify-start text-left font-normal",
                    !dateTime && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateTime ? moment(dateTime).format("DD/MM/YYYY HH:mm") : <span>Selecciona fecha y hora</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-4 space-y-4">
                <Calendar
                    mode="single"
                    selected={dateTime}
                    onSelect={handleDateChange}
                    initialFocus
                />
                <div className="flex items-center space-x-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <TimePicker
                        initialTime={
                            dateTime
                            ? { hour: moment(dateTime).hour(), minute: moment(dateTime).minute() }
                            : { hour: 0, minute: 0 }
                        }
                        onTimeChange={handleTimeChange}
                    />
                </div>
            </PopoverContent>
        </Popover>
    )
}