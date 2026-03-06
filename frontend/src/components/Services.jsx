function Services(){

  return(

    <section className="py-20 px-10 md:px-20">

      <div className="text-center mb-12">

        <p className="text-xs tracking-widest text-[#c79a63] font-body uppercase">
          My Services
        </p>

        <h2 className="font-heading text-4xl text-[#3b2b2b] mt-2">
          All you need is on me
        </h2>

        <p className="font-body text-gray-500 mt-3 max-w-xl mx-auto">

          I will take care of everything for you from event planning
          and curation to design and production

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <img
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf"
          className="rounded-lg"
        />

        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
          className="rounded-lg"
        />

        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486"
          className="rounded-lg"
        />

      </div>

    </section>

  )

}

export default Services