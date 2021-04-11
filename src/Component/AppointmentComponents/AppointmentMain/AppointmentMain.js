import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/Chair.png';
import './Appointmentmain.css';

const AppointmentMain = ({handleDateChange}) => {
    return (
            <Row style={{height:"600px"}} className="d-flex align-items-center mt-5 mb-5">
                <Col md={4} className="offset-md-1">
                    <h1 className="title mb-5"> Appointment </h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                    
                </Col>
                <Col md={5} className="offset-md-1">
                    <img src={chair} alt="" className="img-fluid"/>
                </Col>
            </Row>
    );
};

export default AppointmentMain;