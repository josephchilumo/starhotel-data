import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {
  createImage,
  getGallery,
  deleteImage,
  uploadImages,
} from "../controllers/galleryController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();
const uploadDirectory = path.join(path.dirname(fileURLToPath(import.meta.url)), "../uploads");
const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (_req, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase();
    callback(null, `${Date.now()}-${Math.random().toString(36).slice(2)}${extension}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, callback) => {
    callback(null, file.mimetype.startsWith("image/"));
  },
});

router.post("/", createImage);
router.post("/upload", protect, adminOnly, upload.array("images", 12), uploadImages);
router.get("/", getGallery);
router.delete("/:id", deleteImage);

export default router;