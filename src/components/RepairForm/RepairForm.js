

const RepairForm = ({ handleSubmit, handleChange, isValid, errors, values, digtl_reg, inputs_name }) => {

  return (
    <form className="newRepair__form" onSubmit={handleSubmit}>
      <fieldset className="newRepair__fildset">
        <input
          className="newRepair__input newRepair__title"
          type="text"
          placeholder="Название проблемы"
          name={inputs_name.title_input}
          onChange={handleChange}
          defaultValue={values.title}
          required
          minLength="6"
        />
        <input
          className="newRepair__input newRepair__operationTime"
          type="text"
          placeholder="Наработка часов"
          name={inputs_name.operationTime_input}
          onChange={handleChange}
          defaultValue={values.operationTime}
          minLength="2"
          required
          pattern={digtl_reg}
        />
        <textarea
          className="newRepair__input newRepair__discription"
          type="text"
          placeholder="Описание работ"
          name={inputs_name.description_input}
          onChange={handleChange}
          required
          defaultValue={values.description}
          minLength="10"
        />
        <button className="newRepir__submit" type="submit" disabled={!isValid}>
          Сохранить
        </button>
      </fieldset>
      <div className="errors__block">
        <span>{errors?.title_input}</span>
        <span>{errors?.description_input}</span>
        <span>{errors?.operationTime_input}</span>
      </div>
    </form>
  );
};

export default RepairForm;
