import mongoose from "mongoose";

const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
   logo:{
    type: String,
    default: null,
    trim: true
   },

    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Brand", brandSchema);
