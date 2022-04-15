import { useLocation } from "react-router-dom";
import './Pages.css'
import InfoBox from '../components/InfoBox';
import './InfoPage1.css'

const InfoPage1 = () => {
  const location = useLocation()
  const text = "You made it! We need your help desperately!";
  return (
    <div className="layout">
      <InfoBox
        text={text}
        pathNext={'/infopage2'}
        pathBack={''}
        nextText={'Next'}
        direction={location.state ? location.state.direction : 'slideInRight'}
      />
    </div>
  )
}

export default InfoPage1;