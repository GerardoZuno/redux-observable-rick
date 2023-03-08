import React,  { FC }  from 'react'
import { FetchCharactersCancel, FetchCharactersRequest } from '../../store/api/action-creators';
import { useDispatch, useSelector} from 'react-redux';
import AppState from '../../store/state';
import { Character } from '../../interfaces/charactersInterface';


interface Props {
  className?: string;
  item: Character;

}

export const Content = ({className, item}: Props) => {

  const loading = useSelector((state: AppState) => state.api.loading);

  

   
  if(loading){
    return <p>'...'.</p>;

  }





 

  return (
    <div className={className}>
  


  <div className="bg-white rounded-lg p-8">
        <h2 className="text-xl font-bold">{item.name}</h2>

        <img src={item.image} alt={item.name} />
      </div>






    </div>
  )
}

