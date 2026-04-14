import express from "express";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import {
  createAccommodation,
  getAccommodations,
  getAccommodation,
  updateAccommodation,
  deleteAccommodation,
} from "../controllers/accommodationController.js";

const router = express.Router();

router.post("/", protect, adminOnly, createAccommodation);
router.get("/", getAccommodations);
router.get("/:id", getAccommodation);
router.put("/:id", protect, adminOnly, updateAccommodation);
router.delete("/:id",protect, adminOnly,  deleteAccommodation);

export default router;