import React, { useContext, useEffect } from 'react';

import ProductCard from '../components/ProductCard';
import SortBar from '../components/SortBar';
import Footer from '../components/Footer';
import { VehicleContext } from '../contexts/VehicleContext';
import getVehicles from '../actions/getVehicles';
import CompareModal from '../components/CompareModal';
import { DISPLAY_BLOCK, TOGGLE_GRID, TOGGLE_LIST } from '../constants/constants';


function ListingScreen(props) {

    const { listState, listDispatch } = useContext(VehicleContext);
    const { vehicles, compare, toggle } = listState;

    useEffect(() => {
        if (!vehicles.length) { 
            getVehicles()(listDispatch);
        }
    }, []);

    const openModal = () => {
        listDispatch({
            type: DISPLAY_BLOCK
        });
    }
    const toggleToGrid = () => {
        listDispatch({
            type: TOGGLE_GRID
        });
    }
    const toggleToList = () => {
        listDispatch({
            type: TOGGLE_LIST
        });
    }

    return (
        <div className="listing-container">
            <div className="listing-and-sort-container">
                <div className="listing-heading">
                    Available vehicles in BC
                </div>
                <div className="sortBar-wrapper">
                    <SortBar />
                </div>
                <div className="compare-button-wrapper">
                    <button onClick={openModal}>Compare</button>
                </div>
                <div className="toggle-list-display-wrapper">
                    <button 
                        onClick={toggleToGrid}
                        className={toggle === TOGGLE_GRID ? 'toggle-active' : 'toggle-inactive'}
                    >
                        <img 
                            src="/icons/grid.png" 
                            alt="grid view"
                            className="grid-list-icon" />
                    </button>
                    <button 
                        onClick={toggleToList}
                        className={toggle === TOGGLE_LIST ? 'toggle-active' : 'toggle-inactive'}    
                    >
                        <img 
                            src="/icons/list.png" 
                            alt="list view"
                            className="grid-list-icon" />
                    </button>
                </div>
            </div>
            {listState.loading ? 
                'LOADING...'
                : 
                toggle === TOGGLE_LIST ? (
                    <div className="product-card-collection">
                        {vehicles.map(vehicle => 
                            <ProductCard 
                                key={vehicle._id} 
                                data={vehicle} 
                                direction={'flex-horizontal'} />
                        )}
                    </div>)
                    :
                    <div className="flex-listing-container">
                        {vehicles.map(vehicle => 
                            <ProductCard 
                                key={vehicle._id} 
                                data={vehicle} 
                                direction={'flex-vertical'} />
                        )}
                    </div>
            }
            <CompareModal classProp={compare} />
            <Footer link="https://electricvehicles.bchydro.com/buying/EV-models-in-BC" />
        </div>
    )
}

export default ListingScreen;