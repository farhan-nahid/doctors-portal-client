import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../DashBoardComponents/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)
    console.log(info);
    console.log(file);

    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name]= e.target.value
        setInfo(newInfo)
    }

    const handleFileChange = e =>{
        const newFile = e.target.files[0]
        setFile(newFile)
    }

 const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('myEmail', info.email)
        formData.append('myName', info.name)
        formData.append('myFile', file)
      
        fetch('http://localhost:5000/addADoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
     }

    return (
        <section className="container-fluid row">
        <Sidebar />
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 style={{color:"#17d2bd"}}>Add a Doctor</h5>
                <Form className="mt-5" onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address : </Form.Label>
                        <Form.Control onBlur={handleBlur} type="email" name='email' placeholder="Enter Email Address" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name : </Form.Label>
                        <Form.Control onBlur={handleBlur} type="text" name='name' placeholder="Enter Your Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicFile">
                        <Form.Label>Upload A Image : </Form.Label>
                        <Form.Control onChange={handleFileChange} type="file" placeholder="picture" />
                    </Form.Group>
                    <Button variant="info" type="submit" className="float-right btn-color"> Submit</Button>
            </Form>
        </div>
    </section>
    );
};

export default AddDoctor;