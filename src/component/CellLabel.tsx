import React from 'react';


interface Props  {
  value: string;
}

export const CellLabel: React.FC<Props> = (props) => {
  return(
      <div className="cell">
          {props.value}
      </div>
  );
}