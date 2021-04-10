import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleTestimonial.css';

const SingleTestimonial = ({testimonial}) => {
    const {description, name, location, img}=testimonial
    return (
        <Col className="testimonial-card">
            <Card className="testimonial-container ">
            <p>{description}</p>
            <div className="d-flex mt-5">
                <div className="">
                     <img src={img} alt=""/>
                </div>
                <div className="ml-3">
                    <h6 style={{color:"#17d2bd"}}>{name}</h6>
                    <p>{location}</p>
                </div>
            </div>
            </Card>
        </Col>
    );
};

export default SingleTestimonial;