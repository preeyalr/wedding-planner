import React, { useState, useEffect } from "react";
import { Home, User, Settings, Menu, Search, Sun, Moon, Users, Wallet, Store } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const links = [
    { name: "Dashboard", icon: <Home size={22} />, path: "/dashboard" },
    { name: "Profile", icon: <User size={22} />, path: "/profile" },
    { name: "Vendors", icon: <Store size={22} />, path: "/vendors" },
    { name: "Budget", icon: <Wallet size={22} />, path: "/budget" },
    { name: "Guests", icon: <Users size={22} />, path: "/guests" },
    { name: "Settings", icon: <Settings size={22} />, path: "/settings" }
  ];

  return (
    <div className={`flex min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-[#f6efe6]"}`}>

      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 m-4 rounded-xl shadow-lg p-6 flex flex-col justify-between
        ${isOpen ? "w-64" : "w-20"}
        ${darkMode ? "bg-gray-800" : "bg-white"}
        `}
      >

        <div>

          {/* Header */}
          <div className="flex flex-row-reverse items-center justify-between mb-6">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu />
            </button>

            {isOpen && (
              <span className="text-lg font-heading tracking-wide">
                Wedding Planner
              </span>
            )}
          </div>

          {/* Search */}
          {isOpen ? (
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 text-gray-400" size={18}/>
              <input
                type="text"
                placeholder="Search vendors..."
                className="w-full pl-9 pr-3 py-2 rounded-md border focus:outline-none"
              />
            </div>
          ) : (
            <div className="flex justify-center mb-6">
              <Search size={22} />
            </div>
          )}

          {/* Dark Mode Toggle */}
          <div className={`mb-6 flex ${isOpen ? "justify-end" : "justify-center"}`}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-3">

            {links.map((link, index) => (

              <Link
                key={index}
                to={link.path}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-red-100 transition"
              >
                {link.icon}
                {isOpen && <span>{link.name}</span>}
              </Link>

            ))}

          </nav>

        </div>

        {/* Footer */}
        {isOpen && (
          <p className="text-sm text-gray-400 text-center">
            Wedding Planner © 2026
          </p>
        )}

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        <h1 className="text-2xl font-heading mb-4">
          Wedding Dashboard
        </h1>

        <p className="text-gray-500 font-body">
          Manage your wedding planning, vendors, budget, and guests.
        </p>

      </main>

    </div>
  );
};

export default Sidebar;