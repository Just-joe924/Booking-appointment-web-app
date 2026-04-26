import { useState } from "react";
import { NavLink } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import logo from "../../../assets/images/booklypro.png";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const formIsValid =
    emailIsValid &&
    formData.password.trim().length >= 6;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formIsValid) {
      setError("Please enter a valid email and a password of at least 6 characters.");
      return;
    }

    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    console.log("Logged in user:", data.user);

    // Example redirect
    window.location.href = "/admin";
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-20 w-full flex items-center justify-between px-8 shadow-md bg-[var(--color-brand-secondary)]">
          <div className="text-2xl md:text-3xl font-extrabold tracking-wide">
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
      </header>

      <main>
          <div className="flex items-center justify-center p-6 md:p-12">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6"
            >
              {/* Title */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Welcome Back
                </h2>
                <p className="text-sm text-gray-500">
                  Login to your account
                </p>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-lg bg-red-50 text-red-600 px-4 py-3 text-sm">
                  {error}
                </div>
              )}

              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={!formIsValid || loading}
                className="w-full py-2 rounded-lg font-semibold text-white bg-[var(--color-brand-primary)] hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Footer */}
              <p className="text-sm text-center text-gray-500">
                Don’t have an account?{" "}
                <NavLink
                  to="/signup"
                  className="text-[var(--color-brand-primary)] hover:underline"
                >
                  Sign up
                </NavLink>
              </p>
            </form>
          </div>
      </main>

      {/*Footer*/}
      <footer>
        <div className="h-20 w-full bg-[var(--color-brand-secondary)] flex items-center justify-between mt-12 px-8 shadow-md">
          <span className="text-center  font-semibold text-[var(--color-text)] font-medium py-4">
            &copy; 2026 BooklyPro. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}