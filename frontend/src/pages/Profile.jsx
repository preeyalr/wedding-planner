import { useNavigate } from "react-router-dom"
import { FaHome, FaArrowLeft, FaUserEdit } from "react-icons/fa"

function Profile(){

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  return(

    <div className="min-h-screen bg-[#f6efe6] flex justify-center items-center px-6">

      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

        {/* Top Buttons */}

        <div className="flex justify-between mb-6">

          <button
            onClick={()=>navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-black"
          >
            <FaArrowLeft/>
            Back
          </button>

          <button
            onClick={()=>navigate("/")}
            className="text-gray-600 hover:text-black"
          >
            <FaHome size={20}/>
          </button>

        </div>

        {/* Profile Title */}

        <h1 className="font-heading text-3xl text-center mb-6">
          Your Profile
        </h1>

        {/* Avatar */}

        <div className="flex justify-center mb-6">

          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center text-3xl text-red-700">
            👤
          </div>

        </div>

        {/* User Info */}

        <div className="space-y-3 text-center font-body">

          <p className="text-lg font-semibold">
            {user?.name}
          </p>

          <p className="text-gray-500">
            {user?.email}
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-col gap-3">

          <button className="flex items-center justify-center gap-2 bg-red-700 text-white py-3 rounded hover:bg-red-800">

            <FaUserEdit/>
            Edit Profile

          </button>

          <button
            onClick={()=>navigate("/dashboard")}
            className="border border-gray-300 py-3 rounded hover:bg-gray-100"
          >
            Go to Dashboard
          </button>

        </div>

      </div>

    </div>

  )
}

export default Profile