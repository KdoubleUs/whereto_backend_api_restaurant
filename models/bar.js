import mongoose from "mongoose";
const Schema = mongoose.Schema;

let bar = new Schema({
  image: { type: String },
  name: { type: String },
  catogory: { type: String },
  description: { type: String },
  hours: {
    Monday: { type: String },
    Tuesday: { type: String },
    Wednesday: { type: String },
    Thursday: { type: String },
    Friday: { type: String },
    Saturday: { type: String },
    Sunday: { type: String },
  },
  address: { type: String },
  phone: { type: String },
});

export default mongoose.model("bars", bar);
