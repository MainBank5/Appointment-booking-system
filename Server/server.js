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

app.use('/api/user/register', require('./routes/userRoutes/userRegisterRoute'));
app.use('/api/user/login', require('./routes/userRoutes/userLoginRoute'));

app.use('/api/doctor/register', require('./routes/doctorRoutes/doctorRegisterRoute'));
app.use('/api/doctor/login', require('./routes/doctorRoutes/doctorLoginRoute'));

app.use(verifyAccess);
app.use('/api/user/update', require('./routes/userRoutes/userUpdateRoute'));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});