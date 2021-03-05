import React from 'react';
import ProductCard from '../components/ProductCard';
import SortBar from '../components/SortBar';

import data from '../data.js';

function RankingScreen(props) {

    const { vehicles } = data;

    return (
        <div className="ranking-container">
            <div className="ranking-and-sort-container">
                <div className="ranking-heading">
                    Rankings
                </div>
                <div className="sortBar-wrapper">
                    <SortBar />
                </div>
            </div>
            <div className="product-card-collection">
                {vehicles.map(vehicle => <ProductCard data={vehicle} />)}
            </div>
        </div>
    )
}

export default RankingScreen;