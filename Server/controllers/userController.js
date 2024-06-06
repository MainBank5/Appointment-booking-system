const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: 'all credentials are required' });

  const userexist = await User.findOne({ email });
  if (userexist) return res.status(409).json({ message: 'User already exists! login instead' });

  const hashedpassword = bcrypt.hashSync(password, 10);
  //store the user details in the database
  const result = await User.create({
    name,
    email,
    password: hashedpassword,
  });
  console.log(result);

  if (result) {
    res.status(201).json({ message: 'User created successfully' });
  } else return res.status(500).json({ message: 'Something went wrong' });
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Login credentials required!' });
  }

  // Find user by email
  const finduser = await User.findOne({ email }).exec();

  // If user not found
  if (!finduser) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, finduser.password);

  if (isMatch) {
    // Create access token
    const accessToken = jwt.sign(
      { id: finduser._id, email: finduser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    // Create refresh token
    const refreshToken = jwt.sign(
      { id: finduser._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    // Save refresh token with the user
    finduser.refreshToken = refreshToken;
    await finduser.save();

    // Set refresh token as a cookie
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Send access token to be used on the client side
    res.status(200).json({ accessToken, message: 'Login successful' });
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

const handleUserLogout = asyncHandler( async ( req, res) => {
  //handle deletion of accesstoken on client side

  const cookies = res.cookies();
  if(!cookies.jwt) return res.status(204); //no content
  const refreshToken = cookies.jwt;

  //is the refreshToken in the database?
  const foundUser = await User.findOne({refreshToken}).exec().lean();
  if(!foundUser) {
      res.clearCookie('jwt', {httpOnly:true, sameSite:'None', maxAge:24 * 60 * 60 * 100});
      return res.sendStatus(204)
  }

  //delete the refreshToken in the database
  foundUser.refreshToken = [];
  const result = await foundUser.save();
  console.log(result);

  //clear the refreshToken cookie
  res.clearCookie('jwt', {httpOnly:true, sameSite:'None', maxAge:24 * 60 * 60 * 100});
  res.sendStatus(204);
})



module.exports = { userRegister, userLogin, updateUserDetails, handleUserLogout};
