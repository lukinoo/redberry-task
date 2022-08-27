import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./view/home";
import { EmployeeInfo } from "./view/employeeInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<EmployeeInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
