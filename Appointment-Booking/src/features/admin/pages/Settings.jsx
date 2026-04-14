import { useState } from "react";
import { Save, Building2, Clock, Bell, Palette } from "lucide-react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const defaultHours = Object.fromEntries(
  days.map((day) => [
    day,
    {
      open: day === "Sunday" ? false : true,
      start: "09:00",
      end: day === "Saturday" ? "15:00" : "18:00",
    },
  ])
);

function Section({ title, Icon, children }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
        <Icon className="h-4 w-4 text-[var(--color-brand-secondary)]" />
        <h2 className="font-bold text-slate-800 text-base">{title}</h2>
      </div>
      <div className="px-6 py-5 space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)]/30 focus:bg-white transition";

export default function Settings() {
  const [hours, setHours] = useState(defaultHours);
  const [saved, setSaved] = useState(false);

  const [notifications, setNotifications] = useState({
    newBooking: true,
    cancellation: true,
    payment: false,
    reminder: true,
  });

  const toggleDay = (day) =>
    setHours((prev) => ({
      ...prev,
      [day]: { ...prev[day], open: !prev[day].open },
    }));

  const updateHour = (day, field, value) =>
    setHours((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-8 space-y-6" style={{ fontFamily: "Pompiere" }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Settings</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your business preferences</p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-xl transition ${
            saved ? "bg-emerald-500" : "bg-[var(--color-brand-secondary)] hover:opacity-90"
          }`}
        >
          <Save className="h-4 w-4" />
          {saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      {/* Business Info */}
      <Section title="Business Information" Icon={Building2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Business Name">
            <input className={inputClass} defaultValue="Inki-J Beauty Studio" />
          </Field>
          <Field label="Phone Number">
            <input className={inputClass} defaultValue="+234 801 234 5678" />
          </Field>
          <Field label="Email Address">
            <input className={inputClass} defaultValue="hello@inkij.com" />
          </Field>
          <Field label="Location / Address">
            <input className={inputClass} defaultValue="12 Ikorodu Rd, Lagos, Nigeria" />
          </Field>
        </div>
        <Field label="Business Description">
          <textarea
            className={inputClass + " resize-none h-24"}
            defaultValue="Premium nail and hair studio serving Lagos with care and creativity."
          />
        </Field>
      </Section>

      {/* Business Hours */}
      <Section title="Business Hours" Icon={Clock}>
        <div className="space-y-3">
          {days.map((day) => {
            const { open, start, end } = hours[day];
            return (
              <div key={day} className="flex items-center gap-4">
                <label className="flex items-center gap-2 w-36 shrink-0 cursor-pointer">
                  <div
                    onClick={() => toggleDay(day)}
                    className={`w-9 h-5 rounded-full transition-colors relative cursor-pointer ${
                      open ? "bg-[var(--color-brand-secondary)]" : "bg-slate-200"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 h-4 w-4 bg-white rounded-full shadow transition-transform ${
                        open ? "translate-x-4" : "translate-x-0.5"
                      }`}
                    />
                  </div>
                  <span className={`text-sm font-medium ${open ? "text-slate-700" : "text-slate-400"}`}>
                    {day}
                  </span>
                </label>

                {open ? (
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <input
                      type="time"
                      value={start}
                      onChange={(e) => updateHour(day, "start", e.target.value)}
                      className="border border-slate-200 rounded-lg px-2 py-1 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)]/30"
                    />
                    <span className="text-slate-400">to</span>
                    <input
                      type="time"
                      value={end}
                      onChange={(e) => updateHour(day, "end", e.target.value)}
                      className="border border-slate-200 rounded-lg px-2 py-1 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)]/30"
                    />
                  </div>
                ) : (
                  <span className="text-sm text-slate-400 italic">Closed</span>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Notifications */}
      <Section title="Notifications" Icon={Bell}>
        <div className="space-y-3">
          {[
            { key: "newBooking", label: "New Booking", desc: "Get notified when a new appointment is made" },
            { key: "cancellation", label: "Cancellations", desc: "Alert when a client cancels an appointment" },
            { key: "payment", label: "Payment Received", desc: "Notify when a payment is confirmed" },
            { key: "reminder", label: "Appointment Reminders", desc: "Send reminders before upcoming sessions" },
          ].map(({ key, label, desc }) => (
            <div key={key} className="flex items-center justify-between py-2">
              <div>
                <div className="text-sm font-medium text-slate-700">{label}</div>
                <div className="text-xs text-slate-400">{desc}</div>
              </div>
              <div
                onClick={() =>
                  setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
                }
                className={`w-9 h-5 rounded-full transition-colors relative cursor-pointer ${
                  notifications[key] ? "bg-[var(--color-brand-secondary)]" : "bg-slate-200"
                }`}
              >
                <div
                  className={`absolute top-0.5 h-4 w-4 bg-white rounded-full shadow transition-transform ${
                    notifications[key] ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Branding */}
      <Section title="Branding" Icon={Palette}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Primary Color">
            <div className="flex items-center gap-3">
              <input type="color" defaultValue="#ff5e6c" className="h-10 w-10 rounded-lg border border-slate-200 cursor-pointer" />
              <span className="text-sm text-slate-500">#ff5e6c</span>
            </div>
          </Field>
          <Field label="Secondary Color">
            <div className="flex items-center gap-3">
              <input type="color" defaultValue="#ffaaab" className="h-10 w-10 rounded-lg border border-slate-200 cursor-pointer" />
              <span className="text-sm text-slate-500">#ffaaab</span>
            </div>
          </Field>
        </div>
      </Section>
    </div>
  );
}