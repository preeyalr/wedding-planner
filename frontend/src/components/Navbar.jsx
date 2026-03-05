import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-6">

      <div className="flex gap-8 text-gray-700 text-sm">
        <a href="#">About</a>
        <a href="#">Weddings</a>
        <a href="#">Events</a>
        <a href="#">Contact</a>
      </div>

      <div className="font-semibold text-lg">◆ Descon</div>

      <button className="border border-red-700 text-red-700 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white transition">
        Let's talk
      </button>

    </div>
  );
}

export default Navbar;