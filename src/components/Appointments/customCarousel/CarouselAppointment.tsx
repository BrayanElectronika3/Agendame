import { useState, useEffect } from "react"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "../../ui/carousel"

import { useAppointmentStore } from "@/store/appointmentStore"

import CardAppointment from "@/components/Appointments/customCard/CardAppointment"

const CarrouselAppointment = () => {
    const appointments = useAppointmentStore((state) => state.appointments)
    const currentSelection = useAppointmentStore((state) => state.currentSelection) 

    const [api, setApi] = useState<CarouselApi | undefined>()

    useEffect(() => {
        if (api && currentSelection) {
            const index = appointments.findIndex((item) => item.id === currentSelection.id);
            if (index !== -1) {
                api.scrollTo(index);
            } else {
                console.error("Error: No se encontro la cita con el id especificado en el carousel.");
            }
        }
    }, [api, currentSelection, appointments])

    return (
        <Carousel setApi={setApi} className="w-full mt-1">
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
