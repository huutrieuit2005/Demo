import React from "react";
import { EmpHeader } from "./component/EmpHeader";
import EmployeeList from "./component/EmpList";
import { ApplicationState } from "./stores";
import { Store } from "redux";
import { Provider } from "react-redux";
import EmpInsert from "./component/EmpInsert";

interface MainProps {
  store: Store<ApplicationState>;
}

const App: React.FC<MainProps> = ({ store }) => {
  return (
    <>
      <Provider store={store}>
        <div className="wrapper">
          <div className="table">
            <EmpHeader />
            <EmployeeList />
            <EmpInsert/>
          </div>
        </div>
      </Provider>
    </>
  );
};
export default App;
