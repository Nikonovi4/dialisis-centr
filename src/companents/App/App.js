import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import MainScreen from "../MainScreen/MainScreen";
import EngMainScreen from "../EngMainScreen/EngMainScreen";
import { useState } from "react";
import repairList from "../../utils/repairList";
import { userInfo } from "../../utils/userInfo";

function App() {
  const [values, setValues] = useState({
    title: "",
    description: "",
    operationTime: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isAipInfo, setAipInfo] = useState("");

  console.log(values)

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const [isRenderRepairHistory, setRenderRepairHistory] = useState([]);
  const [isRepairAip, setRepairAip] = useState({});

  useEffect(() => {
    setRepairAip(
      repairList?.find((i) => i.aipNumber === isAipInfo.serialNumber)
    );
  }, [isAipInfo.serialNumber]);

  useEffect(() => {
    const repairHistory = isRepairAip?.repair;
    setRenderRepairHistory(repairHistory);
  }, [isRepairAip?.repair]);

  const addNewRepair = () => {
    const date = new Date();
    const formatDate = new Intl.DateTimeFormat("ru").format(date);
    const newRepairItem = {
      description: values.description,
      operationTime: values.operationTime,
      title: values.title,
      responsible: userInfo.name,
      date: formatDate,
      owener: userInfo._id,
    };

    setRenderRepairHistory([...isRenderRepairHistory, newRepairItem]);

    repairList.push(newRepairItem);
  };
  // исправление старой записи
  // const [isEditedRepairItem, setEditedRepairItem] = useState({});
  // const [isEditedRepairFormValue, setEditedRepairFormValue] = useState({
  //   title: "",
  //   operationTime: "",
  //   description: "",
  // });

  // useEffect(() => {
  //   if (isEditedRepairItem) {
  //     setEditedRepairFormValue({
  //       title: isEditedRepairItem.title,
  //       operationTime: isEditedRepairItem.operationTime,
  //       description: isEditedRepairItem.description,
  //     });
  //   }
  // }, [
  //   isEditedRepairItem,
  //   isEditedRepairItem.title,
  //   isEditedRepairItem.operationTime,
  //   isEditedRepairItem.description,
  // ]);

 

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainScreen />} />
      <Route
        path="/engineer"
        element={
          <EngMainScreen
            handleChange={handleChange}
            isValid={isValid}
            isAipInfo={isAipInfo}
            setAipInfo={setAipInfo}
            addNewRepair={addNewRepair}
            isRenderRepairHistory={isRenderRepairHistory}
            values={values}
            setValues={setValues}
            errors={errors}
            // setEditedRepairItem={setEditedRepairItem}
            // isEditedRepairFormValue={isEditedRepairFormValue}
          />
        }
      />
    </Routes>
  );
}

export default App;
