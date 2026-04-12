import Contact from '../models/Contact.js';
import { uploadFileBufferToCloudinary } from '../utils/cloudinary.js';

export const submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const file = req.file;

        let fileUrl = '';
        let cloudinaryPublicId = '';

        if (file) {
            // Upload buffer to Cloudinary
            const cloudinaryResult = await uploadFileBufferToCloudinary(file.buffer);
            fileUrl = cloudinaryResult.secure_url;
            cloudinaryPublicId = cloudinaryResult.public_id;
        }

        const contact = await Contact.create({
            name,
            email,
            message,
            fileUrl,
            cloudinaryPublicId
        });

        res.status(201).json({
            success: true,
            data: contact,
            message: 'Message sent successfully!'
        });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error. Please try again later.'
        });
    }
};

export const getAllContacts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const totalItems = await Contact.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);

        const contacts = await Contact.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            success: true,
            count: contacts.length,
            pagination: {
                totalItems,
                totalPages,
                currentPage: page,
                limit
            },
            data: contacts
        });
    } catch (error) {
        console.error('Fetch contacts error:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
