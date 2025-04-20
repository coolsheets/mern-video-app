import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import interactionsRouter from './routes/interactions.js';
import authRouter from './routes/auth.js'; // Import the auth routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS globally
// app.use(cors({
//   origin: 'http://localhost:5173', // Replace with your frontend's URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
// }));

app.use(cors());

// Parse JSON requests
app.use(express.json());

// API routes
app.use('/api', interactionsRouter);
app.use('/api', authRouter); // Add the auth routes

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});