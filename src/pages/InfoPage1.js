import { Outlet, Link } from "react-router-dom";
import './Pages.css'
// import {}
import InfoBox from '../components/InfoBox'
import './InfoPage1.css';
const text = "You made it! We need your help desperately!"
const InfoPage1 = () => {
  return (
    <div className="layout">
        <InfoBox text={text} pathNext={'/infopage2'} pathBack={''} nextText={'Next'}/>
        {/* <div class="exampleAni">
        hi (animation test)</div> */}

    </div>
  )
};

export default InfoPage1;

