import { Outlet } from "react-router-dom";
import Sidebar from "../features/admin/components/Sidebar.jsx";
//import Header from "../features/admin/components/Header.jsx";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
        <Sidebar />
        <div className="flex flex-col">
                
            <main className="flex-1 overflow-auto p-6">
                <Outlet />
            </main>
        </div>
    </div>
  );
}