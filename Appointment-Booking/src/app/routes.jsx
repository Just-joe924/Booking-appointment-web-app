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
import AdminNav from "../features/admin/config/AdminNav.js";
import AdminDashboard from "../features/admin/pages/AdminDashboard.jsx";
import ServiceManagement from "../features/admin/pages/ServiceManagement.jsx";
import StaffManagement from "../features/admin/pages/StaffManagement.jsx";
import ClientManagement from "../features/admin/pages/ClientManagement.jsx";
import Payments from "../features/admin/pages/Payments.jsx";
import Settings from "../features/admin/pages/Settings.jsx";
//import Calender from "../features/booking/pages/CalendarPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    handle: { title: "Home" },
    children: [
      { index: true, element: <Dashboard />, handle: { title: "Dashboard" } },
      { path: "bookings", element: <BookAppointment />, handle: { title: "Book Appointment" } },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    handle: { title: "Login" },
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    handle: { title: "Admin" },
    children: AdminNav.map((item) => ({
      path: item.path,
      element: componentMap[item.path],
      handle: { title: item.label },
    }))
  },
  {
    path: "/user",
    element: <UserLayout />,
    handle: { title: "User" },
    children: [
      { index: true, element: <Portfolio />, handle: { title: "Portfolio" } },
      { path: "book", element: <BookAppointment />, handle: { title: "Book Appointment" } },
      { path: "appointments", element: <MyAppointments />, handle: { title: "My Appointments" } },
      { path: "profile", element: <ProfileManagement />, handle: { title: "Profile" } },
      { path: "settings", element: <UserSettings />, handle: { title: "Settings" } },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
    handle: { title: "Not Found" },
  },
]);

export default router;