const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   firstName: { type: String, minLength: 2, maxLength: 20, required: true },
//   lastName: { type: String, minLength: 2, maxLength: 20, required: true },
//   username: { type: String, minLength: 5, maxLength: 20, unique: true, required: true },
//   email: {
//     type: String,
//     lowercase: true,
//     minLength: 5,
//     maxLength: 30,
//     unique: true,
//     required: true,
//   },
//   password: { type: String, minLength: 8, maxLength: 30, required: true },
//   phoneNumber: { type: String, minLength: 7, maxLength: 15 },
//   image: { type: String, data: Buffer },
//   signupDate: {
//     type: Date,
//     default: () => Date.now(),
//   },
// });

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  image: { type: String, data: Buffer },
  signupDate: {
    type: Date,
    default: () => Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
