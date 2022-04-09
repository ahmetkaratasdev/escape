import InfoBox from "../components/InfoBox";

const InfoPage5 = () => {

    const text = "Are you ready to solve these riddles and " +
    "save princess Julia before she drowns?";
    
    return (
        <div className="layout">
          <InfoBox text={text} pathNext={'/gameroutes'} pathBack={'/infopage4'} nextText={'YES!'}/>
        </div>
      )
  };
  
export default InfoPage5;