const DropdownMenu = ({ isOpenMenu, setStatusPatient, setOpenDropdownMenu }) => {


  const changeStatus = (e) => {
    const target = e.target;

    setStatusPatient(target.id);
    setOpenDropdownMenu(false)
  };

  return (
    <ul
      className={`dropdown__list ${
        isOpenMenu ? "" : "dropdown__list_invisible"
      }`}
    >
      <li className="dropdowm__item">
        <button
          id="cell_expection"
          className="status__button"
          onClick={changeStatus}
        >
          Ожидаем
        </button>
      </li>
      <li className="dropdowm__item">
        <button id="cell_arriving" className="status__button" onClick={changeStatus}>
          Пришел
        </button>
      </li>
      <li className="dropdowm__item">
        <button
          id="cell_treatment"
          className="status__button"
          onClick={changeStatus}
        >
          В лечении
        </button>
      </li>
      <li className="dropdowm__item">
        <button id="cell_ending" className="status__button" onClick={changeStatus}>
          Окончил лечение
        </button>
      </li>
      <li className="dropdowm__item">
        <button id="cell_notcome" className="status__button" onClick={changeStatus}>
          Не придет
        </button>
      </li>
    </ul>
  );
};

export default DropdownMenu;
