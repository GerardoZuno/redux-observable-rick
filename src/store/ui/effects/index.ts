import { combineEpics } from 'redux-observable';
import { toggleSidebarEpic } from './toggle-sidebar';
import AppState from '../../state';
import { Actions } from '../../actions';

const uiEpic = combineEpics<Actions, Actions, AppState>(
 
    toggleSidebarEpic,
  
);

export default uiEpic;