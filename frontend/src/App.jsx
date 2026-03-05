import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Vendors from "./pages/Vendors";
import VendorDetail from "./pages/VendorDetail";
import Bookings from "./pages/Bookings";
import Guests from "./pages/Guests";
import Budget from "./pages/Budget";
import WebsiteBuilder from "./pages/WebsiteBuilder";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="p-6 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/vendor/:id" element={<VendorDetail />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/guests" element={<Guests />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/website" element={<WebsiteBuilder />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;