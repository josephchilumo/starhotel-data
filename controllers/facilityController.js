import Facility from "../models/Facility.js";

// CREATE
export const createFacility = async (req, res) => {
  try {
    const facility = await Facility.create(req.body);
    res.status(201).json(facility);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
export const getFacilities = async (req, res) => {
  try {
    const facilities = await Facility.find();
    res.json(facilities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteFacility = async (req, res) => {
  try {
    await Facility.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};