import { FetchCharactersRequest, FetchCharactersSuccess, FetchCharactersFailure  } from '../action-creators';
import { Observable, from, of, delay, fromEvent, interval } from 'rxjs';
import { catchError,  concatMap, filter, map, mergeMap, retry, switchMap, tap, take, takeUntil, withLatestFrom,  } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";

import { StateObservable, ofType } from 'redux-observable';
import { Action } from 'redux';
import { Character, RickMortyResponse } from '../../../interfaces/charactersInterface';
import { FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_CANCEL } from '../actions';
import { Actions } from '../../actions';
import AppState from '../../state';



const API_URL = 'https://rickandmortyapi.com/api/character';


export const fetchRequestEpic = (action$: Observable<Actions>,  state$: StateObservable<AppState>): Observable<Actions> =>
  action$.pipe(
    ofType(FETCH_CHARACTERS_REQUEST),
    withLatestFrom(state$),
    tap(([action, state]) => console.log('Estado:', state.api.page)),
    mergeMap(([action, state]) =>
      ajax.getJSON<RickMortyResponse>(`${API_URL}?page=${state.api.page}`).pipe(
        delay(2000),
        map((response) => new FetchCharactersSuccess( response.results )),
        takeUntil(action$.pipe(ofType(FETCH_CHARACTERS_CANCEL))),
                 catchError((error: any) => of(new FetchCharactersFailure ({error})),
        
      )
    ),


  


)

  )






export default fetchRequestEpic;



// const fetchDataEpic = (action$) =>
//   action$.pipe(
//     ofType(FetchData),
//     mergeMap((action) =>
//       from(
//         ajax.getJSON(`/api/data/${action.payload.id}`).pipe(
//           map((response) => new FetchDataSuccess({ data: response })),
//           catchError((error) => of(new FetchDataError({ error })))
//         )
//       )
//     )
//   );