import CardAppointment from "@/components/Appointments/customCard/CardAppointment"
import { Appointment } from "@/store/appointmentStore"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../ui/carousel"

interface ResponsiveCarouselProps {
  appointments: Appointment[]
}

const CarrouselAppointment = ({ appointments }: ResponsiveCarouselProps) => {
    return (
        <Carousel className="w-full mt-1">
            <CarouselContent>
                {appointments.map((appointment, index) => (
                    <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4" key={index}>
                        <CardAppointment appointment={appointment}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2"/>
            <CarouselNext className="right-2"/>
        </Carousel>
    )
}

export default CarrouselAppointment
