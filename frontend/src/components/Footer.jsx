function Footer(){

  return(

    <footer className="bg-[#3b2b2b] text-white py-16 px-10 md:px-20">

      <div className="grid md:grid-cols-4 gap-10">

        {/* Brand */}

        <div>

          <h2 className="font-heading text-2xl mb-4">
            Wedding Planner
          </h2>

          <p className="font-body text-sm text-gray-300">
            Connecting couples with trusted vendors
            to plan their dream wedding effortlessly.
          </p>

        </div>


        {/* Company */}

        <div>

          <h3 className="font-heading text-lg mb-4">
            Company
          </h3>

          <ul className="font-body text-sm space-y-2 text-gray-300">

            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>

          </ul>

        </div>


        {/* Services */}

        <div>

          <h3 className="font-heading text-lg mb-4">
            Services
          </h3>

          <ul className="font-body text-sm space-y-2 text-gray-300">

            <li>Find Vendors</li>
            <li>Wedding Planner</li>
            <li>Guest Manager</li>
            <li>Budget Tracker</li>

          </ul>

        </div>


        {/* Support */}

        <div>

          <h3 className="font-heading text-lg mb-4">
            Support
          </h3>

          <ul className="font-body text-sm space-y-2 text-gray-300">

            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>

          </ul>

        </div>

      </div>


      {/* Bottom */}

      <div className="border-t border-gray-600 mt-10 pt-6 text-center font-body text-sm text-gray-400">

        © 2026 Wedding Planner Platform. All rights reserved.

      </div>

    </footer>

  )

}

export default Footer