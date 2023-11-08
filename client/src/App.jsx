import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHomePage from "./pages/UserPages/HomePage";
import ConsultantHomePage from "./pages/ConsultantPages/HomePage";
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
import TheProfile from "./pages/ConsultantPages/TheProfile";

function App() {
  return (
    <BrowserRouter>
      <TheNavbar />
      <Routes>
        <Route element={<AuthenticatedRoutes />}>
          <Route path="/" element={<UserHomePage />} />
          <Route path="/create-appointment" element={<CreateAppointment />} />
          <Route path="/appointment-details" element={<AppointmentDetail />} />
          <Route path="/switch-role" element={<SwitchRolePage />} />
          <Route path="/consultant" element={<ConsultantHomePage />} />
          <Route path="/consultant-profile" element={<TheProfile />} />
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
