import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {
  createBooking,
  getBookings,
  getBooking,
  updateBookingStatus,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/", protect, getBookings);
router.get("/:id", getBooking);
router.put("/:id/status", updateBookingStatus);

export default router;