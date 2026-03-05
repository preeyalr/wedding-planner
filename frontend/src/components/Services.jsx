import React from "react";

function Services() {
  return (
    <section className="bg-[#f6efe6] py-20 px-6 md:px-20">

      {/* Title */}
      <div className="text-center mb-12">

        <p className="text-xs tracking-widest text-[#c79a63] uppercase">
          My Services
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-[#3b2b2b] mt-2">
          All you need is on me
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
          I will take care of everything for you from event planning
          and curation to design and production
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="relative group overflow-hidden rounded-lg">

          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf"
            className="w-full h-[420px] object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="bg-white px-8 py-5 text-center shadow-md">

              <h3 className="font-serif text-xl">Venue Dressing</h3>

              <p className="text-sm text-gray-500 mt-1">Learn more</p>

            </div>

          </div>

        </div>

        {/* Card 2 */}

        <div className="overflow-hidden rounded-lg">

          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
            className="w-full h-[420px] object-cover"
          />

        </div>

        {/* Card 3 */}

        <div className="overflow-hidden rounded-lg">

          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486"
            className="w-full h-[420px] object-cover"
          />

        </div>

      </div>

    </section>
  );
}

export default Services;