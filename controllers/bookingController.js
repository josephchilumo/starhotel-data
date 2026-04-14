import Booking from "../models/Booking.js";

// CREATE BOOKING
export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL BOOKINGS
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user")
      .populate("accommodation");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET SINGLE BOOKING
export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("user")
      .populate("accommodation");

    if (!booking) return res.status(404).json({ msg: "Not found" });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE STATUS (confirm/cancel)
export const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};