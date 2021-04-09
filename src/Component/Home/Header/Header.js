import React from 'react';
import { Container } from 'react-bootstrap';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <NavBar />
                <Container>
                    <HeaderMain />
                    <BusinessInfo />
                </Container>
        </div>
    );
};

export default Header;