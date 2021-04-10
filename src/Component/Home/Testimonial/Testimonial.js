import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Aliza from '../../../images/Aliza.png';
import Gomez from '../../../images/Gomez.png';
import Winson from '../../../images/Winson.png';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import './Testimonial.css';

const testimonialData= [
    {
        id:1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a ut doloremque, aperiam beatae neque est assumenda aliquid eveniet iusto cupiditate, ab earum debitis esse voluptas ',
        name:'Winson Harry',
        location:'California',
        img:Winson
    },
    {
        id:2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a ut doloremque, aperiam beatae neque est assumenda aliquid eveniet iusto cupiditate, ab earum debitis esse voluptas ',
        name:'Henry Gomez',
        location:'California',
        img:Gomez
    },
    {
        id:3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a ut doloremque, aperiam beatae neque est assumenda aliquid eveniet iusto cupiditate, ab earum debitis esse voluptas ',
        name:'Aliza Farari',
        location:'California',
        img:Aliza
    }
]

const Testimonial = () => {
    return (
        <Container className="mt-5 pt-5 testimonial">
            <h6 style={{color:"#17d2bd"}}>Testimonial</h6>
            <h1 className="title">What's Our Patients <br/> Says</h1>
                <Row className="mt-5">
                    {
                        testimonialData.map(testimonial => <SingleTestimonial  key={testimonial.id} testimonial={testimonial}/>)
                    }
                </Row>
        </Container>
    );
};

export default Testimonial;