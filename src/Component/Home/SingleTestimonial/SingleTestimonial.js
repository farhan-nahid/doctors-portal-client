import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleTestimonial.css';

const SingleTestimonial = ({testimonial}) => {
    const {description, name, location, img}=testimonial
    
    return (
        <Col className="testimonial-card">
            <Card className="testimonial-container ">
            <p  style={{color:"#C3C3C3",fontWeight:"600"}}>{description}</p>
            <div className="d-flex justify-content-center mt-5">
                <div className="">
                     <img src={img} alt=""/>
                </div>
                <div className="mt-3 ml-3">
                    <h6 style={{color:"#17d2bd"}}>{name}</h6>
                    <small className="text-secondary mt-3">{location}</small>
                </div>
            </div>
            </Card>
        </Col>
    );
};

export default SingleTestimonial;