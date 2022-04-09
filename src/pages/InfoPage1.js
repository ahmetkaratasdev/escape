import { Outlet, Link } from "react-router-dom";
import './Pages.css'
import InfoBox from '../components/InfoBox'

const text = "You made it! We need your help desperately!"
const InfoPage1 = () => {
  return (
    <div className="layout">
        <InfoBox text={text} pathNext={'/infopage2'} pathBack={''} nextText={'Next'}/>
    </div>
  )
};

export default InfoPage1;