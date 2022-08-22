import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import CheckPage_1 from "./pages/CheckPage_1";
import CheckPage_2 from "./pages/CheckPage_2";
import CheckPage_3 from "./pages/CheckPage_3";
import CheckPage_4 from "./pages/CheckPage_4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CheckPage_4" element={<CheckPage_4 />} />
        <Route path="/CheckPage_3" element={<CheckPage_3 />} />
        <Route path="/CheckPage_2" element={<CheckPage_2 />} />
        <Route path="/CheckPage_1" element={<CheckPage_1 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
