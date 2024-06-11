import express from 'express';
import connectDB from './src/config/database.js';
import employeeRoutes from './src/routes/employeeRoutes.js';
import assetRoutes from './src/routes/assetRoutes.js';

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', employeeRoutes);
app.use('/api', assetRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
