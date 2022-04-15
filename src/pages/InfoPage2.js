import { useLocation } from "react-router-dom";
import './Pages.css'
import InfoBox from '../components/InfoBox';
const InfoPage2 = () => {
  const location = useLocation()
  const text = "Princess Julia has been kidnapped and trapped in " +
  "a room by a malicious predator called Rengar.";

  return (
    <div className="layout">
      <InfoBox
        text={text}
        pathNext={'/infopage3'}
        pathBack={'/'}
        nextText={'Next'}
        direction={location.state ? location.state.direction : 'slideInRight'}
      />
    </div>
  )
}

export default InfoPage2;