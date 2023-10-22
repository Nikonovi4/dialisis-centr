import RepairForm from "../RepairForm/RepairForm";

const CangesRepairHistoryForm = ({
  handleChange,
  isValid,
  errors,
  isEditedRepairFormValue,
  edit_repair_inputs_names,
  setEditedRepairFormValue,
  setValues,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditedRepairFormValue({
      title: "",
      operationTime: "",
      description: "",
    })
   
    setValues({
      title: "",
      description: "",
      operationTime: "",
      edit_title: "",
      edit_description: "",
      edit_operationTime: ""
    });
  };
  return (
    <RepairForm
      handleChange={handleChange}
      isValid={isValid}
      error={errors}
      values={isEditedRepairFormValue}
      inputs_name={edit_repair_inputs_names}
      handleSubmit={handleSubmit}
    />
  );
};

export default CangesRepairHistoryForm;
