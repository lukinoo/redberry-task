import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./view/home";
import { EmployeeInfo } from "./view/employeeInfo";
import { RecordLists } from "./view/RecordLists";
// import { RecordInfo } from "./view/RecordInfo";
import { Complete } from "./view/Complete";

//will be removed
import { RecordCard } from "./components/RecordCard";
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
        <Route path="/test" element={<EachLaptop />} />

        {/* will be removed */}
        <Route
          path="/component"
          element={
            <RecordCard
              laptop={{
                id: 1,
                image:
                  "https://ict-imgs.vgcloud.vn/2022/07/15/21/macbook-air-m1-giam-gia-mot-chiec-laptop-dang-dong-tien-bat-gao.jpg",
                name: "HP",
              }}
              user={{
                name: "გელა",
                surname: "გელაშვილი",
              }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
