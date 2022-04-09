import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './GameRoutes.css';

import HomePage from "./HomePage";
import RiddlePage from "./RiddlePage";
import Riddle1 from "./Riddle1";
import Riddle2 from "./Riddle2";
import Riddle3 from "./Riddle3";
import CountDownTimer from "../components/CountDownTimer";

export default function GameRoutes() {

const minsSecs = { minutes: 30, seconds: 0 }

  return (
    <div>
        <CountDownTimer hoursMinSecs={minsSecs} />
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="riddlepage" element={<RiddlePage />}></Route>
            <Route path="riddle1" element={<Riddle1 />}></Route>
            <Route path="riddle2" element={<Riddle2 />}></Route>
            <Route path="riddle3" element={<Riddle3 />}></Route>
        </Routes>
    </div>
  );
}

// ReactDOM.render(<GameRoutes />, document.getElementById("root"))