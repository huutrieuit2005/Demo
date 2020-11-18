import React from 'react';
import { delList, editList } from "../stores/employees/actions";
import { useDispatch } from 'react-redux';

interface Props {
  index: number;
}
const ButtonDelEdit: React.FC<Props> = (Props) => {
  const dispatch = useDispatch();
  return(
    <div className="cell">
      <button onClick={() => dispatch(delList(Props.index))}>Delete</button>
      <button onClick={() => dispatch(editList(Props.index))}>Edit</button>
      <button onClick={() => dispatch(editList(Props.index))}>Edit</button>
      <button onClick={() => dispatch(editList(Props.index))}>Edit</button>
    </div>
  );
}


export default ButtonDelEdit;