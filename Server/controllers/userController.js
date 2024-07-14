const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password, photo} = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: 'all credentials are required' });

  const userexist = await User.findOne({ email });
  if (userexist) return res.status(409).json({ message: 'User already exists! login instead' });

  const hashedpassword = bcrypt.hashSync(password, 10);
  //store the user details in the database
  const result = await User.create({
    name,
    email,
    photo,
    password: hashedpassword,
  });
  console.log(result);

  if (result) {
    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: result._id,
        name: result.name,
        email: result.email,
        photo: result.photo,
      }, });
  } else return res.status(500).json({ message: 'Something went wrong' });
});



const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Login credentials required!' });
  }

  // Find user by email and exclude password and refreshToken fields
  const foundUser = await User.findOne({ email }).select('+password').exec();

  // If user not found
  if (!foundUser) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, foundUser.password);

  if (isMatch) {
    // Create access token
    const accessToken = jwt.sign(
      { id: foundUser._id, email: foundUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    // Create refresh token
    const refreshToken = jwt.sign(
      { id: foundUser._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    // Save refresh token with the user
    foundUser.refreshToken = refreshToken;
    await foundUser.save();

    // Exclude password and refreshToken fields from user data
    const userData = await User.findById(foundUser._id).select('-password -refreshToken -email');

    // Set refresh token as a cookie
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite:"None",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Send access token and user data to be used on the client side
    res.status(200).json({ accessToken, userData, message: 'Login successful' });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
});




const updateUserDetails = asyncHandler(async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: 'User id required!' });

  const foundUser = await User.findOne({ _id: req.params.id }).exec();
  if (!foundUser) {
    return res.status(204).json({ message: 'No user with that ID was found' })
   };
  const { name, email, password, bloodType, gender, phone, photo } = req.body;
  if (name) foundUser.name = name;
  if (email) foundUser.email = email;
  if (password) foundUser.password = await bcrypt.hash(password, 10);
  if (bloodType) foundUser.bloodType = bloodType;
  if (gender) foundUser.gender = gender;
  if (phone) foundUser.phone = phone;
  if (photo) foundUser.photo = photo;

  await foundUser.save();
  res.status(200).json({ message: 'User details updated successfully!' });
});


const handleUserLogout = asyncHandler(async (req, res) => {
  console.log('Logout request received');
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    console.log('No JWT cookie found');
    return res.sendStatus(204); // No content
  }
  
  const refreshToken = cookies.jwt;
  console.log('Refresh token:', refreshToken);
  
  // Check if the refresh token is in the database
  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    console.log('User not found in database');
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' });
    return res.sendStatus(204);
  }

  // Delete the refresh token from the database
  foundUser.refreshToken = foundUser.refreshToken.filter(token => token !== refreshToken);
  const result = await foundUser.save();
  console.log('User updated:', result);

  // Clear the refresh token cookie
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' });
  res.sendStatus(204);
});






module.exports = { userRegister, userLogin, updateUserDetails, handleUserLogout};
