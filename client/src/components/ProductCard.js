import React from 'react';
import DetailsCard from './DetailsCard';

function ProductCard(props) {

    const data = props.data;
    return (
        <div className="product-card-container">
            <div className="card-img-wrapper">
                <img className="card-img" src={data.image} alt="car" />
            </div>
            <DetailsCard data={data} />
        </div>
    )
}

export default ProductCard;