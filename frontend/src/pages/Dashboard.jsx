function Dashboard() {

  return (
    <div>

      <h1 className="text-3xl mb-6">Wedding Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-red-100 p-6 rounded">
          Total Budget
          <h2 className="text-xl">₹4,00,000</h2>
        </div>

        <div className="bg-yellow-100 p-6 rounded">
          Guests
          <h2 className="text-xl">150</h2>
        </div>

        <div className="bg-green-100 p-6 rounded">
          Vendors Booked
          <h2 className="text-xl">6</h2>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;