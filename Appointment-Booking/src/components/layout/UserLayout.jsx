import { NavLink, Outlet }, from "react-router-dom";

function NavItem ({to, label, Icon}){
    return (
       <NavLink
            to = {to}
            className={({isActive}) =>
                [
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                    isActive?
                        "bg-[var(--color-brand-primary)] text-white"
                        : "text-slate-70 hover:bg-slate-100",  
                ].join("")
        }
        >
            <Icon className = "h-4 w-4 "/>
            <span>{label}</span>
        </NavLink>
    )
}

export default function UserLayout(){
    return(
        <>
            <div className = "min-h-screen bg-slate-50 flex">
                <aside className = "w-72 border-r bg-[var(--color-brand-primary) px-5 py-6 flex flex-col" style = {{fontFamily: Pompiere}}>
                    <div className = "flex items-center gap-3">
                        <div className = "h-10 w-10 bg-[var(--color-brand-secondary)] grid place-items-center font-bold">
                        Inki-J
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}