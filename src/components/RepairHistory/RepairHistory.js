import RepairList from "../RepairList/RepairList";
import NewRepairForm from "../NewRepairForm/NewRepairForm";
import {
  DIGTL_REG as digtl_reg,
  NEW_REPAIR_INPUTS_NAMES as new_repair_inputs_names,
  EDIT_REPAIR_INPUTS_NAMES as edit_repair_inputs_names,
} from "../../utils/constants";
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
  setEditedRepairFormValue,
  isOpenEditForm,
  setOpenEditForm
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
          <RepairList data={i} setEditedRepairItem={setEditedRepairItem} setOpenEditForm={setOpenEditForm} />
        ))}
      </ul>
      {isOpenEditForm ? (
        <CangesRepairHistory
          handleChange={handleChange}
          // isValid={isValid}
          errors={errors}
          isEditedRepairFormValue={isEditedRepairFormValue}
          edit_repair_inputs_names={edit_repair_inputs_names}
          setEditedRepairFormValue={setEditedRepairFormValue}
          setValues={setValues}
        />
      ) : (
        <NewRepairForm
          handleChange={handleChange}
          isValid={isValid}
          errors={errors}
          addNewRepair={addNewRepair}
          setValues={setValues}
          values={values}
          digtl_reg={digtl_reg}
          new_repair_inputs_names={new_repair_inputs_names}
        />
      )}
    </section>
  );
};

export default RepairHistory;
