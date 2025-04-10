import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'

dotenv.config(); // <-- Add this line before using process.env

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(3000, () => {
  console.log("server listing on port 3000.....");
});

app.use("/api/user",userRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the API root!');
});
