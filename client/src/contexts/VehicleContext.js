import { createContext, useReducer } from 'react';
import { SORT_HIGH, SORT_LOW, SORT_RANGE, VEHICLES_LOADING_FAIL, VEHICLES_LOADING_REQUEST, VEHICLES_LOADING_SUCCESS } from '../constants';

export const VehicleContext = createContext();

const initialState = {
    vehicles: [],
    loading: false,
    error: null,
    sort: SORT_LOW
};

// fetch/sort vehicle list
const vehiclesReducer = (state, action) => {
  switch(action.type) {
    case SORT_LOW:
      return { 
        ...state,
        sort: SORT_LOW,
        vehicles: state.vehicles.sort((a,b) => a.price - b.price)
      };
    case SORT_HIGH:
      return {
        ...state,
        sort: SORT_HIGH,
        vehicles: state.vehicles.sort((a,b) => b.price - a.price)
      };
    case SORT_RANGE:
      return {
        ...state,
        sort: SORT_RANGE,
        vehiciles: state.vehicles.sort((a,b) => b.range - a.range)
      };
    case VEHICLES_LOADING_REQUEST:
      return {
        ...state,
        loading: true
      }
    case VEHICLES_LOADING_SUCCESS:
      return {
        ...state,
        vehicles: action.payload,
        loading: false
      }
    case VEHICLES_LOADING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      throw new Error();
  }
}

export const VehiclesContextProvider = props => {
  const [state, dispatch] = useReducer(vehiclesReducer, initialState);

  return (
    <VehicleContext.Provider value={ [state, dispatch] }>
      {props.children}
    </VehicleContext.Provider>
  )
}