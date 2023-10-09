import DropdownMenu from "../DropdownMenu/DropdownMenu";
import React from "react";
import { useState } from "react";

const Patients = ({ data }) => {
  
const [isOpenDropdownMeny, setOpenDropdownMenu] = useState(false);
const [isChangeStatusPatient, setStatusPatient] = useState('')

const openMenu = () => {
  setOpenDropdownMenu((state) => !state)
};

  return(
    <li className={`cell ${isChangeStatusPatient}`}>
    <div className="patient__name">{data.name}</div>
    <button className={`menu__button ${data.name? '': 'menu__button_invisible'}`} onClick={openMenu}>Выбирите статус</button>
    <DropdownMenu isOpenMenu = {isOpenDropdownMeny} setStatusPatient = {setStatusPatient} setOpenDropdownMenu={setOpenDropdownMenu} />
    </li>
  )
};

export default Patients