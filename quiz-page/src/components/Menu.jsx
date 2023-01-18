import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
function Menu() {
  const { gameState, setgameState, username, setusername } =
    useContext(GameStateContext);
  return (
    <div className="w-[500px] p-10 rounded-xl shadow-md  m-10 border border-1 ">
      <h1 className=" text-center text-2xl underline underline-offset-8 mb-5">
        Quiz Application
      </h1>
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
            />
          </svg>
        </div>
        <input
          type="text"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ex. Oussama Ezitouni"
          required
          onChange={(event) => {
            setusername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setgameState("Playing");
          }}
          type="button"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Menu;
