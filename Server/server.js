require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const corsOptions = require('./config/corsOptions');

const PORT = process.env.PORT;

connectDB()

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/user/register', require('./routes/userRoutes/userregisterRoute'));
app.use('/user/login', require('./routes/userRoutes/userLoginRoute'));
app.use('/user/update/:id', require('./routes/userRoutes/userUpdateRoute'));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});