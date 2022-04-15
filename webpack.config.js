module.exports = {
  entry: './src',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
};

import { Outlet, Link } from "react-router-dom";
import './Pages.css'
import { useLocation } from "react-router-dom";
import InfoBox from '../components/InfoBox'
import './InfoPage1.css';
const text = "You made it! We need your help desperately!"


import InfoBox from "../components/InfoBox";
import { useLocation } from "react-router-dom";
const InfoPage2 = () => {

    const text = "Princess Julia has been kidnapped and trapped in " +
    "a room by a malicious predator called Rengar.";
    const location = useLocation();

    return (
        <div className="layout">
          <InfoBox 
          direction={location.state.direction}
          text={text}
          pathNext={'/infopage3'}
          pathBack={'/'}
          nextText={'Next'}/>

        </div>
      )
  };
  
export default InfoPage2;

