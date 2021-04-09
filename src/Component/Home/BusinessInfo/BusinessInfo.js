import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Row } from 'react-bootstrap';
import SingleInfo from '../SingleInfo/SingleInfo';

const allBusinessInfo = [
    {
        id:1,
        icon:faClock,
        title:'Opening Hours',
        description:' Lorem ipsum dolor sit amet adipisicing.',
        background:'primary'
    }, 

    {
        id:2,
        icon:faMapMarkerAlt,
        title:'Visit Our Location',
        description:' Brooklyn, NY 10036 United State',
        background:'dark'
    }, 

    {
        id:3,
        icon:faPhoneAlt,
        title:'Contact Us Now',
        description:'+000  123 456789',
        background:'primary'
    }

]

const BusinessInfo = () => {
    return (
        <Row>
            {
                 allBusinessInfo.map(info=> <SingleInfo key={info.id} info={info} />)
            }
        </Row>
    );
};

export default BusinessInfo;