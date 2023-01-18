import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
function App() {
  const [gameState, setgameState] = useState("Menu");
  const [username, setusername] = useState("");
  return (
    <div className="flex justify-center items-center ">
      <GameStateContext.Provider
        value={{ gameState, setgameState, username, setusername }}
      >
        {gameState === "Menu" && <Menu />}
        {gameState === "Playing" && <Quiz />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
