import React from "react";

function CTA() {
  return (
    <section className="bg-[#d8c9bc] py-20 text-center px-6">

      <h2 className="text-3xl md:text-4xl font-serif text-[#3b2b2b]">
        Are you ready to plan
        <br />
        a special day
      </h2>

      <p className="text-gray-600 mt-4 max-w-lg mx-auto text-sm">
        We will take care of everything for you from event planning
        and curation to design and production
      </p>

      <button className="mt-6 bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800 transition">
        Let's talk
      </button>

    </section>
  );
}

export default CTA;