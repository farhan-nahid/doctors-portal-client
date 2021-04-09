import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleInfo.css';

const SingleInfo = ({info}) => {
    const {title, icon, description, background} = info
    return (
        <Col md={4} className="single-info">
            <div className={`d-flex justify-content-center align-items-center single-card info-${background} text-white`}>
                <div className="mr-3">
                    <FontAwesomeIcon className="info-icon" icon={icon} />
                </div>
                <div className="details">
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>
        </Col>
    );
};

export default SingleInfo;