import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"
function Navbar(){
   const [openSidebar, setOpenSidebar] = useState(false)
  return(
<>
    <div className="flex justify-between items-center px-10 py-6 font-body">
<button
        onClick={() => setOpenSidebar(!openSidebar)}
        className="text-2xl"
      >
        ☰
      </button>
      <div className="flex gap-8 text-gray-700 text-sm">
         
        <a href="#">About</a>
        <a href="#">Weddings</a>
        <a href="#">Events</a>
        <a href="#">Contact</a>

      </div>

      <div className="font-heading text-xl">
        ◆ Descon
      </div>
       
<Link
  to="/login"
  className="border border-red-700 text-red-700 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white"
>
Login
</Link>
      <button className="border border-red-700 text-red-700 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white transition">

        Let's talk

      </button>

    </div>
 {openSidebar && <Sidebar />}
</>
  )

}

export default Navbar