import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Sidebar from "./Sidebar"

function Navbar(){

  const [openSidebar, setOpenSidebar] = useState(false)

  // simulate login state
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate()

  const handleProfileClick = () => {
    navigate("/profile")
  }

  return(

<>
    <div className="flex justify-between items-center px-10 py-6 font-body">

      {/* Sidebar Button */}

      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className="text-2xl"
      >
        ☰
      </button>

      {/* Navigation Links */}

      <div className="flex gap-8 text-gray-700 text-sm">

        <Link to="/">Home</Link>
        <Link to="/vendors">Vendors</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/contact">Contact</Link>

      </div>

      {/* Logo */}

      <div className="font-heading text-xl">
        ◆ Descon
      </div>

      {/* Right Section */}

      <div className="flex items-center gap-4">

        {!isLoggedIn ? (

          <>
            <Link
              to="/login"
              className="border border-red-700 text-red-700 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800"
            >
              Sign Up
            </Link>
          </>

        ) : (

          <button
            onClick={handleProfileClick}
            className="text-2xl"
          >
            👤
          </button>

        )}

      </div>

    </div>

    {openSidebar && <Sidebar />}

</>

  )

}

export default Navbar