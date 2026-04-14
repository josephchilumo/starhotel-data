import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["rooms", "exterior", "events", "amenities"],
      default: "rooms",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);