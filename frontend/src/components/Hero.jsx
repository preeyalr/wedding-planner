import React from "react";

function Hero() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 items-center px-10 md:px-20 py-10 gap-10">

      {/* LEFT TEXT */}

      <div>

        <h1 className="text-5xl md:text-6xl font-serif leading-tight text-[#3b2b2b]">
          Hi There <br />
          This is <br />
          — Sanches <br />
          Liza
        </h1>

        <p className="mt-6 text-gray-600 max-w-md">
          Floral Designer, Wedding Planner, and Event Enthusiast who
          creates memorable moments for special occasions.
        </p>

        <button className="mt-6 bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800">
          Get in touch
        </button>

      </div>


      {/* RIGHT IMAGES */}

      <div className="relative flex justify-center">

        <img
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9"
          className="w-80 md:w-96 rounded-lg shadow-lg"
        />

        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552"
          className="absolute bottom-0 left-0 w-32 rounded-lg shadow-lg"
        />

        <img
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf"
          className="absolute top-10 right-0 w-32 rounded-lg shadow-lg"
        />

      </div>

    </div>
  );
}

export default Hero;