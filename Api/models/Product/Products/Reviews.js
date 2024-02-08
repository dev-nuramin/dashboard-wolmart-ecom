import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    review: {
      type: Number,
      default: 0,
      required: true,
    },
    rating: {
      type: String,
      default: null,
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

export default mongoose.model("Reviews", reviewSchema);
