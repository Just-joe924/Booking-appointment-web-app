import { NavLink } from "react-router-dom";
import AdminConsole from "../../../assets/icons/admin-console.svg";
import { AdminNav } from "../config/AdminNav.js"
import { LogOut } from "lucide-react";
import logo from "../../../assets/images/booklypro.png";

export default function Sidebar() {
    return (
        <aside
            className="w-64 border-r bg-[var(--color-brand-secondary)] px-4 py-6 flex flex-col shrink-0"
            style={{ fontFamily: "Pompiere" }}
        >
            {/* Brand */}
            <div className="flex items-center gap-3 px-3 mb-8">
                <div className="h-9 w-9 rounded-full bg-white/20 grid place-items-center">
                    <img src={AdminConsole} alt="" className="h-4 w-4" />
                </div>
                <div>
                    <div className="flex items-center ">
                        <a href="/admin">
                            <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="12" fill="#25231e" className="rounded-md"/>
                                <text 
                                    x="40%" 
                                    y="50%" 
                                    text-anchor="middle" 
                                    font-family="Arial, Helvetica, sans-serif" 
                                    font-size="20" 
                                    font-weight="800"
                                    fill="white"
                                >
                                    B
                                </text>
                            </svg>
                        </a>
                    </div>
                    <div className="text-xs text-white/60">Admin Console</div>
                </div>
            </div>

            <nav className="mt-6">
            {AdminNav.map((item) => {
                const Icon = item.icon;
                return (
                    <NavLink
                        key={item.path}
                        to={`/admin/${item.path}`}
                        end={item.path === ""}
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 ${
                            isActive ? "bg-white/20 text-white shadow-inner" : "text-[var(--color-text)] hover:bg-white/10 hover:text-white/70"
                            }`
                        }
                    >
                            <Icon className="h-4 w-4 shrink-0" size={20} />
                            <span>{item.label}</span>
                    </NavLink>
                );
            })}
            </nav>

            <div className="flex-1" />

            <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-text)] transition-all hover:bg-white/10 hover:text-white">
            <LogOut className="h-4 w-4 shrink-0" />
            <span>Logout</span>
            </button>
        </aside>
    )
}