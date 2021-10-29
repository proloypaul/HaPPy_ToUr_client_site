import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id, img, place} = props.service
    return (
        <div className="service-container my-5">
            <div className="service">
                <h2>{place}</h2>
                <img src={img} alt="Empty!"/>
                <div><Link to={`/serviceDetails/${_id}`}><button>Book Now</button></Link></div>
            </div>
        </div>
    );
};

export default Service;