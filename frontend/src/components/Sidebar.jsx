import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-60 bg-gray-100 h-screen p-5">
      <ul className="space-y-4">

        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/vendors">Vendors</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/guests">Guests</Link></li>
        <li><Link to="/budget">Budget</Link></li>
        <li><Link to="/website">Wedding Website</Link></li>

      </ul>
    </div>
  );
}

export default Sidebar;