function GuestTable() {

  const guests = [
    { name: "Rahul", phone: "99999999", rsvp: "Yes" },
    { name: "Priya", phone: "88888888", rsvp: "No" }
  ];

  return (
    <table className="w-full border">

      <thead>
        <tr className="bg-gray-200">
          <th>Name</th>
          <th>Phone</th>
          <th>RSVP</th>
        </tr>
      </thead>

      <tbody>

        {guests.map((g, i) => (
          <tr key={i}>
            <td>{g.name}</td>
            <td>{g.phone}</td>
            <td>{g.rsvp}</td>
          </tr>
        ))}

      </tbody>

    </table>
  );
}

export default GuestTable;