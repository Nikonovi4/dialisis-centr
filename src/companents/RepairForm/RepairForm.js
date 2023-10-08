import { DIGTL_REG } from "../../utils/constants";

const RepairForm = ({ handleSubmit, handleChange, isValid, errors, values }) => {
  return (
    <form className="newRepair__form" onSubmit={handleSubmit}>
      <fieldset className="newRepair__fildset">
        <input
          className="newRepair__input newRepair__title"
          type="text"
          placeholder="Название проблемы"
          name="title"
          onChange={handleChange}
          value={values.title}
          required
          minLength="6"
        />
        <input
          className="newRepair__input newRepair__operationTime"
          type="text"
          placeholder="Наработка часов"
          name="operationTime"
          onChange={handleChange}
          value={values.operationTime}
          minLength="2"
          required
          pattern={DIGTL_REG}
        />
        <textarea
          className="newRepair__input newRepair__discription"
          type="text"
          placeholder="Описание работ"
          name="description"
          onChange={handleChange}
          required
          value={values.description}
          minLength="10"
        />
        <button className="newRepir__submit" type="submit" disabled={!isValid}>
          Сохранить
        </button>
      </fieldset>
      <div className="errors__block">
        <span>{errors?.title}</span>
        <span>{errors?.description}</span>
        <span>{errors?.operationTime}</span>
      </div>
    </form>
  );
};

export default RepairForm;
