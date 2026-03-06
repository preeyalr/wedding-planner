const images = [
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
  "https://images.unsplash.com/photo-1529636798458-92182e662485"
]

function InstagramGallery() {

  return (

    <section className="bg-[#f6efe6] py-20 px-6 md:px-20">

      {/* Title */}

      <div className="text-center mb-12">

        <h2 className="font-heading text-4xl md:text-5xl text-[#3b2b2b]">
          Wedding Inspiration Gallery
        </h2>

        <p className="font-body text-gray-500 text-sm mt-2">
          Explore beautiful weddings planned through
our platform and get inspired for your big day.
        </p>

      </div>


      {/* Gallery */}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {images.map((img, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-lg"
          >

            <img
              src={img}
              className="w-full h-60 object-cover hover:scale-110 transition duration-500"
            />

          </div>

        ))}

      </div>

    </section>

  )

}

export default InstagramGallery