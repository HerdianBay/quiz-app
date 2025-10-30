import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./style/global-style.css";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Route>
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
