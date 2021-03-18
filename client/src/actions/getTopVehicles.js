import Axios from 'axios';
import { TOP_LOADING_FAIL, TOP_LOADING_REQUEST, TOP_LOADING_SUCCESS } from "../constants/constants"

export default () => (dispatch) => {
    dispatch({
        type: TOP_LOADING_REQUEST
    });
    Axios.get('/api/top')
    .then(res => {
        dispatch({
            type: TOP_LOADING_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: TOP_LOADING_FAIL,
            error: err.message
        });
    });
}