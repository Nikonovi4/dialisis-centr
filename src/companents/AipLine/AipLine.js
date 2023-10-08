const AipLine = ({ data, setAipInfo,  }) => {

  const openRepairHistory = () => {
    setAipInfo(data);
  }

  const numberHall =(place) => {
  if (place<= 4){
    return `Зал 1 место ${place}`
  } else if (place <= 6) {
    return `Зал 2 место ${place-4}`
  } else {
    return 'В резерве'
  }
}

  return(
<li className="aipLine">
  <div className="aipLine__cell"><button className="aipRepairButton" type="button" onClick={openRepairHistory}>{data.internalNumber}</button></div>
  <div className="aipLine__cell">{numberHall(data.place)}</div>
  <div className="aipLine__cell">{data.condition}</div>
  <div className="aipLine__cell">{data.responsible}</div>
</li>
  )
};

export default AipLine;
