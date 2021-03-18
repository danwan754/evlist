import React, { useContext } from 'react';
import { SORT_HIGH, SORT_LOW, SORT_RANGE } from '../constants/constants';
import { VehicleContext } from '../contexts/VehicleContext';


function SortBar(props) {

    const { listState, listDispatch } = useContext(VehicleContext);

    const updateSort = () => {
        listDispatch({
            type: document.getElementById('sortSelect').value
        });
    }

    return (
        <div>
            <div className="sortBar-container">
                Sort by:
                <select 
                    name="sortBar"
                    className="sortBar-select" 
                    id="sortSelect" 
                    value={listState.sort} 
                    onChange={updateSort}
                >
                    <option value={SORT_LOW}>low price</option>
                    <option value={SORT_HIGH}>high price</option>
                    <option value={SORT_RANGE}>range</option>
                </select>
            </div>
        </div>
    )
}

export default SortBar;