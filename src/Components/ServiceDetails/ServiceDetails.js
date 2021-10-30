import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ServiceDetails.css';

const ServiceDetails = () => {
    // const key = useParams()
    // console.log(key)
    const {id} = useParams()

    const [service, setService] = useState({})

    useEffect(() => {
        const url = `https://gentle-river-15524.herokuapp.com/services/${id}`
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
                    <Link to="/orderform"><button>Place Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;


// Check the import of all your components. What to check? 1. Imported from useState and useEffect 'react'. Link, BrowserRouter from these 'react-router-dom'. If these are imported from any other mine, fix it