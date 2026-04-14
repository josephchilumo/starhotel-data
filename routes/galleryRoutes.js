import express from "express";
import {
  createImage,
  getGallery,
  deleteImage,
} from "../controllers/galleryController.js";

const router = express.Router();

router.post("/", createImage);
router.get("/", getGallery);
router.delete("/:id", deleteImage);

export default router;