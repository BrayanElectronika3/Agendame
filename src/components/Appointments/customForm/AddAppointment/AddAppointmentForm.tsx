import { ReactNode } from "react"
import { useForm, Controller } from "react-hook-form"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DateTimePicker } from "@/components/ui/dateTime-picker-v2"

interface FormFieldProps {
    label: string
    htmlFor: string
    children: ReactNode
    error?: { message?: string };
}

const FormField = ({ label, htmlFor, children, error }: FormFieldProps) => {
    return (
        <div className="grid gap-2 sm:grid-cols-4 sm:items-center sm:gap-4">
            <Label
                htmlFor={htmlFor}
                className="text-left sm:text-right font-medium text-sm"
            >
                {label}
            </Label>
            <div className="sm:col-span-3">
                {children}
                {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
            </div>
        </div>
    )
}

type FormData = {
    name: string
    description: string
    startDatetime: Date
    endDatetime: Date
    location: string
}

const AddAppointmentForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log("Datos del formulario:", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            {/* Nombre */}
            <FormField 
                label="Nombre:" 
                htmlFor="name" 
                error={errors.name}
            >
                <Input 
                    id="name" 
                    defaultValue="" 
                    {...register("name", { required: "El nombre es obligatorio" })}
                />
            </FormField>
            {/* Descripción */}
            <FormField 
                label="Descripción:" 
                htmlFor="description"
                error={errors.description}
            >
                <Input 
                    id="description" 
                    defaultValue="" 
                    {...register("description", { required: "La descripción es obligatoria" })}
                />
            </FormField>
            {/* Fecha y hora inicial */}
            <FormField 
                label="Fecha y hora inicial:" 
                htmlFor="start-datetime"
                error={errors.startDatetime}
            >
                <Controller
                    name="startDatetime"
                    control={control}
                    rules={{ required: "La fecha y hora inicial es obligatoria" }}
                    render={({ field }) => <DateTimePicker {...field} />}
                />
            </FormField>
            {/* Fecha y hora final */}
            <FormField 
                label="Fecha y hora final:" 
                htmlFor="end-datetime"
                error={errors.endDatetime}
            >
                <Controller
                    name="endDatetime"
                    control={control}
                    rules={{ required: "La fecha y hora final es obligatoria" }}
                    render={({ field }) => <DateTimePicker {...field} />}
                />
            </FormField>
            {/* Sede */}
            <FormField label="Sede:" htmlFor="location" error={errors.location}>
                <Controller
                    name="location"
                    control={control}
                    rules={{ required: "La sede es obligatoria" }}
                    render={({ field }) => (
                        <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value}
                        >
                        <SelectTrigger>
                            <SelectValue placeholder="Seleccione una sede" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectItem value="sede1">Sede 1</SelectItem>
                            <SelectItem value="sede2">Sede 2</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                    )}
                />
            </FormField>
            <div className="flex justify-end">
                <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                Guardar
                </button>
            </div>
        </form>
    )
}

export default AddAppointmentForm