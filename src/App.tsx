import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./view/Home";
import { EmployeeInfo } from "./view/EmployeeInfo";
import { RecordLists } from "./view/RecordLists";
import { Complete } from "./view/Complete";
import { EachLaptop } from "./view/EachLaptop";

const App = () => {
  return (
    <div data-testid="application">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-form" element={<EmployeeInfo />} />
          <Route path="/record-list" element={<RecordLists />} />
          <Route path="/record-list/:id" element={<EachLaptop />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
