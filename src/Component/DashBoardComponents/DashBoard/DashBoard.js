import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentByDate from '../AppointmentsByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedDate, setSelectedSate] = useState(new Date())
    const [appointment, setAppointment]= useState([])
    
    const handleDateChange = date =>{
        setSelectedSate(date);
    }
   
    useEffect( ()=>{
        fetch('https://doctors-portal-farhan.herokuapp.com/appointmentById', {
            method : 'POST',
            headers:{'Content-Type' : 'Application/json'},
            body :JSON.stringify({date:selectedDate, email : loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAppointment(data))
      }, [selectedDate,loggedInUser.email])

    return (
        <section  style={{background:'#F4FDFB',height:'100%'}}>
            <div className="container-fluid">
                <Row>
                    <Col md={2}>
                    <Sidebar />
                    </Col>
                    <Col md={4}>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                    </Col>
                    <Col md={5} className="offset-md-1">
                    <AppointmentByDate appointment={appointment} />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default DashBoard;