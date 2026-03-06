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
            Your Complete Wedding Planning Platform
          </h2>

          <div className="flex gap-12 mt-10">

            <div>

              <h3 className="font-heading text-3xl text-[#3b2b2b]">
                We simplify wedding planning by connecting <br />
couples with trusted vendors and powerful <br />
planning tools in one place.
              </h3>

              <p className="font-body text-sm text-gray-500">
              500+ Trusted Vendors <br />
10,000+ Couples Planned Weddings <br />
25+ Cities Covered
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