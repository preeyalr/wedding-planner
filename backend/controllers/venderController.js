import Vendor from "../models/vendors.js"

export const registerVendor = async (req, res) => {
  try {
    const {
      name,
      services,
      description,
      priceRange,
      location,
      contactPhone,
      contactEmail
    } = req.body;

    if (!name || !services || !contactEmail) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }

    // normalize services
    let servicesArray;

    if (Array.isArray(services)) {
      servicesArray = services;
    } else if (typeof services === "string") {
      servicesArray = services.split(",").map(s => s.trim());
    } else {
      return res.status(400).json({
        message: "Invalid services format",
      });
    }

    // validate services
    const allowedServices = ["photographer", "decorator", "caterer", "pandit"];

    const isValid = servicesArray.every(service =>
      allowedServices.includes(service)
    );

    if (!isValid) {
      return res.status(400).json({
        message: "Invalid service selected",
      });
    }

    // check duplicate
    const existingVendor = await Vendor.findOne({ contactEmail });
    if (existingVendor) {
      return res.status(400).json({
        message: "Vendor already exists",
      });
    }

    // create vendor
    const vendor = await Vendor.create({
      name,
      services: servicesArray,
      description,
      priceRange,
      location,
      contactPhone,
      contactEmail,
    });

    res.status(201).json({
      message: "Vendor registered successfully",
      vendor,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

