import {
  LayoutDashboard,
  UserRoundCog,
  HandPlatter,
  UsersRound,
  CreditCard,
  Settings,
  Calendar,
} from "lucide-react";

export const AdminNav = [
  { path: "", label: "Dashboard", icon: LayoutDashboard },
  { path: "clients", label: "Client Management", icon: UserRoundCog },
  { path: "services", label: "Service Management", icon: HandPlatter },
  { path: "staff", label: "Staff Management", icon: UsersRound },
  { path: "payments", label: "Payments", icon: CreditCard },
  { path: "settings", label: "Settings", icon: Settings },
  { path: "calendar", label: "Calendar", icon: Calendar},
];
