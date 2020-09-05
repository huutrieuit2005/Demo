import React from "react";
import { CellLabel } from "./CellLabel";

export const EmpHeader: React.FC = () => {
  return (
    <div className="row header">
      <CellLabel value="Name" />
      <CellLabel value="Age" />
      <CellLabel value="Occupation" />
      <CellLabel value="Location" />
      <CellLabel value="Insert/Delete/Edit" />
    </div>
  );
};
