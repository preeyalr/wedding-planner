const services = [
  {
    title: "Find Trusted Vendors",
    desc: "Discover photographers, decorators, caterers, venues and more from our verified vendor network.",
    icon: "💍"
  },
  {
    title: "Wedding Planning Tools",
    desc: "Organize your events and tasks easily with our all-in-one wedding planning dashboard.",
    icon: "📅"
  },
  {
    title: "Guest Manager",
    desc: "Create guest lists, track RSVPs and manage seating arrangements smoothly.",
    icon: "👥"
  },
  {
    title: "Budget Tracker",
    desc: "Track your wedding expenses and keep your spending within your planned budget.",
    icon: "💰"
  },
  {
    title: "Wedding Inspiration",
    desc: "Explore beautiful wedding ideas and get inspired for your big day.",
    icon: "✨"
  },
  {
    title: "Vendor Booking",
    desc: "Connect with vendors directly and book services easily through the platform.",
    icon: "📸"
  }
]

function Services() {

  return (

    <section className="py-20 px-10 md:px-20 bg-[#f6efe6]">

      <div className="text-center mb-16">

        <h2 className="font-heading text-4xl text-[#3b2b2b]">
          Everything You Need To Plan Your Wedding
        </h2>

        <p className="font-body text-gray-500 mt-4 max-w-xl mx-auto">
          Our platform connects couples with trusted vendors and powerful
          planning tools to make wedding planning simple and stress-free.
        </p>

      </div>


      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service,index)=>(
          
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">

            <div className="text-3xl mb-4">
              {service.icon}
            </div>

            <h3 className="font-heading text-xl mb-2">
              {service.title}
            </h3>

            <p className="font-body text-gray-500 text-sm">
              {service.desc}
            </p>

          </div>

        ))}

      </div>

    </section>

  )

}

export default Services