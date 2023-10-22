import { userInfo } from "../../utils/userInfo";

const RepairList = ({ data, setEditedRepairItem, setOpenEditForm }) => {

  const handleEditRepairItem = () => {
    setEditedRepairItem(data)
    setOpenEditForm((state)=> !state)
  }

  return (
    <li className="repairList">
      <div className="repairList__info">
        <div className="repairList__title">{data.title}</div>
        <div className="repairList__date">{data.date}</div>
        <div className="repairList__responsible">{data.responsible}</div>
        <div className="repairList__opertionTime">{`Наработка: ${data.operationTime} час.`}</div>
        <button
          className={
            data.owner === userInfo._id
              ? "repairList__editButton"
              : "repairList__editButton_invisible"
          }
          type="button" onClick={handleEditRepairItem}
        />
      </div>
      <p className="repairList__description">{data.description}</p>
    </li>
  );
};

export default RepairList;
