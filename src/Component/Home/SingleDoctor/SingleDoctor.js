import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleDoctor.css';


const SingleDoctor = ({doctor}) => {




    const {  name, email} = doctor
    return (
        <Col md={4} sm={6} className="doctor-card">
            <Card  className="text-center doctor-container">
            {
            doctor.image ? <img className="doctor-img"  src={`data:image/png;base64,${doctor.image.img}`}/>
            :
            <img  className="img-fluid mb-3 doctor-img" src={`https://doctors-portal-farhan.herokuapp.com/${doctor.img}`} alt=""/>
        }
                
                <h4 className="mt-3">{name}</h4>
                    <div className="d-flex justify-content-center border-0">
                    <p  style={{color:"#17d2bd"}} ><FontAwesomeIcon  icon={faPhoneAlt} /> </p>
                    <p className="ml-2">{email}</p>
                    </div>
            </Card>
        </Col>
    );
};

export default SingleDoctor;