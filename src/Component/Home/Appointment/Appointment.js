import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import doctor from '../../../images/doctor.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <Container className="mt-5 pt-5">
            <Row className="text-white  appointment-container">
                <Col md={6}>
                    <img className="img-fluid" src={doctor} alt=""/>
                </Col>
                <Col md={6} className="pt-5 pb-5">
                    <h5  style={{color:"#17d2bd"}}>Appointment</h5>
                    <h1>Make An Appointment <br/> Today</h1>
                    <p>It is a long established fact that a reader will be distracted by the redable content of the page when looking at its</p>
                    <Button  variant='info' className="btn-color mt-3">Learn More</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Appointment;