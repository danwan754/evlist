import { createContext, useReducer } from 'react';
import { DISPLAY_NONE, SORT_LOW } from '../constants/constants';
import { listReducer } from '../reducers/listReducer';
import { topReducer } from '../reducers/topReducer';


export const VehicleContext = createContext();

const listInitialState = {
    vehicles: [],
    loading: false,
    error: null,
    sort: SORT_LOW,
    compare: DISPLAY_NONE
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