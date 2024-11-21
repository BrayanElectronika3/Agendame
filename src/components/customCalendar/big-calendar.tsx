import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

import './index.css'

moment.locale('es')
moment.updateLocale('es', {
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
  weekdaysShort: 'Dom_Lun_Mar_Mié_Jue_Vie_Sáb'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
});

// interface Props {
//     title: string;
//     start: Date;
//     end: Date;
//     allDay: boolean;
//     description: string;
//     direction: string;
// }

interface BigCalendarProps {
    // events: Props[];
    events: EventCalendar[];
    onEventSelect: (event: EventCalendar) => void;
}

interface eventProps {
  title: string;
}

const localizer = momentLocalizer(moment)

const components = {
  event: (props: eventProps) => {
    return <div>
      <p className='text-sm'>{props.title}</p>
    </div>
  }
}

const messages = {
  allDay: "Todo el día",
  previous: "Anterior",
  next: "Siguiente",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "Sin eventos"
}

export interface EventCalendar {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  description: string;
  direction: string;
  selectItem: boolean;
}

const BigCalendar = ({ events, onEventSelect }: BigCalendarProps) => {
  
  const handleSelectEvent = (event: EventCalendar) => {
    if (onEventSelect) {
      onEventSelect(event)
    }
  }

  return (
    <div style={{ height: 500, color: 'black', backgroundColor: '#ffffff', width: '100%'}}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        // Seleccionar que pestañas se ven de seleccion
        views={['month', 'week', 'day']}
        // Indicar que pestaña se muestra en el momento que se carga el componente
        defaultView='month'
        // Indicar el valor actual de la pestaña, se puede cambiar dinamicamente
        // view={'month'}
        // Indicar la fecha que se inicializa por defecto, en este caso la fecha actual
        // date={new Date()}
        // Indicar si se muestra el tollbar o no
        toolbar={true}
        // Indicar como van a ser los event que son las citas programadas que se muestran sobre el calendario
        components={components}
        // Configurar los mensajes personalizados
        messages={messages}
        // Manejo de eventos
        onSelectEvent={handleSelectEvent}
      />
    </div>
  )
}

export default BigCalendar