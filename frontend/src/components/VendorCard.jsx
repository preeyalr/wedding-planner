function VendorCard({ vendor }) {

  return (

    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">

      <img
        src={vendor.image}
        className="rounded-lg h-48 w-full object-cover"
      />

      <h3 className="font-heading text-xl mt-3">
        {vendor.name}
      </h3>

      <p className="font-body text-gray-500">
        {vendor.category}
      </p>

      <p className="font-body text-sm mt-1">
        ⭐ {vendor.rating}
      </p>

      <p className="font-body text-sm">
        {vendor.location}
      </p>

      <button className="mt-3 bg-red-700 text-white px-4 py-2 rounded w-full">
        Book Vendor
      </button>

    </div>

  )

}

export default VendorCard