import { NavLink, Outlet } from "react-router-dom";

function NavItem ({to, label}){
    return (
       <NavLink
            to = {to}
            className={({isActive}) =>
                [
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                    isActive?
                        "bg-[var(--color-brand-primary)] text-white"
                        : "text-slate-700 hover:bg-slate-100",  
                ].join(" ")
        }
        >
            <span>{label}</span>
        </NavLink>
    )
}

export default function AppLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            {/*Header*/}
            <header className="bg-[var(--color-brand-primary)] text-white px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="font-bold text-lg">Inki-J</div>

                {/* Nav Links */}
                <nav className = "flex items-center gap-6">
                    <NavItem to = "/" label = "Dashboard" />
                    <NavItem to = "/bookings" label = "Book Appointment" />
                </nav>

                {/*Actions */}
                <NavLink 
                    to = "/login" 
                    className="bg-[var(--color-brand-primary)] text-[var(--color-text)] flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-100"
                >
                        Login
                </NavLink>
            </header>

            <main className="flex-1 bg-gray-50 overflow-y-auto p-4 md:p-6 lg:p-8 bg-[var(--color-bg)]">
                <div className="max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>

            {/*Footer*/}
            <footer>
                <div className="bg-[var(--color-brand-primary)] text-white text-center py-4">
                    &copy; 2026 Inki-J. All rights reserved.
                </div>
            </footer>
        </div>

        
    );
}