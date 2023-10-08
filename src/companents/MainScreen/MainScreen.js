import Table from "../Table/Table";
import Header from "../Header/Header";
import Popup from "../Popup/Popup";
import { useState } from "react";
import {
  NEW_PATIENT_POPUP_TITLE as popupTitle,
  ADD_BUTTON_NAME as submitButtonName,
} from "../../utils/constants";

const MainScreen = () => {
  const [isOpenPopup, setOpenPopup] = useState(false);

  const openPopup = () => {
    setOpenPopup(true);
  };

  return (
    <section className="section">
      <Header setOpenPopup={setOpenPopup}>
        <div className="buttonPlace">
          <button className="header__button" type="button" onClick={openPopup}>
            Создать нового пациента
          </button>
        </div>
      </Header>
      <Table />
      <Popup
        setOpenPopup={setOpenPopup}
        isOpenPopup={isOpenPopup}
        title={popupTitle}
        submitButtonName={submitButtonName}
      >
        <label className="popup__lable">
          <input className="popup__input" />
        </label>
      </Popup>
    </section>
  );
};

export default MainScreen;
