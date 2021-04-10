import React from 'react';
import { Row } from 'react-bootstrap';
import Cavity from '../../../images/Cavity.png';
import fluoride from '../../../images/fluoride.png';
import Whitening from '../../../images/Whitening.png';
import SingleService from '../SingleService/SingleService';
import './Service.css';


const servicesData = [
    {
        id:1,
        img:fluoride,
        title:'Fluoride Treatment ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto.'
    },
     {
        id:2,
        img:Cavity,
        title:'Cavity Filling ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto.'
    },
     {
        id:3,
        img:Whitening,
        title:'Tooth Whitening ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto.'
    },
]

const Services = () => {
    return (
        <section className="container text-center mt-5">
            <div className="">
                <h5 style={{color:"#17d2bd"}}>Our Services</h5>
                <h1 className="title">Services We Provide</h1>
            </div>
            <div className="">
                <Row>
                    {
                        servicesData.map(service => <SingleService key={service.id} service={service} />)
                    }
                </Row>
            </div>
        </section>
    );
};

export default Services;