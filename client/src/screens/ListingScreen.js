import React from 'react';
import ProductCard from '../components/ProductCard';
import SortBar from '../components/SortBar';
import Footer from '../components/Footer';


import data from '../data/data.js';

function ListingScreen(props) {

    const { vehicles } = data;

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
            <div className="product-card-collection">
                {vehicles.map(vehicle => <ProductCard key={vehicle._id} data={vehicle} />)}
            </div>
            <Footer link="https://electricvehicles.bchydro.com/buying/EV-models-in-BC" />
        </div>
    )
}

export default ListingScreen;