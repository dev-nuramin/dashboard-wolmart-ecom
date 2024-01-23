import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/User.js";

/**
 * @DESC Get all users data
 * @ROUTE /api/v1/user
 * @method GET
 * @access public
 */
export const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find();

  if (users.length === 0) {
    return res.status(404).json({ message: "User data not found" });
  }

  res.status(200).json(users);
});

/**
 * @DESC Get Single users data
 * @ROUTE /api/v1/user/:id
 * @method GET
 * @access public
 */
export const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ message: "User data not found" });
  }

  res.status(200).json(user);
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */ 
// this create user only admin can create a user
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, mobile, password, gender } = req.body;

  

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // chack email user
  const checkEmailUser = await User.findOne({email});
  
if(checkEmailUser){
  return res.status(400).json({ message: "This email already our record" });
}

// hash password

const hashPassword = await bcrypt.hash(password, 10)
 
  // create new user
  const user = await User.create({
    name,
    email,
    mobile,
    password: hashPassword,
    gender,
  });

  res.status(200).json({ user, message: "User created successfully" });
});

/**
 * @DESC Delete User
 * @ROUTE /api/v1/user/:id
 * @method DELETE
 * @access public
 */
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  res.status(200).json(user);
});

/**
 * @DESC Update User
 * @ROUTE /api/v1/user/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name, email, mobile, password, gender } = req.body;

  if (!name || !email || !mobile || !password || !gender) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findByIdAndUpdate(
    id,
    {
      name,
      email,
      mobile,
      password,
      gender,
    },
    { new: true }
  );

  res.status(200).json(user);
});
