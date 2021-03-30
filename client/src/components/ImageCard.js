import React from 'react';

function ImageCard(props) {

    return (
        <div className="card-img-wrapper">
            <img className="card-img" src={props.image} alt="car" />
        </div>
    )
}

export default ImageCard;