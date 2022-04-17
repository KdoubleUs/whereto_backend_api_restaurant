import mongoose from "mongoose";
const Schema = mongoose.Schema;

let restaurant = new Schema({
  image: { type: String },
  name: { type: String },
  category: { type: String },
  description: { type: String },
  address: { type: String },
  phone: { type: String },
});

export default mongoose.model("restaurants", restaurant);
