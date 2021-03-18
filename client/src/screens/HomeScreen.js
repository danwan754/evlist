import React, { useContext, useEffect } from 'react';
import getTopVehicles from '../actions/getTopVehicles';
import { VehicleContext } from '../contexts/VehicleContext';

function HomeScreen(props) {

    const { topState, topDispatch } = useContext(VehicleContext);
    const { vehicles } = topState;

    useEffect(() => {
        if (!vehicles.length) {
            getTopVehicles()(topDispatch);
        }
    }, []);

    return (
        <div className="home-container">
            <div className="top-card-collection">
                {vehicles.map(car => (
                    <div key={car.heading} className="top-card-container">
                        <div className="top-card-heading">
                            {car.heading}
                        </div>
                        <div className="top-card-img-container">
                            <img className="top-card-img" src={car.image} alt="featured car" />
                        </div>
                        <div className="top-card-name">
                            {car.name}
                        </div>
                        <div className="top-card-feature">
                            {car.feature}
                        </div>
                        <div className="top-card-description">
                            {car.description}
                        </div>
                        <div className="top-card-product-link">
                            <a href={car.website} target='_blank' rel='noopener'>
                                Manufacturer's site
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="home-disclaimer">
                * Price after rebates are applied.
            </div>
        </div>
    );
}

export default HomeScreen;