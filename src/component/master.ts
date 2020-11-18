import React from 'react';
import { delList, editList } from "../stores/employees/actions";
import { useDispatch } from 'react-redux';

interface Props {
  index: number;
}
const Master: React.FC<Props> = (Props) => {
  const dispatch = useDispatch();
  return(
    <div className="cell">
    </div>
  );
}


export default ButtonDelEdit;