import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand as={Link} to='/'><strong>Doctor's Portal</strong></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto nav-items">
                <Nav.Link  as={Link} to='/home' className="mr-5">Home</Nav.Link>
                <Nav.Link as={Link} to="/dashboard" className="mr-5">Dashboard</Nav.Link>
                <Nav.Link href="#home" className="mr-5">Dental Services</Nav.Link>
                <Nav.Link href="#link" className="mr-5 ">Review</Nav.Link>
                <Nav.Link href="#home" className="mr-5 ">Blog</Nav.Link>
                <Nav.Link href="#link" className="mr-5 ">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;