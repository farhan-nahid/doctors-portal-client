import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../SharedComponents/Footer/Footer';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import AppointmentMain from '../AppointmentMain/AppointmentMain';
import BookAppointment from '../BookAppointment/BookAppointment';
import './Appointment.css';

const Appointment = () => {
    const [selectedDate, setSelectedSate] = useState(new Date())

    const handleDateChange = date =>{
        setSelectedSate(date);
    }
    
    return (
        <>
        <div className="appointment-background">
            <NavBar  />
            <AppointmentMain handleDateChange={handleDateChange}/>
          </div>
            <Container>
                <BookAppointment selectedDate={selectedDate} />
            </Container> 
          <Footer />
        </>
    );
};

export default Appointment;