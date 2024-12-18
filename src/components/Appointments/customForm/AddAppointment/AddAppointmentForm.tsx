import { ReactNode } from "react"
import { useForm, Controller } from "react-hook-form"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DateTimePicker } from "@/components/ui/dateTime-picker-v2"
import { Button } from "@/components/ui/button"

import { Appointment, useAppointmentStore } from "@/store/appointmentStore"
import { useCustomSheet } from "@/components/Global/customSheet/useCustomSheet"

interface FormFieldProps {
    label: string
    htmlFor: string
    children: ReactNode
    error?: { message?: string }
}

const FormField = ({ label, htmlFor, children, error }: FormFieldProps) => {
    return (
        <div className="grid gap-2 sm:grid-cols-4 sm:items-center">
            <Label htmlFor={htmlFor} className="text-left sm:text-right font-medium text-sm">
                {label}
            </Label>
            <div className="sm:col-span-3">
                {children}
                {error && <p className="absolute text-red-500 text-xs mt-0.5">{error.message}</p>}
            </div>
        </div>
    )
}

type FormData = {
    title: string
    description: string
    start: Date
    end: Date
    headquarters: string
}

const AddAppointmentForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>()
    const addAppointment = useAppointmentStore((state) => state.addAppointment)
    const { closeSheet } = useCustomSheet()

    const onSubmit = (data: FormData) => {
        const newAppointment: Appointment = {
            id: 5,
            title: data.title,
            start: data.start,
            end: data.end,
            allDay: false,
            description: data.description,
            headquarters: data.headquarters,
            selectItem: false
        }
        addAppointment(newAppointment)
        closeSheet()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 py-4">
            {/* Nombre */}
            <FormField label="Nombre:" htmlFor="title" error={errors.title}>
                <Input 
                    id="title" 
                    defaultValue="" 
                    {...register("title", { required: "El nombre es obligatorio" })} 
                />
            </FormField>
            {/* Descripción */}
            <FormField label="Descripción:" htmlFor="description" error={errors.description}>
                <Input 
                    id="description" 
                    defaultValue="" 
                    {...register("description", { required: "La descripción es obligatoria" })} 
                />
            </FormField>
            {/* Fecha y hora inicial */}
            <FormField label="Fecha y hora inicial:" htmlFor="start" error={errors.start} >
                <Controller
                    name="start"
                    control={control}
                    rules={{ required: "La fecha y hora inicial es obligatoria" }}
                    render={({ field }) => <DateTimePicker {...field} />}
                />
            </FormField>
            {/* Fecha y hora final */}
            <FormField label="Fecha y hora final:" htmlFor="end" error={errors.end} >
                <Controller
                    name="end"
                    control={control}
                    rules={{ required: "La fecha y hora final es obligatoria" }}
                    render={({ field }) => <DateTimePicker {...field} />}
                />
            </FormField>
            {/* Sede */}
            <FormField label="Sede:" htmlFor="headquarters" error={errors.headquarters}>
                <Controller
                    name="headquarters"
                    control={control}
                    rules={{ required: "La sede es obligatoria" }}
                    render={({ field }) => (
                        <Select onValueChange={(value) => field.onChange(value)} value={field.value}>
                            <SelectTrigger>
                                <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Bogota">Bogota</SelectItem>
                                    <SelectItem value="Cucuta">Cucuta</SelectItem>
                                    <SelectItem value="Tolima">Tolima</SelectItem>
                                    <SelectItem value="Barranquilla">Barranquilla</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    )}
                />
            </FormField>
            {/* Button submit */}
            <Button type="submit">Guardar</Button>
        </form>
    )
}

export default AddAppointmentForm