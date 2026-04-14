import { useState } from "react";
import { Plus, Scissors, Star, MoreHorizontal, Phone, Mail } from "lucide-react";

const mockStaff = [
  {
    id: 1,
    name: "Josephine Ike",
    role: "Senior Stylist",
    email: "jo@inkij.com",
    phone: "0801 000 0001",
    services: ["Haircut & Style", "Braiding"],
    rating: 4.9,
    bookingsThisMonth: 34,
    status: "available",
  },
  {
    id: 2,
    name: "Temi Adeyinka",
    role: "Nail Technician",
    email: "temi@inkij.com",
    phone: "0802 000 0002",
    services: ["Nail Treatment", "Gel Manicure"],
    rating: 4.7,
    bookingsThisMonth: 28,
    status: "busy",
  },
  {
    id: 3,
    name: "Kemi Okafor",
    role: "Junior Stylist",
    email: "kemi@inkij.com",
    phone: "0803 000 0003",
    services: ["Consultation", "Follow-up", "Haircut & Style"],
    rating: 4.5,
    bookingsThisMonth: 19,
    status: "off",
  },
  {
    id: 4,
    name: "Sade Martins",
    role: "Senior Nail Tech",
    email: "sade@inkij.com",
    phone: "0804 000 0004",
    services: ["Nail Treatment", "Gel Manicure"],
    rating: 4.8,
    bookingsThisMonth: 31,
    status: "available",
  },
];

const statusConfig = {
  available: { label: "Available", className: "bg-emerald-50 text-emerald-600" },
  busy: { label: "In Session", className: "bg-amber-50 text-amber-600" },
  off: { label: "Day Off", className: "bg-slate-100 text-slate-500" },
};

const avatarColors = ["#ff5e6c", "#a78bfa", "#34d399", "#fbbf24"];

function StaffCard({ member }) {
  const color = avatarColors[member.id % avatarColors.length];
  const initials = member.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  const { label, className } = statusConfig[member.status];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="h-11 w-11 rounded-xl grid place-items-center text-white font-bold text-sm shrink-0"
            style={{ backgroundColor: color }}
          >
            {initials}
          </div>
          <div>
            <h3 className="font-bold text-slate-800">{member.name}</h3>
            <p className="text-xs text-slate-500">{member.role}</p>
          </div>
        </div>
        <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 transition">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Rating & Bookings */}
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1 text-amber-500 font-semibold">
          <Star className="h-4 w-4 fill-amber-400" />
          {member.rating}
        </div>
        <div className="text-slate-500 text-xs">
          <span className="font-semibold text-slate-700">{member.bookingsThisMonth}</span> bookings this month
        </div>
      </div>

      {/* Services */}
      <div className="flex flex-wrap gap-1.5">
        {member.services.map((s) => (
          <span
            key={s}
            className="text-xs bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-lg flex items-center gap-1"
          >
            <Scissors className="h-3 w-3" />
            {s}
          </span>
        ))}
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-1">
        <a
          href={`mailto:${member.email}`}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700"
        >
          <Mail className="h-3 w-3" /> {member.email}
        </a>
        <span className="flex items-center gap-1.5 text-xs text-slate-500">
          <Phone className="h-3 w-3" /> {member.phone}
        </span>
      </div>

      {/* Status */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-50">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${className}`}>
          {label}
        </span>
        <button className="text-xs text-[var(--color-brand-secondary)] font-semibold hover:underline">
          View Schedule
        </button>
      </div>
    </div>
  );
}

export default function StaffManagement() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? mockStaff : mockStaff.filter((m) => m.status === filter);

  return (
    <div className="p-8 space-y-6" style={{ fontFamily: "Pompiere" }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Staff</h1>
          <p className="text-slate-500 text-sm mt-1">{mockStaff.length} team members</p>
        </div>
        <button className="flex items-center gap-2 bg-[var(--color-brand-secondary)] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition">
          <Plus className="h-4 w-4" />
          Add Staff
        </button>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {["all", "available", "busy", "off"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-sm px-4 py-1.5 rounded-xl font-medium capitalize transition ${
              filter === f
                ? "bg-[var(--color-brand-secondary)] text-white"
                : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {f === "all" ? "All Staff" : statusConfig[f]?.label ?? f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5">
        {filtered.map((member) => (
          <StaffCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}