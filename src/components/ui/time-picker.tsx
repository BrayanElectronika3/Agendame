import { useState } from "react"

interface Props {
  initialTime: { hour: number; minute: number }
  onTimeChange: (time: { hour: number; minute: number }) => void
}

export function TimePicker({ initialTime, onTimeChange }: Props) {
  const [time, setTime] = useState(initialTime)

  const handleChange = (field: "hour" | "minute", value: number) => {
    const updatedTime = { ...time, [field]: value }
    setTime(updatedTime)
    onTimeChange(updatedTime)
  }

  return (
    <div className="flex space-x-2">
      <input
        type="number"
        value={time.hour}
        min={0}
        max={23}
        onChange={(e) => handleChange("hour", parseInt(e.target.value, 10))}
        className="w-12 p-1 text-center border rounded"
      />
      <span>:</span>
      <input
        type="number"
        value={time.minute}
        min={0}
        max={59}
        onChange={(e) => handleChange("minute", parseInt(e.target.value, 10))}
        className="w-12 p-1 text-center border rounded"
      />
    </div>
  )
}