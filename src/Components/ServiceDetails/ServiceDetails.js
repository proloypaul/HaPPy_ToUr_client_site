import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const key = useParams()
    console.log(key)
    return (
        <div>
            <h1>Service details here</h1>
        </div>
    );
};

export default ServiceDetails;