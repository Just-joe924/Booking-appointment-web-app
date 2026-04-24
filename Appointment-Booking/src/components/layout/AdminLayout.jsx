import { Outlet } from "react-router-dom";
import Sidebar from "../../features/admin/components/Sidebar.jsx";
import Header from "../../features/admin/components/Header.jsx";
import Footer from "../layout/Footer.jsx"

export default function AdminLayout() {
  return (
    <div className="min-h-full bg-slate-50 flex">
        <Sidebar />
        <div className="flex flex-col flex-1 min-h-full overflow-hidden">
          <Header/>
            <main className="flex-1 overflow-auto p-6">
                <Outlet />
            </main>
          
          <Footer />
        </div>
    </div>
  );
}