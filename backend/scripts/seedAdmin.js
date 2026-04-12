import mongoose from 'mongoose';
import Admin from '../models/Admin.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const adminExists = await Admin.findOne({ email: 'surjeet636kumar@gmail.com' });

        if (adminExists) {
            console.log('Admin already exists');
            process.exit();
        }

        const admin = await Admin.create({
            name: 'Surjeet',
            email: 'surjeet636kumar@gmail.com',
            password: 'surjeet@123' // You should change this after login
        });
        console.log('Admin User Created Successfully');


        process.exit();
    } catch (error) {
        console.error('Error seeding admin:', error);
        process.exit(1);
    }
};

seedAdmin();
