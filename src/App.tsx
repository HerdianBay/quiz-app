import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./style/global-style.css";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
