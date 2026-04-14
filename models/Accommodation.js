import mongoose from "mongoose";

const accommodationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    occupancy: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    
    description:{
      type: String,
      required: true,
    },

    capacity: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    images: [
      {
        type: String,
      },
    ],

    facilities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Facility",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Accommodation", accommodationSchema);