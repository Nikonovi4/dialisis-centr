import RepairForm from "../RepairForm/RepairForm";

const NewRepairForm = ({
  handleChange,
  isValid,
  errors,
  addNewRepair,
  setValues,
  values,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewRepair();
    setValues({
      title: "",
      description: "",
      operationTime: "",
    });
  };

  return (
    <RepairForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isValid={isValid}
      errors={errors}
      values={values}
    />
  );
};

export default NewRepairForm;
