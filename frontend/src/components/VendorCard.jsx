import { Link } from "react-router-dom";

function VendorCard({ vendor }) {
  return (
    <div className="border p-4 rounded-lg shadow">

      <img
        src="https://via.placeholder.com/300"
        className="rounded mb-3"
      />

      <h2 className="text-xl font-bold">{vendor.name}</h2>

      <p>{vendor.category}</p>
      <p>⭐ {vendor.rating}</p>
      <p>{vendor.location}</p>
      <p className="font-semibold">{vendor.price}</p>

      <Link
        to={`/vendor/${vendor.id}`}
        className="bg-red-600 text-white px-4 py-2 rounded mt-3 inline-block"
      >
        View Details
      </Link>

    </div>
  );
}

export default VendorCard;