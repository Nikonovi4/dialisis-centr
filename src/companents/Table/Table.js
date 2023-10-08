import React from "react";
import patientsList from "../../utils/patientsList";
import Patients from "../Patients/Patients";

const Table = () => {
  const makeShedule = (patientLIst, shiftCount, placeCount) => {
    const res = [];

    for (let i = 1; i <= shiftCount; i++) {
      const sameShiftPatients = patientLIst
        .filter((pacient) => pacient.shift === i)
        .sort((a, b) => a.place - b.place);

      const lineShedule = [];
      for (let j = 1; j <= placeCount; j++) {
        const cell = sameShiftPatients.find((i) => i.place === j) || {};
        lineShedule.push(cell);
      }
      res.push(lineShedule);
    }

    return res;
  };

  const packing = makeShedule(patientsList, 4, 6);
  let renderList = [];

  for (let i = 0; i < packing[0].length; i++) {
    for (let j = 0; j < packing.length; j++) {
      renderList.push(packing[j][i]);
    }
  }

  return (
    <section className="table">
      <div className="table__secton">
        <ul className="table__legent">
          <li className="legend"></li>
          <li className="legend">Место 1</li>
          <li className="legend">Место 2</li>
          <li className="legend">Место 4</li>
          <li className="legend">Место 3</li>
          <li className="legend">Место 5</li>
          <li className="legend">Место 6</li>
        </ul>
        <ul className="table__content">
          <li className="table__header">Первая смена</li>
          <li className="table__header">Вторя смена</li>
          <li className="table__header">Третья смена</li>
          <li className="table__header">Четвертая смена</li>

          {renderList?.map((item, i) => (
            <Patients data={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Table;
