import { useMatches } from "react-router-dom";
import { Search, House, Bell, ChevronRight } from "lucide-react";

export default function Header() {
  const matches = useMatches();

  // Get deepest matched route
  const currentMatch = matches[matches.length - 1];

  const title = currentMatch?.handle?.title || "Dashboard";

  return (
    <div className="h-20 w-full flex items-center justify-between px-8 shadow-md"
      style={{
        backgroundColor: "var(--color-brand-secondary)",
        fontFamily: "'Pompiere', sans-serif",
      }}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
          <House size={16} color="white" />
        </div>

        <ChevronRight size={14} color="rgba(255,255,255,0.6)" />

        <span className="text-base font-semibold tracking-wide text-[var(--color-bg)]">
          {title}
        </span>
      </div>

      {/* Right side unchanged */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full w-60 border bg-[var(--color-brand-primary)] border-white/30">
          <Search size={15} className="text-[var(--color-text)]" />
          <input
            type="text"
            placeholder="Search resources..."
            className="bg-transparent outline-none w-full text-sm text-[var(--color-text)]"
          />
        </div>

        <button className="relative flex items-center justify-center w-9 h-9 rounded-full border bg-white/20 border-white/30">
          <Bell size={16} color="white" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full border border-white bg-[var(--color-bg)]" />
        </button>

        <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 border-white/40 bg-[var(--color-bg)] text-[var(--color-brand-secondary)]">
          AJ
        </div>
      </div>
    </div>
  );
}