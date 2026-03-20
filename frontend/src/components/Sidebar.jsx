import { Link } from "react-router-dom";
import { useLogout } from "../pages/Logout";
import { useContext } from "react";
import { UserContext } from "../contexts/ContextUser";
function Sidebar() {
  const { user } = useContext(UserContext);
  const isLoggedIn = !!user;
  const handlelogout = useLogout();

  return (
    <div className="w-64 min-h-screen bg-white shadow-md p-6 font-body">
      <h2 className="font-heading text-2xl mb-8">Wedding Planner</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/vendors">Vendors</Link>

        <Link to="/guests">Guests</Link>

        <Link to="/budget">Budget</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="text-left text-red-600 hover:text-red-800"> Login</Link>
          </>
        ) : (
          <button
            className="text-left text-red-600 hover:text-red-800"
            onClick={handlelogout}
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
}

export default Sidebar;
