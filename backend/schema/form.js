import mongoose from "mongoose";
const { Schema } = mongoose;

const formSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"], //It just checks for basic structure: something@something.something
  },
  text: { type: String, required: true, trim: true },
  date: { type: Date, default: Date.now },
});

const Form = mongoose.model("Form", formSchema);
export default Form;
