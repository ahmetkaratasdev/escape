import InfoBox from "../components/InfoBox";

const InfoPage3 = () => {

    const text = "Rengar has turned the water system on which will " + 
    "completely fill the room with water in 30 minutes!";
    
     
    return (
        <div className="layout">
          <InfoBox text={text} pathNext={'/infopage4'} pathBack={'/infopage2'} nextText={'Next'}/>
        </div>
      )
  };
  
export default InfoPage3;