import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

/**
 * Uploads a file buffer to Cloudinary (for MemoryStorage)
 * @param {Buffer} fileBuffer - The file buffer from multer
 * @returns {Promise<Object>} - Uploaded file metadata
 */
export const uploadFileBufferToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: process.env.CLOUDINARY_ASSET_FOLDER || 'portfolio_attachments',
        upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
        resource_type: 'auto'
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary buffer upload error:', error);
          return reject(error);
        }
        resolve(result);
      }
    );

    // Write the buffer to the stream
    uploadStream.end(fileBuffer);
  });
};

/**
 * Uploads a file (from path) to Cloudinary
 * @param {string} filePath - Path to the temporary file
 * @returns {Promise<Object>} - Uploaded file metadata
 */
export const uploadFileToCloudinary = async (filePath) => {
  try {
    const response = await cloudinary.uploader.upload(filePath, {
      folder: process.env.CLOUDINARY_ASSET_FOLDER || 'portfolio_attachments',
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
      resource_type: 'auto'
    });
    return response;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
};
