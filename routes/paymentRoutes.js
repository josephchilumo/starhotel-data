import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {
  createPayment,
  getPayments,
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/", protect, createPayment);
router.get("/", getPayments);

export default router;