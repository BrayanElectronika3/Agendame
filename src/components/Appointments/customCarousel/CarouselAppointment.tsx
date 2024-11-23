import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../ui/carousel"

import { useAppointmentStore } from "@/store/appointmentStore"

import CardAppointment from "@/components/Appointments/customCard/CardAppointment"

const CarrouselAppointment = () => {
    const appointments = useAppointmentStore((state) => state.appointments);

    return (
        <Carousel className="w-full mt-1">
            <CarouselContent>
                {appointments.map((appointment) => (
                    <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4" key={appointment.title}>
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
