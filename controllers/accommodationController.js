import Accommodation from "../models/Accommodation.js";

// CREATE
export const createAccommodation = async (req, res) => {
  try {
    const acc = await Accommodation.create(req.body);
    res.status(201).json(acc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
export const getAccommodations = async (req, res) => {
  try {
    const accs = await Accommodation.find().populate("facilities");
    res.json(accs);
  } catch (error) {
    console.error("❌ getAccommodations error:", error); // ← add this
    res.status(500).json({ error: error.message, stack: error.stack }); // ← add stack
  }
};

// GET ONE
export const getAccommodation = async (req, res) => {
  try {
    const acc = await Accommodation.findById(req.params.id).populate("facilities");
    if (!acc) return res.status(404).json({ msg: "Not found" });
    res.json(acc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateAccommodation = async (req, res) => {
  try {
    const acc = await Accommodation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!acc) return res.status(404).json ({msg:"Not found"});
    res.json(acc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteAccommodation = async (req, res) => {
  try {
    const acc = await Accommodation.findByIdAndDelete(req.params.id);
    if (!acc) return res.status(404).json({msg: "Not found"});
    res.json({ msg: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};