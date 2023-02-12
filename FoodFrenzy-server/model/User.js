import mongoose from "mongoose";

let userSchema = mongoose.Schema;

let schema = new userSchema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: false,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let User = mongoose.model("user", schema);
export default User;
