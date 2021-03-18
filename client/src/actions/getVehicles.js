import Axios from 'axios';
import { VEHICLES_LOADING_FAIL, VEHICLES_LOADING_REQUEST, VEHICLES_LOADING_SUCCESS } from '../constants';

export default () => (dispatch) => {
    dispatch({
        type: VEHICLES_LOADING_REQUEST
    });
    Axios.get('/api/list')
    .then(res => {
        dispatch({
            type: VEHICLES_LOADING_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: VEHICLES_LOADING_FAIL,
            error: err.message
        });
    });
}