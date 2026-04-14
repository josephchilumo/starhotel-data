import Payment from "../models/Payment.js";
import Booking from "../models/Booking.js";

// CREATE PAYMENT
export const createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);

    // If payment successful → confirm booking
    if (payment.status === "completed") {
      await Booking.findByIdAndUpdate(payment.booking, {
        status: "confirmed",
      });
    }

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET PAYMENTS
export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate("booking")
      .populate("user");

    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};