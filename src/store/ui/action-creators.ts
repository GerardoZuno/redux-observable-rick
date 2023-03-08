import { Action } from "redux";
import * as actions from './actions';



export class ToggleSidebar implements Action {
    readonly type = actions.TOGGLE_SIDEBAR;
  }


  export type UIActions =
  | ToggleSidebar     
