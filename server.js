import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// ROUTES
import userRoutes from "./routes/userRoutes.js";
import accommodationRoutes from "./routes/accommodationRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import facilityRoutes from "./routes/facilityRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API ROUTES (clean structure)
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/accommodations", accommodationRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/facilities", facilityRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});