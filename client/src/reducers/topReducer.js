import { TOP_LOADING_FAIL, TOP_LOADING_REQUEST, TOP_LOADING_SUCCESS } from "../constants/constants"


// top card reducer
export const topReducer = (state, action) => {
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