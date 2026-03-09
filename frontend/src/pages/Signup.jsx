import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Signup(){

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault()

    try{

      const response = await axios.post(
        "http://localhost:8000/api/users/signup",
        {
          name:name,
          email:email,
          password:password
        }
      )

      console.log(response.data)

      alert("Signup successful!")

    }catch(error){

      console.log(error.response?.data || error.message)

      alert("Signup failed")

    }
  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-[#f6efe6] px-6">

      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">

        <h2 className="font-heading text-4xl text-center text-[#3b2b2b] mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 font-body">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full border p-3 rounded"
          />

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
            Sign Up
          </button>

        </form>

        <p className="text-center text-sm mt-4 font-body">

          Already have an account?

          <Link to="/login" className="text-red-700 ml-1">
            Login
          </Link>

        </p>

      </div>

    </div>

  )
}

export default Signup