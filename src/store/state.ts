import { APIState } from './api/state';
import { UIState } from './ui/state';

export interface AppState {
  ui: UIState;
  api: APIState
}

export default AppState;
