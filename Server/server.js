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

//user routes
app.use('/api/user/register', require('./routes/userRoutes/userRegisterRoute'));
app.use('/api/user/login', require('./routes/userRoutes/userLoginRoute'));

//doctor routes
app.use('/api/doctor/register', require('./routes/doctor/doctorRoute'));
app.use('/api/doctor/login', require('./routes/doctor/doctorRoute'));

app.use(verifyAccess);
app.use('/api/user/update', require('./routes/userRoutes/userUpdateRoute'));
app.use('/api/doctors', require('./routes/doctor/doctorRoute'));
app.use('/api/user/appointment', require('./routes/appointmentRoute'));
app.use('/api/user/review', require('./routes/reviewRoute'));


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});