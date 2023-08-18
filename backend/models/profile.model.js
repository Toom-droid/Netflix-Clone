import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  profileName: {
    type: String,
    trim: true,
    require: true
  },
  date:{
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  }
})

export default mongoose.model("Profile", profileSchema)