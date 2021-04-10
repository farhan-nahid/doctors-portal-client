import React from 'react';
import Appointment from '../Appointment/Appointment';
import DentalCare from '../DentalCare/DentalCare';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <DentalCare />
            <Appointment />
        </>
    );
};

export default Home;