import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleDoctor.css';


const SingleDoctor = ({doctor}) => {




    const { image, name, email} = doctor
    console.log(image.img);
    return (
        <Col md={4} className="doctor-card">
            <Card  className="text-center doctor-container">
                <img className="m-auto" style={{height:'250px', width:'250px'}} src={image.img} alt=""/>
                
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