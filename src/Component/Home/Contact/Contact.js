import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <Container className="mt-5 pt-5 pb-5 text-center contact-container">
            <h5 style={{color:"#17d2bd"}}>Contact Us</h5>
            <h1 className="title text-white">Always Contact With Us</h1>
            <Form className="contact-form mt-5">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email Address*" required/>
                </Form.Group>

                <Form.Group controlId="formBasicSubject">
                    <Form.Control type="text" placeholder="Subject*" required />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea">
                    <Form.Control as="textarea" rows={10} placeholder="Your Message*" required/>
                </Form.Group>

                <Button variant="info" className="btn-color mt-3" type="submit"> Submit </Button>
            </Form>
        </Container>
    );
};

export default Contact;