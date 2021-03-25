import React, { useContext, useEffect, useState } from 'react';

import ProductCard from '../components/ProductCard';
import SortBar from '../components/SortBar';
import Footer from '../components/Footer';
import { VehicleContext } from '../contexts/VehicleContext';
import getVehicles from '../actions/getVehicles';
import CompareModal from '../components/CompareModal';
import { DISPLAY_BLOCK } from '../constants/constants';


function ListingScreen(props) {

    const { listState, listDispatch } = useContext(VehicleContext);
    const { vehicles, compare } = listState;

    useEffect(() => {
        if (!vehicles.length) { 
            getVehicles()(listDispatch);
        }
    }, []);

    const openModal = () => {
        listDispatch({
            type: DISPLAY_BLOCK
        });
    }

    return (
        <div className="listing-container">
            <div className="listing-and-sort-container">
                <div className="listing-heading">
                    Available vehicles in BC
                </div>
                <div className="sortBar-wrapper">
                    <SortBar />
                </div>
                <div className="compare-button-wrapper">
                    <button onClick={openModal}>Compare</button>
                </div>
            </div>
            {listState.loading ? 
                'LOADING...'
                :
                <div className="product-card-collection">
                    {vehicles.map(vehicle => <ProductCard key={vehicle._id} data={vehicle} />)}
                </div>
            }
            <CompareModal classProp={compare} />
            <Footer link="https://electricvehicles.bchydro.com/buying/EV-models-in-BC" />
        </div>
    )
}

export default ListingScreen;