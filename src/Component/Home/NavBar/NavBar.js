import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar expand="lg">
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home" className="mr-5">Home</Nav.Link>
                <Nav.Link href="#link" className="mr-5">About</Nav.Link>
                <Nav.Link href="#home" className="mr-5">Dental Services</Nav.Link>
                <Nav.Link href="#link" className="mr-5 text-white">Review</Nav.Link>
                <Nav.Link href="#home" className="mr-5 text-white">Blog</Nav.Link>
                <Nav.Link href="#link" className="mr-5 text-white">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;