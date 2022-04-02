import InfoBox from "../components/InfoBox";

const InfoPage2 = () => {

    const text = "Princess Julia has been kidnapped and was trapped in " +
    "this room by a malicious predator called Rengar.";
     
    return (
        <div className="layout">
          <InfoBox text={text} pathNext={'/infopage3'} pathBack={'/'} nextText={'Next'}/>
        </div>
      )
  };
  
export default InfoPage2;