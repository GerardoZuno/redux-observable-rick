import { createStore, combineReducers, Dispatch, applyMiddleware } from 'redux';
import uiReducer from './ui/reducer';
import apiReducer from './api/reducer';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Actions } from './actions';
import AppState from './state';
import { composeWithDevTools } from 'redux-devtools-extension';
import uiEpic from './ui/effects';
import apiEpic from './api/effects';


const epicMiddleware = createEpicMiddleware<Actions, Actions, AppState, unknown>();

const classMiddleware = () => (next: Dispatch<Actions>) => (action: Actions) => next({ ...action });



const store = createStore(
    combineReducers({
      ui: uiReducer,
      api: apiReducer
    }),
    composeWithDevTools(applyMiddleware(classMiddleware, epicMiddleware))
  );
  
  epicMiddleware.run(combineEpics( uiEpic, apiEpic));
  
  
  export default store;
