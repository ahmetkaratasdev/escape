import { useLocation } from "react-router-dom";
import InfoBox from '../components/InfoBox';
const InfoPage5 = () => {
  const location = useLocation()
  const text = "Are you ready to solve these riddles and " +
  "save princess Julia before she drowns?";

  return (
    <div className="layout">
      <InfoBox
        text={text}
        pathNext={'/gameroutes'}
        pathBack={'/infopage4'}
        nextText={'YES!'}
        direction={location.state.direction}
      />
    </div>
  )
}

export default InfoPage5;