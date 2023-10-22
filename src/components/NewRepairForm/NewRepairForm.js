import RepairForm from "../RepairForm/RepairForm";

const NewRepairForm = ({
  handleChange,
  isValid,
  errors,
  addNewRepair,
  setValues,
  values,
  digtl_reg,
  new_repair_inputs_names,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewRepair();
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
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isValid={isValid}
      errors={errors}
      values={values}
      digtl_reg={digtl_reg}
      inputs_name={new_repair_inputs_names}
    />
  );
};

export default NewRepairForm;
