import React, { useContext } from 'react';
import Axios from 'axios';

import ProductCard from '../components/ProductCard';
import SortBar from '../components/SortBar';
import Footer from '../components/Footer';
import { VehicleContext, VehiclesContextProvider } from '../contexts/VehicleContext';


function ListingScreen(props) {

    const {loading, data} = useContext(VehicleContext);
    const vehicles = data;
    // console.log(vehicles);

    // const getData = async () => { 
    //     await Axios.get('/api/list')
    //     .then(res => res.data)
    //     .then(data => console.log(data));
    // };
    // const data = getData();

    // const getData = async () => { 
    //     await Axios.get('/api/images/1')
    //     .then(data => console.log(data));
    // };
    // const data = getData();
    // console.log(data);

    return (
        <div className="listing-container">
            <div className="listing-and-sort-container">
                <div className="listing-heading">
                    Listings
                </div>
                <div className="sortBar-wrapper">
                    <SortBar />
                </div>
            </div>
            <div className="product-card-collection">
                {vehicles.map(vehicle => <ProductCard key={vehicle._id} data={vehicle} />)}
            </div>
            <Footer link="https://electricvehicles.bchydro.com/buying/EV-models-in-BC" />
        </div>
    )
}

export default ListingScreen;