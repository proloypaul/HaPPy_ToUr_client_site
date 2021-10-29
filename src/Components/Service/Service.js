import React from 'react';

const Service = (props) => {
    const {_id, img, place} = props.service
    return (
        <div>
            <h1>Service section</h1>
            <div>
                <h2>{place}</h2>
                <img src={img} alt="Empty!"/>
            </div>
        </div>
    );
};

export default Service;