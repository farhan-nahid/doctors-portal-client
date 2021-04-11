import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import doctor from '../../../images/doctor.png';
import SingleDoctor from '../SingleDoctor/SingleDoctor';

const doctorsData =[
    {
        id:1,
        pic:doctor,
        name:'Dr. Caudi',
        number:'+61 452 357 963',
        icon:faPhoneAlt
    },
    {
        id:2,
        pic:doctor,
        name:'Dr. Sinthia',
        number:'+61 753 159 258',
        icon:faPhoneAlt
    },
    {
        id:3,
        pic:doctor,
        name:'Dr. Henry',
        number:'+61 624 729 215',
        icon:faPhoneAlt
    },
]

const Doctors = () => {
    return (
        <Container className="mt-5 pt-5 ">
            <h5 style={{color:"#17d2bd"}} className="text-center"> Our Doctors </h5>
                <Row className="mt-5">
                    {
                        doctorsData.map(doctor => <SingleDoctor key={doctor.id} doctor={doctor} />)
                    }
                </Row>
        </Container>
    );
};

export default Doctors;