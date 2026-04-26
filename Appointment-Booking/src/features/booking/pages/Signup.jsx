import { useState } from "react";
import { NavLink } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import logo from "../../../assets/images/booklypro.png";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
        
        e.preventDefault();

        setLoading(true);
        setError("");

        const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
        });

        setLoading(false);

        if (error) {
        setError(error.message);
        return;
        }

        console.log("User signed up:", data);

        alert("Signup successful! Check your email.");
    }

  return (
    <div className="min-h-screen flex flex-col">
        {/*Header*/}
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
            <div className="flex items-center justify-center min-h-[70vh]">
                
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-8 rounded-xl shadow space-y-6"
            >
                <h2 className="text-xl font-bold text-center">Create A Business Account</h2>

                {error && (
                <p className="text-red-500 text-sm">{error}</p>
                )}

                <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                />

                <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                />

                <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--color-brand-primary)] text-white py-2 rounded"
                >
                {loading ? "Signing up..." : "Sign Up"}
                </button>

                  <p className="text-sm text-center text-gray-500">
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  className="text-[var(--color-brand-primary)] hover:underline"
                >
                  Login
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