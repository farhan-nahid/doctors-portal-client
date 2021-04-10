import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import chair from '../../../images/Chair.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
            <Row style={{height:"600px"}} className="d-flex align-items-center">
                <Col md={4} className="offset-md-1">
                    <h1 className="title">Your New Smile <br/> Starts Here </h1>
                    <p style={{color:"#C3C3C3"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, autem dolorum reiciendis nihil labore nisi</p>
                    <Button  variant='info' className="btn-color">GET APPOINTMENT</Button>
                </Col>
                <Col md={6} className="offset-md-1">
                    <img src={chair} alt="" className="img-fluid"/>
                </Col>
            </Row>
    );
};

export default HeaderMain;