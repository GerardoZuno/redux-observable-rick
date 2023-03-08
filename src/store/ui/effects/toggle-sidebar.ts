import { ToggleSidebar } from '../action-creators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Action } from 'redux';

export const toggleSidebarEpic = (action$: Observable<Action>): Observable<ToggleSidebar> =>
  action$.pipe(
    ofType(ToggleSidebar),
    map(() => new ToggleSidebar())
  );
