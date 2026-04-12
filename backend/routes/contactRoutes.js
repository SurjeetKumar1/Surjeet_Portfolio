import express from 'express';
import multer from 'multer';
import { submitContactForm, getAllContacts } from '../controllers/contactController.js';
import { protect } from '../middleware/authMiddleware.js';
import path from 'path';

const router = express.Router();

// Configure multer for memory storage
const storage = multer.memoryStorage();

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /pdf/;
        const mimetypes = /application\/pdf/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = mimetypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed!'));
        }
    },
    limits: { fileSize: 1024 * 1024 } // 1MB
});

router.post('/', upload.single('pdf'), submitContactForm);
router.get('/', protect, getAllContacts);

export default router;
