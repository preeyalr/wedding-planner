function Navbar() {
  return (
    <div className="bg-red-700 text-white h-20 flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold">ShaadiPlanner</h1>

      <input
        type="text"
        placeholder="Search vendors..."
        className="px-4 py-2 rounded text-black"
      />

      <div className="flex gap-4">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </div>
  );
}

export default Navbar;