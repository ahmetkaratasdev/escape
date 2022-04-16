import { useLocation } from "react-router-dom";
import InfoBox from '../components/InfoBox';
const InfoPage4 = () => {
  const location = useLocation()
  const text = "The door however is locked and can only be opened " +
  "when someone solves its three riddles.";

  return (
    <div className="layout">
      <InfoBox
        text={text}
        pathNext={'/infopage5'}
        pathBack={'/infopage3'}
        nextText={'Next'}
        direction={location.state.direction}
      />
    </div>
  )
}

export default InfoPage4;