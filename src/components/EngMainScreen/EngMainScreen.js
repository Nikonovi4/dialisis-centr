import Header from "../Header/Header";
import Popup from "../Popup/Popup";
import AipLine from "../AipLine/AipLine";
import { useState } from "react";
import {
  NEW_AIP_POPUP_TITLE as popupTitle,
  ADD_BUTTON_NAME as submitButtonName,
} from "../../utils/constants";
import InputsNewAip from "../InputsNewAip/InputsNewAip";
import aipList from "../../utils/aipList";
import RepairHistory from "../RepairHistory/RepairHistory";


const EngMainScreen = ({
  handleChange,
  isValid,
  isAipInfo,
  setAipInfo,
  addNewRepair,
  isRenderRepairHistory,
  values,
  setValues,
  errors,
  setEditedRepairItem,
  isEditedRepairFormValue,
  setEditedRepairFormValue,
  isOpenEditForm,
  setOpenEditForm
}) => {
  const [isOpenPopup, setOpenPopup] = useState(false);

  const openPopup = () => {
    setOpenPopup(true);
  };

  const clearnRepairHisory = () => {
    setAipInfo("");
  };


  return (
    <section className="section">
      <Header>
        <div className="buttonPlace">
          <button className="header__button" type="button" onClick={openPopup}>
            Создать новый АИП
          </button>
        </div>
      </Header>
      <ul className="aipTable">
        {aipList?.map((i) => (
          <AipLine data={i} setAipInfo={setAipInfo} />
        ))}
      </ul>

      {isAipInfo ? (
        <RepairHistory
          isAipInfo={isAipInfo}
          clearnRepairHisory={clearnRepairHisory}
          handleChange={handleChange}
          isValid={isValid}
          addNewRepair={addNewRepair}
          isRenderRepairHistory={isRenderRepairHistory}
          values={values}
          setValues={setValues}
          errors={errors}
          setEditedRepairItem={setEditedRepairItem}
          isEditedRepairFormValue={isEditedRepairFormValue}
          setEditedRepairFormValue={setEditedRepairFormValue}
          isOpenEditForm={isOpenEditForm}
          setOpenEditForm={setOpenEditForm}
        />
      ) : (
        ""
      )}


      <Popup
        setOpenPopup={setOpenPopup}
        isOpenPopup={isOpenPopup}
        title={popupTitle}
        submitButtonName={submitButtonName}
      >
        <InputsNewAip />
      </Popup>
    </section>
  );
};

export default EngMainScreen;
