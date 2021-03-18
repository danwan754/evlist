import React, { useContext, useEffect } from 'react';

import ProductCard from '../components/ProductCard';
import SortBar from '../components/SortBar';
import Footer from '../components/Footer';
import { VehicleContext } from '../contexts/VehicleContext';
import getVehicles from '../actions/getVehicles';


function ListingScreen(props) {

    const { listState, listDispatch } = useContext(VehicleContext);
    const { vehicles } = listState;

    useEffect(() => {
        if (!vehicles.length) { 
            getVehicles()(listDispatch);
        }
    }, []);

    return (
        <div className="listing-container">
            <div className="listing-and-sort-container">
                <div className="listing-heading">
                    Listings
                </div>
                <div className="sortBar-wrapper">
                    <SortBar />
                </div>
            </div>
            {listState.loading ? 
                'LOADING...'
                :
                <div className="product-card-collection">
                    {vehicles.map(vehicle => <ProductCard key={vehicle._id} data={vehicle} />)}
                </div>
            }
            <Footer link="https://electricvehicles.bchydro.com/buying/EV-models-in-BC" />
        </div>
    )
}

export default ListingScreen;