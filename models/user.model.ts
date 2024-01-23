import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
  },
  username: {
    type: String,
    required: [true, "please provide a username"],
    unique: true,
  },
  state: {
    type: String,
    required: [true, "please provide a state"],
  },
  country: {
    type: String,
    required: [true, "please provide a country"],
  },
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
