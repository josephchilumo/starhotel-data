import express from "express";
import {
  createFacility,
  getFacilities,
  deleteFacility,
} from "../controllers/facilityController.js";

const router = express.Router();

router.post("/", createFacility);
router.get("/", getFacilities);
router.delete("/:id", deleteFacility);

export default router;