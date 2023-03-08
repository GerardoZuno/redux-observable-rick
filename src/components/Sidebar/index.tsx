import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppState from '../../store/state';
import { ToggleSidebar } from '../../store/ui/action-creators';



interface Props {
  className?: string;

}

export const Sidebar = ({className}: Props) => {


  const dispatch = useDispatch();
  const sidebar = useSelector((state: AppState) => state.ui.showSidebar);
      
   

  console.log(sidebar)

  if(!sidebar) {
   return <>
  
   </>
  }

  return (
    <div className={className}>
      <button onClick={() => dispatch(new ToggleSidebar())}
      className="w-full bg-yellow-500 rounded-lg p-2 mb-5 border-2 border-red-700"
      >
      close
    </button>
  <h1 className="text-white text-2xl font-bold mb-8"> Sidebar</h1>
  {/* aquí agregarías cualquier otro contenido que desees */}
  <p>Categorias</p>
</div>
  )
}

