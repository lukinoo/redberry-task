import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./view/home";
import { EmployeeInfo } from "./view/employeeInfo";

//this will be removed
import { PhotoUpload } from "./components/PhotoUpload";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-form" element={<EmployeeInfo />} />
        <Route path="/component/PhotoUpload" element={<PhotoUpload onUpload={() => {}}  isError={true}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
