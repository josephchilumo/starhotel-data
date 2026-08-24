import mongoose from "mongoose";

const facilitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
    },

    description: {
      type: String,
    },

    category: {
      type: String,
      enum: ["Leisure", "Wellness", "Dining", "Business", "Transport", "In-Room"],
      default: "Leisure",
    },

    available: {
      type: Boolean,
      default: true,
    },

    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Facility", facilitySchema);