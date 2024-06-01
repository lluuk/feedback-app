import express from 'express';
import mongoose from 'mongoose';
import feedbackRoutes from './routes/feedback';

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URL as string);

app.use(express.json());

app.use('/api/feedback', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
