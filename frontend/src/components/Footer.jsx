import React from "react";

function Footer() {
  return (
    <footer className="bg-[#f6efe6] py-16 px-6 md:px-20">

      {/* Logo */}
      <div className="text-center mb-10">
        <h3 className="text-lg font-semibold">◆ Descon</h3>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-8 text-sm text-gray-600 mb-10 flex-wrap">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Menu</a>
        <a href="#">Blog</a>
        <a href="#">Contact us</a>
      </div>

      {/* Contact + Hours */}

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">

        <div className="border p-6 text-center">
          <h4 className="font-semibold mb-2">Contact us</h4>
          <p className="text-sm text-gray-600">
            New york, America
          </p>
          <p className="text-sm text-gray-600">
            +201823487940
          </p>
        </div>

        <div className="border p-6 text-center">
          <h4 className="font-semibold mb-2">Working hours</h4>
          <p className="text-sm text-gray-600">
            Monday–Friday : 08:00 – 05:00
          </p>
          <p className="text-sm text-gray-600">
            Saturday–Sunday : 08:00 – 05:00
          </p>
        </div>

      </div>

      {/* Social Icons */}

      <div className="flex justify-center gap-4 text-gray-500 mb-6">
        <span>📷</span>
        <span>📘</span>
        <span>🐦</span>
      </div>

      {/* Copyright */}

      <div className="text-center text-xs text-gray-500">
        Copyright Template by Otpace LLC. Powered by Otpace LLC
      </div>

    </footer>
  );
}

export default Footer;