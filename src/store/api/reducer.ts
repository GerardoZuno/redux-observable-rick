import { apiInitialState } from "./apiInitialState";
import { APIState } from "./state";
import { APIActions } from './action-creators';
import * as actions from './actions';





const apiReducer = (state: APIState = apiInitialState, action: APIActions): APIState => {
    switch (action.type) {
        case actions.FETCH_CHARACTERS_REQUEST:
        return {
            ...state,            
            loading: true,
            error: null,
            page: action.payload
        };
        case    actions.FETCH_CHARACTERS_SUCCESS:
        return {
            ...state,
            loading: false,
            characters: action.payload
        };
        case actions.FETCH_CHARACTERS_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload
        };

        case actions.FETCH_CHARACTERS_CANCEL:
        return apiInitialState


        default:
        return state;
    }
    } 

 export default apiReducer;   