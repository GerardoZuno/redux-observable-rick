import { UIActions } from "./action-creators";
import { uiInitialState } from "./initialState";
import { UIState } from "./state";
import * as actions from './actions';





 const uiReducer = (state: UIState = uiInitialState, action: UIActions): UIState => {
    switch (action.type) {
        case actions.TOGGLE_SIDEBAR:
            return {
                ...state,
                showSidebar: !state.showSidebar
            };
        default:
            return state;
    }
}

export default uiReducer;
