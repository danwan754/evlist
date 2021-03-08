import React from 'react';


import data from '../list_data';
const vehicle = data.vehicles[0];


function ProductScreen(props) {

    return (
        <div className="product-screen-container">
            <div className="product-image-container">
                <img className="product-image" src={vehicle.image}></img>
            </div>
            <div className="product-details-container">
                
            </div>
        </div>
    )
}

export default ProductScreen;