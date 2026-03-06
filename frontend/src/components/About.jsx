function About() {

  return (

    <section className="bg-[#f6efe6] py-20 px-6 md:px-20">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}

        <div>

          <p className="font-body text-xs uppercase tracking-widest text-[#c79a63]">
            About us
          </p>

          <h2 className="font-heading text-4xl md:text-5xl text-[#3b2b2b] mt-2 leading-tight">
            Interior design <br />
            that matters
          </h2>

          <div className="flex gap-12 mt-10">

            <div>

              <h3 className="font-heading text-3xl text-[#3b2b2b]">
                1K+
              </h3>

              <p className="font-body text-sm text-gray-500">
                Regular customer in <br /> every month
              </p>

            </div>

            <div>

              <h3 className="font-heading text-3xl text-[#3b2b2b]">
                5+
              </h3>

              <p className="font-body text-sm text-gray-500">
                Years of <br /> experience
              </p>

            </div>

          </div>

        </div>


        {/* RIGHT IMAGES */}

        <div className="flex gap-6 justify-center">

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552"
            className="w-48 md:w-56 rounded-lg object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
            className="w-48 md:w-56 rounded-lg object-cover mt-10"
          />

        </div>

      </div>

    </section>

  )

}

export default About