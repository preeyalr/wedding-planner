import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Vendors from "./pages/Vendors"
import Guests from "./pages/Guests"
import Budget from "./pages/Budget"
import Profile from "./pages/Profile"
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/vendors" element={<Vendors />} />

        <Route path="/guests" element={<Guests />} />

        <Route path="/budget" element={<Budget />} />


<Route path="/profile" element={<Profile />} />
      </Routes>

    </BrowserRouter>

  )

}

export default App