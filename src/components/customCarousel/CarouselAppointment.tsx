import CardAppointment from "@/components/customCardAppointment/CardAppointment"
import { Appointment } from "@/store/appointmentStore"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel"

interface ResponsiveCarouselProps {
  appointments: Appointment[];
}

const CarrouselAppointment = ({ appointments }: ResponsiveCarouselProps) => {
    return (
        <Carousel className="w-full overflow-hidden mt-5">
            <CarouselContent className="-ml-1 flex w-full">
                {appointments.map((appointment, index) => (
                    <CarouselItem className="flex-shrink-0 pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4" key={index}>
                        <CardAppointment appointment={appointment} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md"/>
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md"/>
        </Carousel>
    )
}

export default CarrouselAppointment
