import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const url = `http://localhost:4000/services`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <div className="container my-5">
            <h1>Services section</h1>
            <div className="services my-5">
                {services.map(service => <Service
                key={service._id} 
                service={service}
                ></Service>)}
            </div>
        </div>
    );
};

export default Services;