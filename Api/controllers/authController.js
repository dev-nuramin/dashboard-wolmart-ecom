import User from "../models/User.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";
/**
 * @DESC login
 * @Route /api/v1/auth
 * @method POST
 * @access public
 */

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // check validation
  const loggingUser = await User.findOne({ email });
  //if not found in valid user
  if (!loggingUser) {
    return res
      .status(400)
      .json({ message: "Sorry this email not in our record" });
  }

  //validation password
  const passwordCheck = await bcrypt.compare(password, loggingUser.password);

  // if password do not match
  if (!passwordCheck) {
    return res.status(400).json({ message: "wrong password" });
  }

  // create access token
  const tokenUser = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN,
  });

  // create refrehtoken
  const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE_IN,
  });

  // set cookie
  res.cookie("accessToken", tokenUser, {
    httpOnly : true,
    path: '/',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: process.env.APP_ENV === "Development" ? false : true,
    sameSite: "strict"
  });

  res.status(200).json({
    user: loggingUser,
    tokenUser,
    message: "User loggin succesful"
  });
});

// create logout user

export const logout = (req, res) => {
  res.clearCookie("accessToken");
  res.status(200).json({ message: "User logout successful" });
};

/**
 * @DESC Create new User
 * @ROUTE /api/v1/auth/registar
 * @method POST
 * @access public
 */
// this create user only admin can create a user
export const registar = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // chack email user
  const checkEmailUser = await User.findOne({ email });

  if (checkEmailUser) {
    return res.status(400).json({ message: "This email already our record" });
  }

  // hash password

  const hashPassword = await bcrypt.hash(password, 10);

  // create new user
  const user = await User.create({
    name,
    email,

    password: hashPassword,
  });

  res.status(200).json({ user, message: "User created successfully" });
});

/***
 * @DESC Create me
 * @ROUTE /api/v1/auth/me
 * @method Get
 * @access public
 */
export const loggedInUser = asyncHandler(async(req, res) => {
  res.status(200).json(req.me)
})


