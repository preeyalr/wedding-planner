function WebsiteBuilder() {
  return (
    <div>

      <h1 className="text-3xl mb-4">Wedding Website Builder</h1>

      <input
        type="text"
        placeholder="Couple Name"
        className="border p-2 mr-3"
      />

      <button className="bg-red-600 text-white px-4 py-2 rounded">
        Generate Website
      </button>

    </div>
  );
}

export default WebsiteBuilder;