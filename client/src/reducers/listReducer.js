import { DISPLAY_BLOCK, DISPLAY_NONE, SORT_HIGH, SORT_LOW, SORT_RANGE, VEHICLES_LOADING_FAIL, VEHICLES_LOADING_REQUEST, VEHICLES_LOADING_SUCCESS } from "../constants/constants";

export const listReducer = (state, action) => {
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
      case DISPLAY_BLOCK:
        return {
          ...state,
          compare: DISPLAY_BLOCK
        }
      case DISPLAY_NONE:
        return {
          ...state,
          compare: DISPLAY_NONE
        }
      default:
        throw new Error();
    }
  }