import React, { useEffect } from "react";
import { CellLabel } from "./CellLabel";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../stores/employees/actions";
import { ApplicationState } from "../stores";
import ButtonDelEdit from "./ButtonDelEdit";


const EmpList:React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  
  const data = useSelector((state:ApplicationState) => state.list.data);
  return (
    <>
      {data.map((info,index) => (
        <div className="row" key={index}>
          <CellLabel value={info.name} />
          <CellLabel value={info.age} />
          <CellLabel value={info.occupation} />
          <CellLabel value={info.location} />
          <ButtonDelEdit index={index}  />
        </div>
      ))}
    </>
  )
}

export default EmpList;
