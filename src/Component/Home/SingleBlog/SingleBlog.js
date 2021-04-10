import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleBlog.css';

const SingleBlog = ({blog}) => {
    const {img, name, date, title, description} = blog
    
    return (
        <Col md={4} className="blog-card">
            <Card className="p-3 blog-container">
                <div className="d-flex justify-content-center">
                    <div className="">
                        <img src={img} alt=""/>
                    </div>
                    <div className="ml-3 mt-3">
                        <h6 style={{color:"#17d2bd"}}>{name}</h6>
                        <small>{date}</small>
                    </div>
                </div >
                    <h5 className="title mt-5">{title}</h5>
                    <p className="mt-4"  style={{color:"#C3C3C3",fontWeight:"600"}}>{description}</p>
            </Card>
        </Col>
    );
};

export default SingleBlog;