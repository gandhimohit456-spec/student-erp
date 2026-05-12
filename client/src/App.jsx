import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Marks from "./pages/Marks";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path ="/dashboard" element={<Dashboard />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/marks" element={<Marks />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;