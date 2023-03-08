import { Character } from "../../interfaces/charactersInterface";


export interface APIState  {
    characters: Character[];
    loading: boolean;
    error: string | null;
    page: number;
}
    