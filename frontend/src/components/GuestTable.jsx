function GuestTable() {

  const guests = [

    { name: "Rahul Sharma", phone: "9999999999", rsvp: "Yes" },
    { name: "Priya Verma", phone: "8888888888", rsvp: "No" },
    { name: "Amit Patel", phone: "7777777777", rsvp: "Pending" }

  ]

  return (

    <div className="bg-white shadow rounded p-6">

      <h2 className="font-heading text-2xl mb-4">
        Guest List
      </h2>

      <table className="w-full font-body">

        <thead>

          <tr className="border-b">

            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Phone</th>
            <th className="text-left py-2">RSVP</th>

          </tr>

        </thead>

        <tbody>

          {guests.map((guest, index) => (

            <tr key={index} className="border-b">

              <td className="py-2">{guest.name}</td>
              <td>{guest.phone}</td>
              <td>{guest.rsvp}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}

export default GuestTable