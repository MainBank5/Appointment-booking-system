require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const corsOptions = require('./config/corsOptions');
const {verifyAccess} = require('./middleware/verifyAccess')

const PORT = process.env.PORT;

connectDB()

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(cors(corsOptions));

//public routes
app.use('/api/doctors', require('./routes/doctor/doctorRoute'));

//user routes
app.use('/api/user/register', require('./routes/user/userRoutes'));
app.use('/api/user/login', require('./routes/user/userRoutes'));
app.use('/api/user/logout', require('./routes/user/userRoutes'))

//doctor routes
app.use('/api/doctor/register', require('./routes/doctor/doctorRoute'));
app.use('/api/doctor/login', require('./routes/doctor/doctorRoute'));
app.use('api/doctor/logout', require('./routes/doctor/doctorRoute'));


app.use(verifyAccess);
//user-specific protected routes
app.use('/api/user/update', require('./routes/user/userUpdateRoute'));
app.use('/api/user/appointment', require('./routes/appointmentRoute'));
app.use('/api/user/review', require('./routes/reviewRoute'));

//doctor-specific protected routes
app.use('api/doctor/update', require('./routes/doctor/doctorRoute'));


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});