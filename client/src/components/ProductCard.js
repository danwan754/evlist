import React from 'react';
import DetailsCard from './DetailsCard';
import ImageCard from './ImageCard';

function ProductCard(props) {

    const data = props.data;
    const flexDirection = props.direction;

    return (
        <div className={"product-card-container " + flexDirection}>
            <ImageCard image={data.image} />
            <DetailsCard data={data} />
        </div>
    )
}

export default ProductCard;