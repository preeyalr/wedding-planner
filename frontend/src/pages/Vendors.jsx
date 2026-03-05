import VendorCard from "../components/VendorCard";
import { vendors } from "../data/vendors";

function Vendors() {
  return (
    <div>

      <h1 className="text-3xl mb-6">Wedding Vendors</h1>

      <div className="grid grid-cols-3 gap-6">

        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}

      </div>

    </div>
  );
}

export default Vendors;