import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleService.css';

const SingleService = ({service}) => {
    const {title, img, description}=service
    
    return (
        <Col md={4} className="mt-5 pt-5 ">
           <div className="p-3">
           <img style={{height:'50px'}} src={img} alt=""/>
            <h6 className="mt-3 service-title">{title}</h6>
            <small style={{color:"#C3C3C3"}} className="mt-3">{description}</small>
           </div>
        </Col>
    );
};

export default SingleService;