import { createContext, useReducer } from 'react';
import { SORT_HIGH, SORT_LOW, SORT_RANGE, TOP_LOADING_FAIL, TOP_LOADING_REQUEST, TOP_LOADING_SUCCESS, VEHICLES_LOADING_FAIL, VEHICLES_LOADING_REQUEST, VEHICLES_LOADING_SUCCESS } from '../constants/constants';

export const VehicleContext = createContext();

const listInitialState = {
    vehicles: [],
    loading: false,
    error: null,
    sort: SORT_LOW
};
const topInitialState = {
  vehicles: [],
  loading: false,
  error: null
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

// top card reducer
const topCardReducer = (state, action) => {
  switch(action.type) {
    case TOP_LOADING_REQUEST:
      return {
        ...state,
        loading: true
      }
    case TOP_LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
        vehicles: action.payload
      }
    case TOP_LOADING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
  }
}

export const VehiclesContextProvider = props => {
  const [listState, listDispatch] = useReducer(vehiclesReducer, listInitialState);
  const [topState, topDispatch] = useReducer(topCardReducer, topInitialState);

  return (
    <VehicleContext.Provider value={ 
        {
          listState,
          topState,
          listDispatch,
          topDispatch
        }
    }>
      {props.children}
    </VehicleContext.Provider>
  )
}