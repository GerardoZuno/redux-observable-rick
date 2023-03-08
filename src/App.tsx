import React from "react";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { useDispatch, useSelector } from "react-redux";
import { ToggleSidebar } from "./store/ui/action-creators";
import AppState from "./store/state";
import { Character } from "./interfaces/charactersInterface";
import {
  FetchCharactersCancel,
  FetchCharactersRequest,
} from "./store/api/action-creators";
import { PacmanLoader } from "react-spinners";

const App = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state: AppState) => state.ui.showSidebar);

  const response = useSelector((state: AppState) => state.api.characters);

  const loading = useSelector((state: AppState) => state.api.loading);

  const page = useSelector((state: AppState) => state.api.page)

  const characters = useSelector((state: AppState) => state.api.characters);

  let text = "";
  if (loading) {
    text = "loading";
  } else {
    text = "fetch";
  }

const  numbers: number[] = [1,2,3,4,5,6]
  const result =  numbers.map(n => ({x:n}))
  console.log(result)  



  return (
    <div className="flex min-h-screen max-h-screen h-screen  overflow-y-scroll bg-red-600">
      {sidebar ? (
        <Sidebar className="bg-red-900 w-64 px-4 py-8  h-screen min-h-screen max-h-screen absolute top-0 bottom-0" />
      ) : (
        <button
          className="bg-teal-500 rounded-lg p-2 mb-5 mt-2 absolute w-[200px]"
          onClick={() => dispatch(new ToggleSidebar())}
        >
          toggle
        </button>
      )}

      <div className=" w-[70%] mx-auto flex flex-col md:gap-4   ">
        <div className=" flex flex-col md:flex-row md:gap-4 items-baseline  rounded-md mt-12">
        

          <button
            className="w-full  bg-pink-500 rounded-lg h-16  p-4 mb-5 md:mb-0 md:w-1/2 disabled:opacity-50"
            disabled={loading}
            onClick={() => dispatch(new FetchCharactersRequest(1))}
          >
            {text}
          </button>

          <button
            className="w-full bg-orange-500 rounded-lg p-4 h-16  mb-5 md:mb-0 md:w-1/2  disabled:opacity-25"
            onClick={() => dispatch(new FetchCharactersCancel())}
            disabled={characters.length < 1  && !loading}

          >
            Cancel
          </button>

          <button
            className="w-full bg-sky-500 rounded-lg p-4 h-16  mb-5 md:mb-0 md:w-1/2  disabled:opacity-25 "
            onClick={() => dispatch(new FetchCharactersRequest((page + 1)))}
            disabled={characters.length < 1  || loading}
          >
            {'>>'}
          </button>

          <button
            className="w-full bg-yellow-500 rounded-lg p-4 h-16  mb-5 md:mb-0 md:w-1/2 disabled:opacity-25"
            onClick={() => dispatch(new FetchCharactersRequest((page - 1)))}
            disabled={page < 2 || loading}
          >
              {'<<'}
          </button>
        </div>
        {loading ? (
          <div className="grid place-items-center bg-slate-700 h-full">
            <PacmanLoader color="#36d7b7" />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {response.map((item: Character) => (
              <Content item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
