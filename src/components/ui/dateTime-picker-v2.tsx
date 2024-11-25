import { useState, forwardRef } from "react"
import { Calendar as CalendarIcon, Clock } from "lucide-react"
import moment from "moment"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { TimePicker } from "@/components/ui/time-picker-v2"

interface DateTimePickerProps {
  value?: Date
  onChange: (date: Date) => void
}

export const DateTimePicker = forwardRef<HTMLButtonElement, DateTimePickerProps>(({ value, onChange }, ref) => {
  const [dateTime, setDateTime] = useState<Date | undefined>(value)

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (!selectedDate) return
    const updatedDate = moment(selectedDate)
      .set({
        hour: dateTime ? moment(dateTime).hour() : 0,
        minute: dateTime ? moment(dateTime).minute() : 0,
      })
      .toDate()
    setDateTime(updatedDate)
    onChange(updatedDate)
  }

  const handleTimeChange = (time: { hour: number; minute: number }) => {
    const updatedDate = moment(dateTime || new Date())
      .set({ hour: time.hour, minute: time.minute })
      .toDate()
    setDateTime(updatedDate)
    onChange(updatedDate)
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          ref={ref}
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
            interval={30}
            selectedTime={
              dateTime
                ? { hour: moment(dateTime).hour(), minute: moment(dateTime).minute() }
                : undefined
            }
            onTimeChange={handleTimeChange}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
)