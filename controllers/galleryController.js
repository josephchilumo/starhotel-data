import Gallery from "../models/Gallery.js";

// CREATE
export const createImage = async (req, res) => {
  try {
    const image = await Gallery.create(req.body);
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
export const getGallery = async (req, res) => {
  try {
    const images = await Gallery.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteImage = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};