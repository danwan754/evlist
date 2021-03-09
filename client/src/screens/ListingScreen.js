import React from 'react';
import ProductCard from '../components/ProductCard';
import SortBar from '../components/SortBar';

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
        </div>
    )
}

export default ListingScreen;