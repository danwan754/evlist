import React from 'react';
import { Link } from 'react-router-dom';

import data from '../front-data';

const { topCardData } = data;

function HomeScreen(props) {
    return (
        <div className="home-container">
            <div className="top-card-collection">
                {topCardData.map(car => (
                    <div key={car.heading} className="top-card-container">
                        <div className="top-card-heading">
                            {car.heading}
                        </div>
                        <div className="top-card-img-container">
                            <img className="top-card-img" src={car.image} alt="featured car" />
                        </div>
                        <div className="top-card-feature">
                                {car.feature}
                        </div>
                        <div className="top-card-description">
                            {car.description}
                        </div>
                        <div className="top-card-product-link">
                            <Link to={'/product/' + car._id}>
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeScreen;