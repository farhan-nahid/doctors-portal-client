import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import './SingleBooking.css';

const SingleBooking = ({booking, selectedDate}) => {
    const {subject, visitingHour, totalSpace } = booking

    const [modalIsOpen,setIsOpen] =useState(false);
    
    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal(){
      setIsOpen(false);
    }
    
    return (
        <Col md={4} className="booking-card mt-3">
            <Card className="text-center p-5 booking-container">
                <h5 style={{color:"#17d2bd"}}>{subject}</h5>
                <h6>{visitingHour}</h6>
                <small className="mb-3">{totalSpace}</small>
                <Button  variant='info' className="btn-color m-auto" onClick={openModal}>Book Appointment</Button>
                <AppointmentModal subject={subject}  modalIsOpen={modalIsOpen} closeModal={closeModal} selectedDate={selectedDate} />
            </Card>
        </Col>
    );
};

export default SingleBooking;