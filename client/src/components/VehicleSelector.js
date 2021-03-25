import React, { useContext, useEffect, useState } from 'react';
import { VehicleContext } from '../contexts/VehicleContext';
import DetailsCard from './DetailsCard';

function VehicleSelector(props) {

    const { listState: { vehicles } } = useContext(VehicleContext);

    const [selected, setSelected] = useState('');

    const updateSelected = (id) => {
        const vehicle = vehicles.find(car => car._id === id);
        setSelected(vehicle);
    }

    const getCarName = (id) => {
        if (id) {
            const car = vehicles.find(car => car._id === id);
            const carName = car.make + ' - ' + car.model;
            return carName;
        }
    }
    const getCarID = (carName) => {
        const [make, model] = carName.split(' - ');
        console.log(carName);
        console.log(carName.split(' - '));
        const vehicle = vehicles.find(car => car.make === make && car.model === model);
        return vehicle._id;
    }
    console.log(getCarName(selected._id));

    return (
        <div className="vehicle-selector-container">
            <select 
                name="vehicleSelector"
                id="vehicleSelector"
                className="vehicle-selector"
                defaultValue={"default"}
                onChange={(e) => updateSelected(e.target.value)}
            >
                <option value="default" disabled>-- Select vehicle --</option>
                {vehicles.map(vehicle => (
                    <option
                        key={vehicle._id}
                        value={vehicle._id}
                    >
                        {getCarName(vehicle._id)}
                    </option>
                ))}
            </select>
            {selected ? (
                <div className="vehicle-selector-card">
                    <div className="vehicle-selector-image-container">
                        <img 
                            src={selected.image} 
                            alt='car' 
                            _target='blank' 
                            rel='noreferrer'
                            className="vehicle-selector-img" />
                    </div>
                    <DetailsCard data={selected} />
                </div>    
                )    
                : ''
            }
        </div>
    )
}

export default VehicleSelector;