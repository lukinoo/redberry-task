import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./view/home";
import { EmployeeInfo } from "./view/employeeInfo";
import { RecordLists } from "./view/RecordLists";
// import { RecordInfo } from "./view/RecordInfo";
import { Complete } from "./view/Complete";

//will be removed
import { EachLaptop } from "./view/EachLaptop";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-form" element={<EmployeeInfo />} />
        <Route path="/record-list" element={<RecordLists />} />
        <Route path="/record-list/:id" element={<EachLaptop />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
