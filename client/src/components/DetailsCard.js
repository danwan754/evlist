import React from 'react';

function DetailsCard({ data }) {
    
    return (
        <div className="card-detail">
            <div className="card-make">{data.make}</div>
            <div className="card-model">{data.model}</div>
            <div className="card-range">{data.range} km</div>
            <div className="card-price-container">
                <div className="card-price">$ {(data.price - data.rebate).toLocaleString('en-US')}</div>
                {data.rebate > 0 ?
                    <div className="card-rebate-container">
                        <div className="card-rebate-tooltip">?
                            <span className="card-rebate-tooltip-text">${data.rebate} rebate</span>
                        </div>
                        <div className="card-msrp">MSRP: ${data.price.toLocaleString('en-US')}</div>
                    </div>
                    : ''
                }
            </div>
            <div className="card-website"><a href={data.website} target="_blank" rel="noreferrer">Manufacturer site</a></div>
        </div>
    )
}

export default DetailsCard;