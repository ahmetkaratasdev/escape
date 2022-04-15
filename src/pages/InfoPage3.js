import { useLocation } from "react-router-dom";
import InfoBox from '../components/InfoBox';
const InfoPage3 = () => {
  const location = useLocation()
  const text = "Rengar has turned the water system on which will " +
  "completely fill the room with water in 30 minutes!";

  return (
    <div className="layout">
      <InfoBox
        text={text}
        pathNext={'/infopage4'}
        pathBack={'/infopage2'}
        nextText={'Next'}
        direction={location.state ? location.state.direction : 'slideInRight'}
      />
    </div>
  )
}

export default InfoPage3;