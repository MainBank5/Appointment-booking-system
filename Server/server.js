require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT;

//connectDB()

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(cors(corsOptions));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//mongoose.connection.once('open', () => {
    //console.log('Connected to MongoDB');
    
//});//