import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import dental from '../../../images/dental.png';
import './DentalCare.css';

const DentalCare = () => {
    return (
        <Container>
            <Row className="mt-5 pt-5 d-flex align-items-center">
                <Col md={6}>
                    <img className="img-fluid" src={dental} alt=""/>
                 </Col>
                 <Col md={6}>
                    <h1 className="title">Exceptional Dental <br/> Care, On Your Team</h1>
                    <p  style={{color:"#C3C3C3",wordSpacing:"5px",fontWeight:"600"}} className="mt-3 dental-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque omnis aut temporibus molestiae repellendus dolore quae ex asperiores, perferendis velit sequi, eius deserunt accusantium non ab sunt! Quia explicabo labore dolorum pariatur, doloremque eius molestias ullam corrupti. Cum ut ipsam animi laudantium culpa eum aliquid est, amet repudiandae neque in tempore ex natus placeat. Nemo laboriosam odio, ab error culpa fugit ut cupiditate veritatis excepturi nesciunt exercitationem expedita, est ipsum consequuntur minima nam repellat maiores quaerat inventore iste nihil, at ipsa officia. Unde, asperiores. Ab, labore optio voluptates voluptatibus sunt delectus laboriosam, maxime praesentium inventore quibusdam voluptas velit incidunt!</p>
                    <Button  variant='info' className="btn-color mt-3">Learn More</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default DentalCare;