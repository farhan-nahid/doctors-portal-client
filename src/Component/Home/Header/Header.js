import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
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