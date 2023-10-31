import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TheNavbar from "./components/TheNavbar";

function App() {
  return (
    <BrowserRouter>
      <TheNavbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
