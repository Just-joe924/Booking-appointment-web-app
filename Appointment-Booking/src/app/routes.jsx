import { createBrowserRouter } from "react-router-dom";

// Layouts
import AppLayout from "../components/layout/AppLayout.jsx";
import AdminLayout from "../components/layout/AdminLayout.jsx";
import UserLayout from "../components/layout/UserLayout.jsx";

// User pages
import Dashboard from "../features/booking/pages/Dashboard.jsx";
import BookAppointment from "../features/booking/pages/BookAppointment.jsx";
import MyAppointments from "../features/booking/pages/MyAppointments.jsx";
import Login from "../features/booking/pages/Login.jsx";
import Portfolio from "../features/booking/pages/Portfolio.jsx";
import ProfileManagement from "../features/booking/pages/ProfileManagement.jsx";
import NotFound from "../features/booking/pages/NotFound.jsx";
import UserSettings from "../features/booking/pages/Settings.jsx";

// Admin pages
import AdminDashboard from "../features/admin/pages/AdminDashboard.jsx";
import ServiceManagement from "../features/admin/pages/ServiceManagement.jsx";
import StaffManagement from "../features/admin/pages/StaffManagement.jsx";
import ClientManagement from "../features/admin/pages/ClientManagement.jsx";
import Payments from "../features/admin/pages/Payments.jsx";
import Settings from "../features/admin/pages/Settings.jsx";
import CalenderPage from "../features/booking/pages/CalenderPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "bookings", element: <BookAppointment /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "clients", element: <ClientManagement /> },
      { path: "services", element: <ServiceManagement /> },
      { path: "staff", element: <StaffManagement /> },
      { path: "payments", element: <Payments /> },
      { path: "settings", element: <Settings /> },
      { path: "calender", element: <CalenderPage /> },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { index: true, element: <Portfolio /> },
      { path: "book", element: <BookAppointment /> },
      { path: "appointments", element: <MyAppointments /> },
      { path: "profile", element: <ProfileManagement /> },
      { path: "settings", element: <UserSettings /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;