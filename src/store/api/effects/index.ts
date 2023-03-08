import { combineEpics } from 'redux-observable';
import AppState from '../../state';
import { Actions } from '../../actions';
import fetchRequestEpic from './fetch-request';
const apiEpic = combineEpics<Actions, Actions, AppState>(
 
    fetchRequestEpic,
   
);

export default apiEpic;