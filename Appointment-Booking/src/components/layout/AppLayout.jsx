import { NavLink, Outlet } from "react-router-dom";
import Footer from "../layout/Footer.jsx"
import logo from "../../assets/images/booklypro.png";

function NavItem ({to, label}){
    return (
       <NavLink
            to = {to}
            className={({isActive}) =>
                [
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                    isActive?
                        "bg-[var(--color-brand-primary)] text-white"
                        : "text-slate-700 hover:bg-[var(--color-brand-primary)] ",  
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
            <header className="bg-[var(--color-brand-secondary)] text-[var(--color-text)] px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center tracking-wide">
                    <a href="/">
                        <svg width="240" height="60" viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg">
                            <text 
                                x="0" 
                                y="40" 
                                font-family="Arial, Helvetica, sans-serif" 
                                font-size="32" 
                                font-weight="800"
                                fill="white"
                            >
                                Bookly
                            </text>

                            <text 
                                x="120" 
                                y="40" 
                                font-family="Arial, Helvetica, sans-serif" 
                                font-size="32" 
                                font-weight="800"
                                fill="#25231e"
                            >
                                Pro
                            </text>
                        </svg>
                    </a>
                </div>

                {/* Nav Links */}
                <nav className = "flex items-center gap-6">
                    <NavItem to = "/" label = "Dashboard" />
                    <NavItem to = "/bookings" label = "Book Appointment" />
                    <NavItem to = "/login" label = "Login" />
                    <NavItem to = "/signup" label = "Sign up" />
                </nav>

            </header>

            <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-[var(--color-bg)]">
                <div className="max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>

            {/*Footer*/}
            <Footer/>
        </div>

        
    );
}