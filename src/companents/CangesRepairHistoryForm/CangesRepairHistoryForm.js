import RepairForm from "../RepairForm/RepairForm";

const CangesRepairHistoryForm = ({ handleChange, isValid, errors, isEditedRepairFormValue }) => {

  return (
    <RepairForm handleChange={handleChange} isValid={isValid} error={errors} values={isEditedRepairFormValue} />
  );
};

export default CangesRepairHistoryForm;
