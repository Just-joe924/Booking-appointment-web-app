import { useState } from "react";
import { CheckCircle2, Clock, XCircle, Download, Search, TrendingUp } from "lucide-react";

const mockPayments = [
  { id: "INV-001", client: "Adaeze Okonkwo", service: "Nail Treatment", amount: 8500, date: "Apr 12, 2026", method: "Transfer", status: "paid" },
  { id: "INV-002", client: "Chioma Eze", service: "Haircut & Style", amount: 5000, date: "Apr 12, 2026", method: "Cash", status: "paid" },
  { id: "INV-003", client: "Fatima Bello", service: "Consultation", amount: 2000, date: "Apr 11, 2026", method: "Transfer", status: "pending" },
  { id: "INV-004", client: "Ngozi Adeyemi", service: "Follow-up", amount: 1500, date: "Apr 10, 2026", method: "Cash", status: "failed" },
  { id: "INV-005", client: "Blessing Osei", service: "Gel Manicure", amount: 10000, date: "Apr 10, 2026", method: "Card", status: "paid" },
  { id: "INV-006", client: "Amaka Nwosu", service: "Braiding", amount: 15000, date: "Apr 9, 2026", method: "Transfer", status: "paid" },
  { id: "INV-007", client: "Sola Afolabi", service: "Nail Treatment", amount: 8500, date: "Apr 8, 2026", method: "Card", status: "pending" },
];

const statusConfig = {
  paid: { label: "Paid", Icon: CheckCircle2, className: "text-emerald-600 bg-emerald-50" },
  pending: { label: "Pending", Icon: Clock, className: "text-amber-600 bg-amber-50" },
  failed: { label: "Failed", Icon: XCircle, className: "text-red-500 bg-red-50" },
};

const summaryStats = [
  { label: "Total Revenue", value: "₦486,000", sub: "This month", color: "#34d399" },
  { label: "Pending", value: "₦10,500", sub: "Awaiting payment", color: "#fbbf24" },
  { label: "Transactions", value: "128", sub: "This month", color: "#60a5fa" },
];

export default function Payments() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = mockPayments.filter((p) => {
    const matchesSearch =
      p.client.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-8 space-y-6" style={{ fontFamily: "Pompiere" }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Payments</h1>
          <p className="text-slate-500 text-sm mt-1">Track invoices and transactions</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-slate-50 transition">
          <Download className="h-4 w-4" />
          Export
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {summaryStats.map(({ label, value, sub, color }) => (
          <div key={label} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <TrendingUp className="h-4 w-4" style={{ color }} />
              {label}
            </div>
            <div className="text-2xl font-bold text-slate-800">{value}</div>
            <div className="text-xs text-slate-400">{sub}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by client or invoice ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)]/30"
          />
        </div>
        <div className="flex gap-2">
          {["all", "paid", "pending", "failed"].map((f) => (
            <button
              key={f}
              onClick={() => setStatusFilter(f)}
              className={`text-xs px-3 py-2 rounded-xl font-medium capitalize transition ${
                statusFilter === f
                  ? "bg-[var(--color-brand-secondary)] text-white"
                  : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-400 uppercase tracking-wide bg-slate-50">
                <th className="px-6 py-3 font-semibold">Invoice</th>
                <th className="px-6 py-3 font-semibold">Client</th>
                <th className="px-6 py-3 font-semibold">Service</th>
                <th className="px-6 py-3 font-semibold">Amount</th>
                <th className="px-6 py-3 font-semibold">Method</th>
                <th className="px-6 py-3 font-semibold">Date</th>
                <th className="px-6 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-slate-400 text-sm">
                    No transactions found.
                  </td>
                </tr>
              ) : (
                filtered.map((p) => {
                  const { label, Icon, className } = statusConfig[p.status];
                  return (
                    <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-slate-500">{p.id}</td>
                      <td className="px-6 py-4 font-medium text-slate-700">{p.client}</td>
                      <td className="px-6 py-4 text-slate-500">{p.service}</td>
                      <td className="px-6 py-4 font-bold text-slate-800">
                        ₦{p.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-slate-500">{p.method}</td>
                      <td className="px-6 py-4 text-slate-500">{p.date}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${className}`}>
                          <Icon className="h-3 w-3" />
                          {label}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ); 
}