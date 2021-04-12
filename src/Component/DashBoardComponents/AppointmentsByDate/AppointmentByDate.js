  
import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';


const AppointmentByDate = ({appointment}) => {
    return (
        <div>
        <h2 style={{color:"#17d2bd"}} className="text-center">Appointments</h2>
        {
            appointment.length ?
             <AppointmentShortList appointment={appointment} />
            :
            <div className="p-5">
                <h4 className="lead text-center">No Appointments for this Date</h4>
            </div>
        }
    </div>
        
    );
};

export default AppointmentByDate;