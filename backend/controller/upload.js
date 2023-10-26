import express from 'express';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import streamfier from 'streamifier';
const router = express.Router();

const upload = multer();

router.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  const streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
      streamfier.createReadStream(req.file.buffer).pipe(stream);
    });
  };

  const result = await streamUpload(req).catch((error) => {
    console.log(error);
    res.status(500).json({ message: 'Error uploading file' });
  });

  res.status(200).json(result);
});

export default router;
