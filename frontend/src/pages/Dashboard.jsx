import Sidebar from "../components/Sidebar"

function Dashboard() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="p-10 w-full">

        <h1 className="font-heading text-4xl mb-6">
          Wedding Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 shadow rounded">
            Guests
            <h2 className="text-2xl">120</h2>
          </div>

          <div className="bg-white p-6 shadow rounded">
            Vendors
            <h2 className="text-2xl">6</h2>
          </div>

          <div className="bg-white p-6 shadow rounded">
            Budget
            <h2 className="text-2xl">₹4,50,000</h2>
          </div>

        </div>

      </div>

    </div>

  )

}

export default Dashboard