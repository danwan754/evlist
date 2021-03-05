import React from 'react';


function SortBar(props) {

    return (
        <div>
            <div className="sortBar-container">
                Sort by:
                <select name="sortBar" className="sortBar-select">
                    <option value="lowest">low price</option>
                    <option value="highest">high price</option>
                    <option value="range">range</option>
                    <option value="performance">performance</option>
                </select>
            </div>
        </div>
    )
}

export default SortBar;