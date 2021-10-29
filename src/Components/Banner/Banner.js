import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div  className="added-banner">
            <div className="banner-section">
                <div>
                    <h1>Search to find your tour</h1>
                    <input type="text" placeholder="type here" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;