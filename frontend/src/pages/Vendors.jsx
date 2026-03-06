import Sidebar from "../components/Sidebar"
import VendorCard from "../components/VendorCard"
import BackButton from "../components/BackButton"
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
    <section className="py-20 px-10 md:px-20 bg-white">

      <div className="text-center mb-14">

        <h2 className="font-heading text-4xl text-[#3b2b2b]">
          Explore Wedding Vendors
        </h2>

        <p className="font-body text-gray-500 mt-3 max-w-xl mx-auto">
          Discover trusted vendors for every wedding need — photographers,
          decorators, caterers, venues and more.
        </p>

      </div>
    <div className="flex">

      <Sidebar/>
       
      <div className="p-10 w-full">

        <BackButton/>
        <div className="p-10 w-full grid md:grid-cols-3 gap-6">

          {vendors.map((vendor,index)=>(

            <VendorCard key={index} vendor={vendor}/>

          ))}

        </div>

      </div>

    </div>
</section>
  )

}

export default Vendors