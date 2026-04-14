import { useState } from "react";
import { Search, Plus, Phone, Mail, MoreHorizontal, Filter } from "lucide-react";

const mockClients = [
  { id: 1, name: "Adaeze Okonkwo", email: "adaeze@mail.com", phone: "0801 234 5678", totalBookings: 8, lastVisit: "Apr 10, 2026", status: "active" },
  { id: 2, name: "Chioma Eze", email: "chioma@mail.com", phone: "0802 345 6789", totalBookings: 3, lastVisit: "Apr 5, 2026", status: "active" },
  { id: 3, name: "Fatima Bello", email: "fatima@mail.com", phone: "0803 456 7890", totalBookings: 12, lastVisit: "Mar 28, 2026", status: "active" },
  { id: 4, name: "Ngozi Adeyemi", email: "ngozi@mail.com", phone: "0804 567 8901", totalBookings: 1, lastVisit: "Feb 14, 2026", status: "inactive" },
  { id: 5, name: "Blessing Osei", email: "blessing@mail.com", phone: "0805 678 9012", totalBookings: 5, lastVisit: "Apr 12, 2026", status: "active" },
  { id: 6, name: "Amaka Nwosu", email: "amaka@mail.com", phone: "0806 789 0123", totalBookings: 2, lastVisit: "Mar 3, 2026", status: "inactive" },
];

function Avatar({ name }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const colors = ["#ff5e6c", "#a78bfa", "#34d399", "#fbbf24", "#60a5fa", "#f472b6"];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div
      className="h-9 w-9 rounded-full grid place-items-center text-white text-xs font-bold shrink-0"
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}

export default function ClientManagement() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = mockClients.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || c.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-8 space-y-6" style={{ fontFamily: "Pompiere" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Clients</h1>
          <p className="text-slate-500 text-sm mt-1">{mockClients.length} total clients</p>
        </div>
        <button className="flex items-center gap-2 bg-[var(--color-brand-secondary)] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition">
          <Plus className="h-4 w-4" />
          Add Client
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search clients by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)]/30"
          />
        </div>
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2">
          <Filter className="h-4 w-4 text-slate-400" />
          {["all", "active", "inactive"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs px-3 py-1 rounded-lg capitalize font-medium transition ${
                filter === f
                  ? "bg-[var(--color-brand-secondary)] text-white"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Clients Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-400 uppercase tracking-wide bg-slate-50">
                <th className="px-6 py-3 font-semibold">Client</th>
                <th className="px-6 py-3 font-semibold">Contact</th>
                <th className="px-6 py-3 font-semibold">Bookings</th>
                <th className="px-6 py-3 font-semibold">Last Visit</th>
                <th className="px-6 py-3 font-semibold">Status</th>
                <th className="px-6 py-3 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-slate-400 text-sm">
                    No clients found.
                  </td>
                </tr>
              ) : (
                filtered.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar name={c.name} />
                        <span className="font-medium text-slate-700">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <Mail className="h-3 w-3" /> {c.email}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <Phone className="h-3 w-3" /> {c.phone}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-700 font-semibold">{c.totalBookings}</td>
                    <td className="px-6 py-4 text-slate-500">{c.lastVisit}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                          c.status === "active"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-1.5 rounded-lg hover:bg-slate-100 transition text-slate-400">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}