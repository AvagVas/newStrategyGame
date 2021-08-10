import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./franceTeam";
import "./japanTeam";
import { gameEngine } from "./coreTeam/gameEngine";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

let allCountries = gameEngine.getCountries();

let firstPlaySelectedCountry = allCountries[0];
let secondPlayerSelectedCountry = allCountries[1];

gameEngine.setFirstPlayerCountry(firstPlaySelectedCountry);
gameEngine.setSecondPlayerCountry(secondPlayerSelectedCountry);

gameEngine.startGame();
