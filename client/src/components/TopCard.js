import React from 'react';

function TopCard(props) {

    return (
        <div className="top-card-container">
            <div className="top-card-heading">
                {props.heading}
            </div>
            <div className="top-card-img">
                <img src={props.image} alt="featured car" />
            </div>
            <div className="top-card-description">
                {props.description}
            </div>
        </div>
    )
}

export default TopCard;