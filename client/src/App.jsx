import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/UserPages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TheNavbar from "./components/TheNavbar";
import LogoutPage from "./pages/LogoutPage";
import {
  AuthenticatedRoutes,
  UnauthenticatedRoutes,
} from "./utils/ProtectedRoutes";
import CreateAppointment from "./pages/UserPages/CreateAppointment";
import AppointmentDetail from "./pages/UserPages/AppointmentDetail";
import SwitchRolePage from "./pages/SwitchRolePage";

function App() {
  return (
    <BrowserRouter>
      <TheNavbar />
      <Routes>
        <Route element={<AuthenticatedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-appointment" element={<CreateAppointment />} />
          <Route path="/appointment-details" element={<AppointmentDetail />} />
          <Route path="/switch-role" element={<SwitchRolePage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Route>
        <Route element={<UnauthenticatedRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
