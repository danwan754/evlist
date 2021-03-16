import { createContext, useEffect, useReducer, useState } from 'react';
import Axios from 'axios';

export const VehicleContext = createContext();

// const initialState = {
//     vehicles = [],
//     isLoading: false,
//     error: null
// };


// const reducer = async (state, action) => {
//   switch(action.type) {
//     case(VEHICLES_DISPLAY):

//       await getVehicles();
//     default:
//       throw new Error();
//   }
// }

const getVehicles = () => {
  return Axios.get('/api/list')
  .then(res => res.data);
};

export const VehiclesContextProvider = props => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const newData = await getVehicles();
    setData(newData);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <VehicleContext.Provider value={{loading, data}}>
        {props.children}
    </VehicleContext.Provider>
  )
}