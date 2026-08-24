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

// UPLOAD IMAGE FILES
export const uploadImages = async (req, res) => {
  try {
    const category = req.body.category || "rooms";
    const title = req.body.title || "";
    const description = req.body.description || "";
    const images = await Gallery.insertMany(
      (req.files || []).map((file) => ({
        title,
        description,
        category,
        imageUrl: `${req.protocol}://${req.get("host")}/uploads/${file.filename}`,
      }))
    );
    res.status(201).json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};