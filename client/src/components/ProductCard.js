import React from 'react';

function ProductCard(props) {


    const data = props.data;
    return (
        <div className="product-card-container">
            <div className="card-img-wrapper">
                <img className="card-img" src={data.image} alt="car" />
            </div>
            <div className="card-detail">
                <div className="card-model">{data.model}</div>
                <div className="card-make">{data.make}</div>
                <div className="card-range">{data.range}</div>
                <div className="card-performance">{data.performance}</div>
                <div className="card-price">{data.price}</div>
                <div className="card-rating">{data.rating}</div>
            </div>
        </div>
    )
}

export default ProductCard;