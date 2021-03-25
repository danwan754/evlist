import React, { useContext } from 'react';
import { DISPLAY_NONE } from '../constants/constants';
import { VehicleContext } from '../contexts/VehicleContext';
import VehicleSelector from './VehicleSelector';


function CompareModal(props) {

    const { listDispatch } = useContext(VehicleContext);

    const closeModal = () => {
        listDispatch({
            type: DISPLAY_NONE
        });
    }

    return (
        <div className="compare-modal-container">
            <div className={"compare-modal " + props.classProp}>
                <div className="modal-content">
                    <div className="modal-close-container">
                        <div 
                            className="modal-close-button"
                            onClick={closeModal}
                        >
                            &times;
                        </div>
                    </div>
                    <div className="modal-inner-content">
                        <VehicleSelector />
                        <div className="modal-divider"></div>
                        <VehicleSelector />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareModal;