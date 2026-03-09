import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Login(){

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault()

    try{

      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          email: email,
          password: password
        },
        {
           withCredentials: true   // ⭐ important for cookies
        }
      )

      console.log(response.data)

      if(response.data.success){
        alert("Login successful!")

        // cookie already stored automatically
        navigate("/profile")
      }

    }catch(error){

      console.log(error.response?.data || error.message)

      alert(error.response?.data?.message ||"Login failed")

    }
  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-[#f6efe6] px-6">

      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">

        <h2 className="font-heading text-4xl text-center text-[#3b2b2b] mb-6">
          Login to Your Wedding Planner
        </h2>

        <p className="text-center mb-4">
          Manage your wedding planning dashboard <br/>
          and connect with vendors.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 font-body">

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-red-700 text-white py-3 rounded hover:bg-red-800"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm mt-4 font-body">
          Don't have an account?
          <Link to="/signup" className="text-red-700 ml-1">
            Sign Up
          </Link>
        </p>

      </div>

    </div>

  )

}

export default Login