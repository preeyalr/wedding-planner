import { Link } from "react-router-dom"

function Sidebar() {

  return (

    <div className="w-64 min-h-screen bg-white shadow-md p-6 font-body">

      <h2 className="font-heading text-2xl mb-8">
        Wedding Planner
      </h2>

      <nav className="flex flex-col gap-4">

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/vendors">Vendors</Link>

        <Link to="/guests">Guests</Link>

        <Link to="/budget">Budget</Link>

        <Link to="/login">Logout</Link>

      </nav>

    </div>

  )

}

export default Sidebar