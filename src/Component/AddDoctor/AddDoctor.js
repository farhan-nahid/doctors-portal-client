import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../DashBoardComponents/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    return (
        <section className="container-fluid row">
        <Sidebar />
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 style={{color:"#17d2bd"}}>Add a Doctor</h5>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicFile">
                        <Form.Label>Upload</Form.Label>
                        <Form.Control type="file" placeholder="picture" />
                    </Form.Group>
                    <Button variant="info" type="submit"> Submit</Button>
            </Form>
        </div>
    </section>
    );
};

export default AddDoctor;