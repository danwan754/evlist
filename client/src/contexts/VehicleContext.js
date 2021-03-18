import { createContext, useReducer } from 'react';
import { SORT_LOW } from '../constants/constants';
import { listReducer } from '../reducers/listReducer';
import { topReducer } from '../reducers/topReducer';


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

export const VehiclesContextProvider = props => {
  const [listState, listDispatch] = useReducer(listReducer, listInitialState);
  const [topState, topDispatch] = useReducer(topReducer, topInitialState);

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