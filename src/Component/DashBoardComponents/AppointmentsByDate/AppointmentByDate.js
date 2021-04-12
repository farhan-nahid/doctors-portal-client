import React from 'react';


const AppointmentByDate = ({appointment}) => {
    return (
        <div className="">
            <h1>appointment:{appointment.length}</h1>
            {
                appointment.map(appointment=> <li>{appointment.name}</li>)
            }
        </div>
        
    );
};

export default AppointmentByDate;