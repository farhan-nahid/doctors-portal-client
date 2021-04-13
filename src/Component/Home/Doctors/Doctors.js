//import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import loader from '../../../images/loader.gif';
import SingleDoctor from '../SingleDoctor/SingleDoctor';


const Doctors = () => {
    const [doctors, setDoctors] = useState([])
  
    
        useEffect(()=>{
            fetch('http://localhost:5000/doctors',{
                headers:{
                  'Content-Type':'Application/json'
                },
                body:JSON.stringify()
              })
            .then(res => res.json())
            .then(data => setDoctors(data))
        },[])
        console.log(doctors);
    return (
        <Container className="mt-5 pt-5 ">
            <h5 style={{color:"#17d2bd"}} className="text-center"> Our Doctors </h5>
                <Row className="mt-5">
                        {
                             doctors.length > 0 ?   doctors.map(doctor => <SingleDoctor  doctor={doctor} />):<img style={{width:'30%'}} className="text-center m-auto" src={loader} alt="..."/>   
                        }
                </Row>
        </Container>
    );
};

export default Doctors;