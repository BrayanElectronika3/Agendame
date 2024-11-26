import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import HomePage from '@/page/homePage/HomePage'
import AppointmentPage from '@/page/appointmentsPage/AppointmentsPage'
import NotificationPage from '@/page/notificationPage/NotificationPage'
import ConfigPage from '@/page/configPage/ConfigPage'

// App router
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={ <HomePage/> } />
                <Route path='/calendar' element={ <AppointmentPage/> } />
                <Route path='/notification' element={ <NotificationPage/> } />
                <Route path='/config' element={ <ConfigPage/> } />
                <Route path='/404' element={<div>Pagina no encontrada</div>}/>
                <Route path="*" element={<Navigate to={'/404'}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter