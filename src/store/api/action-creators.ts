import { Action } from "redux";
import * as actions from './actions';
import { Character } from "../../interfaces/charactersInterface";
import { LoadingAction } from "../common/loading-action";


export class FetchCharactersRequest  implements LoadingAction  {
    readonly type = actions.FETCH_CHARACTERS_REQUEST;
    readonly isLoading = false;
    constructor(public payload: number) {
          console.log(payload);
    }
  }

    export class FetchCharactersSuccess  implements Action {
    readonly type = actions.FETCH_CHARACTERS_SUCCESS;
    constructor(public payload: Character[]) {

    }

    }

    export class FetchCharactersFailure  implements Action {
    readonly type = actions.FETCH_CHARACTERS_FAILURE;
    constructor(public payload: any) {
            console.log(payload.error);
        }
    }

    export class FetchCharactersCancel implements Action {
        readonly type = actions.FETCH_CHARACTERS_CANCEL;
    }

    export type APIActions =
    | FetchCharactersRequest
    | FetchCharactersSuccess
    | FetchCharactersFailure
    | FetchCharactersCancel;