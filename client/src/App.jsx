import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
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
import AppointmentPage from "./pages/ConsultantPages/AppointmentPage";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { User } = useContext(UserContext);
  const [socket, setsocket] = useState();
  useEffect(() => {
    if (User?.id) {
      if (socket) {
        socket.disconnect();
      }
      let conn = io.connect("http://localhost:5000", {
        auth: { id: User.id },
      });
      setsocket(conn);
      conn.emit("join");
    }
  }, [User?.id]);
  return (
    <BrowserRouter>
      <TheNavbar />
      <Routes>
        <Route element={<AuthenticatedRoutes />}>
          <Route path="/" element={<UserHomePage />} />
          <Route
            path="/create-appointment"
            element={<CreateAppointment socket={socket} />}
          />
          <Route path="/appointment-details" element={<AppointmentDetail />} />
          <Route path="/switch-role" element={<SwitchRolePage />} />
          <Route path="/consultant" element={<ConsultantHomePage />} />
          <Route path="/consultant-profile" element={<TheProfile />} />
          <Route path="/consultant/appointment" element={<AppointmentPage />} />
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
