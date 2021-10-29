import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import './ServiceDetails.css';

const ServiceDetails = () => {
    // const key = useParams()
    // console.log(key)
    const {id} = useParams()

    const [service, setService] = useState({})

    useEffect(() => {
        const url = `http://localhost:4000/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])
    
    return (
        <div className="container my-5">
            <div className="serviceDetails-container">
                <div>
                    <img src={service.img} alt="Empty!"/>
                </div>
                <div className="content"> 
                    <h2>{service.place}, {service.country}</h2>
                    <p>{service.description}</p>
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;