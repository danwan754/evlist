import React, { useContext, useState } from 'react';
import { VehicleContext } from '../contexts/VehicleContext';
import ProductCard from './ProductCard';

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
                    <ProductCard
                        data={selected} 
                        direction={'flex-vertical'} />
                </div>    
                )    
                : ''
            }
        </div>
    )
}

export default VehicleSelector;