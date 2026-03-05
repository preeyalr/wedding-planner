import { useParams } from "react-router-dom";
import { vendors } from "../data/vendors";

function VendorDetail() {

  const { id } = useParams();
  const vendor = vendors.find(v => v.id == id);

  return (
    <div>

      <h1 className="text-3xl mb-4">{vendor.name}</h1>

      <p>Category: {vendor.category}</p>
      <p>Rating: ⭐ {vendor.rating}</p>
      <p>Location: {vendor.location}</p>
      <p>Price: {vendor.price}</p>

      <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded">
        Book Vendor
      </button>

    </div>
  );
}

export default VendorDetail;