import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Calendar, Bell, Settings, RefreshCw } from "lucide-react"

export const CustomButton = () => {
  const navigate = useNavigate()

  const handleClickRefresh = () => { console.log('Refrescando los datos') }
  const handleClickBell = () => { navigate('/notification') }
  const handleClickCalendar = () => { navigate('/calendar') }
  const handleClickConfig = () => { navigate('/config') }

  return (
    <>
        <Button className="flex items-center justify-center w-2/3 h-2/3" onClick={handleClickRefresh}>
          <RefreshCw style={{ width: "60%", height: "60%" }} />
        </Button>
        <Button className="flex items-center justify-center w-2/3 h-2/3" onClick={handleClickBell}>
          <Bell style={{ width: "60%", height: "60%" }} />
        </Button>
        <Button className="flex items-center justify-center w-2/3 h-2/3" onClick={handleClickCalendar}>
          <Calendar style={{ width: "60%", height: "60%" }} />
        </Button>
        <Button className="flex items-center justify-center w-2/3 h-2/3" onClick={handleClickConfig}>
          <Settings style={{ width: "60%", height: "60%" }} />
        </Button>
    </>
  )
}

export default CustomButton