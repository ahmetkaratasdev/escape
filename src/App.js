import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import InfoPage1 from "./pages/InfoPage1";
import InfoPage2 from "./pages/InfoPage2";
import InfoPage3 from "./pages/InfoPage3"
import InfoPage4 from "./pages/InfoPage4";
import InfoPage5 from "./pages/InfoPage5";
import HomePage from "./pages/HomePage";
import RiddlePage from "./pages/RiddlePage";
import Riddle1 from "./pages/Riddle1";
import Riddle2 from "./pages/Riddle2";
import Riddle3 from "./pages/Riddle3";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import GameRoutes from "./pages/GameRoutes";

import Header from "./components/Header"
import "./App.css"
import Example from "./pages/Example";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<InfoPage1 />}></Route>
          <Route path="/infopage2" element={<InfoPage2 />}></Route> 
          <Route path="/infopage3" element={<InfoPage3 />}></Route>
          <Route path="/infopage4" element={<InfoPage4 />}></Route>
          <Route path="/infopage5" element={<InfoPage5 />}></Route>
          <Route path="/gameroutes/*" element={<GameRoutes />}></Route>
          <Route path="/example" element={<Example />}></Route>
          {/*<Route path="/homepage" element={<HomePage />}></Route>
          <Route path="/riddlepage" element={<RiddlePage />}></Route>
          <Route path="/riddle1" element={<Riddle1 />}></Route>
          <Route path="/riddle2" element={<Riddle2 />}></Route>
          <Route path="/riddle3" element={<Riddle3 />}></Route>*/}
          <Route path="/success" element={<Success />}></Route>
          <Route path="/failure" element={<Failure />}></Route> 

        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))