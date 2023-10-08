import RepairList from "../RepairList/RepairList";
import NewRepairForm from "../NewRepairForm/NewRepairForm";
import CangesRepairHistory from "../CangesRepairHistoryForm/CangesRepairHistoryForm";

const RepairHistory = ({
  isAipInfo,
  clearnRepairHisory,
  handleChange,
  isValid,
  addNewRepair,
  isRenderRepairHistory,
  values,
  setValues,
  errors,
  setEditedRepairItem,
  isEditedRepairFormValue,
}) => {
  return (
    <section className="repairHistory">
      <div
        className={`${
          isAipInfo ? "repairHisoryHeader" : "repairHisoryHeader_invisible"
        }`}
      >
        <h2 className="title">{`История обслуживания аппарата ${isAipInfo.internalNumber}`}</h2>
        <button
          className="closeRepairHistoryButton"
          aria-label="кнопка закрытия всплывающего окна."
          type="button"
          onClick={clearnRepairHisory}
        ></button>
      </div>
      <ul className="repairHistoryList">
        {isRenderRepairHistory?.map((i) => (
          <RepairList data={i} setEditedRepairItem={setEditedRepairItem} />
        ))}
      </ul>
      <NewRepairForm
        handleChange={handleChange}
        isValid={isValid}
        errors={errors}
        addNewRepair={addNewRepair}
        setValues={setValues}
        values={values}
      />
      {/* <CangesRepairHistory 
        handleChange={handleChange}
        isValid={isValid}
        errors={errors}
        isEditedRepairFormValue={isEditedRepairFormValue}/> */}
    </section>
  );
};

export default RepairHistory;
