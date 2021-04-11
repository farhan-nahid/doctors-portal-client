import React from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <DentalCare />
            <Appointment />
            <Testimonial />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;