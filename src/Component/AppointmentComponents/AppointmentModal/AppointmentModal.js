import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import './AppointmentModal.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root')

const AppointmentModal = ({subject, modalIsOpen, closeModal, selectedDate}) => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {

      data.service= subject;
      data.date = selectedDate;
      data.created= new Date();
      
        fetch('http://localhost:5000/addAppointment', {
          method:'POST',
          headers:{'Content-Type' : 'Application/json'},
          body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
          if(success){
            closeModal()
            alert('Appointment Booked Successfully')
          }
        })
    };

    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h5 style={{color:"#17d2bd"}} className="text-center">{subject}</h5>
          <p className="text-secondary text-center"> <small>On {selectedDate.toDateString()}</small> </p>

            <Form onSubmit={handleSubmit(onSubmit)} className="mt-5" >
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control  {...register("name", { required: true })} type="text" placeholder="Enter Your Name"  />
            {errors.name && <span className="text-danger">Enter Your Name</span>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Number</Form.Label>
            <Form.Control {...register("phone", { required: true })} type="number" placeholder="Enter Your Number" />
            {errors.phone && <span  className="text-danger">Enter Your Number</span>}
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control {...register("email",{ required: true })} type="email" placeholder="Enter Your Email" />
            {errors.email && <span  className="text-danger">Enter Your Email</span>}
            </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label >Age</Form.Label>
            <Form.Control {...register("age",{ required: true })} type="number" placeholder="Enter Your Age"/>
            {errors.age && <span  className="text-danger">Enter Your Age</span>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Gender</Form.Label>
            <Form.Control {...register("gender",{ required: true })} as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
            </Form.Control>
            {errors.gender && <span  className="text-danger">Enter Your Gender</span>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Weight</Form.Label>
            <Form.Control {...register("weight",{ required: true })} type="number" placeholder="Enter Your Weight" />
            {errors.weight && <span  className="text-danger">Enter Your Weight</span>}
            </Form.Group>
        </Form.Row>

        <Button variant="info" className="float-right btn-color" type="submit"> Submit </Button>
        </Form>

        </Modal>
        </div>
    );
};

export default AppointmentModal;