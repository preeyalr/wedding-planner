function Hero(){

  return(

    <div className="grid md:grid-cols-2 items-center px-10 md:px-20 py-16 gap-12">

      <div>

        <h1 className="font-heading text-5xl md:text-6xl text-[#3b2b2b] leading-tight">

          Hi There <br/>
          This is <br/>
          — Sanches <br/>
          Liza

        </h1>

        <p className="font-body mt-6 text-gray-600 max-w-md">

          Floral Designer, Wedding Planner, and Event Enthusiast who
          creates memorable moments for special occasions.

        </p>

        <button className="mt-6 bg-red-700 text-white px-6 py-3 rounded-md">

          Get in touch

        </button>

      </div>


      <div className="relative flex justify-center">

        <img
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9"
          className="w-80 md:w-96 rounded-lg shadow-lg"
        />

        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552"
          className="absolute bottom-0 left-0 w-32 rounded-lg"
        />

        <img
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf"
          className="absolute top-10 right-0 w-32 rounded-lg"
        />

      </div>

    </div>

  )

}

export default Hero