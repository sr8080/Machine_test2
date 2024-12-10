
const express = require('express');
const mongoose = require('mongoose');
const menuRoutes = require('./routes/Menu'); 
const { connectDB } = require('./config/db');
const cors = require('cors'); 
const dotenv=require('dotenv')
dotenv.config()
const app = express();

connectDB().then(() => {
  console.log('DB connected');
  app.use(cors());
  app.use(express.json());

  app.use('/api', menuRoutes);
});
 

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 5000');
});
