import Sidebar from "../components/Sidebar"
import VendorCard from "../components/VendorCard"

function Vendors(){

  const vendors = [

    {
      name: "Royal Decorators",
      category: "Decoration",
      rating: 4.8,
      location: "Indore",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552"
    },

    {
      name: "Dream Photography",
      category: "Photography",
      rating: 4.7,
      location: "Bhopal",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf"
    }

  ]

  return(

    <div className="flex">

      <Sidebar/>

      <div className="p-10 w-full grid md:grid-cols-3 gap-6">

        {vendors.map((vendor,index)=>(

          <VendorCard key={index} vendor={vendor}/>

        ))}

      </div>

    </div>

  )

}

export default Vendors