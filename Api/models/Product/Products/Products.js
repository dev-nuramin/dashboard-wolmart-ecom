import mongoose from "mongoose";
// import { reviews } from "./Reviews.js";
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      default: null,
      trim: true,
    },
    longDesc: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
      enum: ["simple", "variable", "group", "external"],
      default: "simple",
    },
    productSimple: {
      name: {
        type: String,
        // required: true,
      },
      regularPrice: {
        type: Number,
        // required: true,
        default: 0,
      },
      salePrice: {
        type: Number,
        // required: true,
        default: 0,
      },
      productPhotos: {
        type: [String],
        // required: true,
      },
      stock: {
        type: String,
        default: 0,
      },
    },
    productVariable: [
      {
        name: {
          type: String,
          required: true,
        },
        size: {
          type: String,
          default: null,
        },
        regularPrice: {
          type: Number,
          required: true,
          default: 0,
        },
        salePrice: {
          type: Number,
          required: true,
          default: 0,
        },
        productPhotos: {
          type: [String],
          required: true,
        },
        stock: {
          type: String,
          default: 0,
        },
      },
    ],
    productGroup: [
      {
        name: {
          type: String,
          required: true,
        },

        regularPrice: {
          type: Number,
          required: true,
          default: 0,
        },
        salePrice: {
          type: Number,
          required: true,
          default: 0,
        },
        productPhotos: {
          type: [String],
          required: true,
        },
        stock: {
          type: String,
          default: 0,
        },
      },
    ],
    productExternal: {
      name: {
        type: String,
        // required: true,
      },

      regularPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      salePrice: {
        type: Number,
        required: true,
        default: 0,
      },
      productPhotos: {
        type: [String],
        default: null,
      },
      stock: {
        type: String,
        default: 0,
      },
      link: {
        type: String,
        default: null,
      },
    },

    specification: {
      type: String,
    },
    reviews: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Reviews",
      default: null,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
      // required: true,
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tag",
      // required: true,
    },
    brands: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      // required: true,
    },
    shortDesc: {
      type: String,
      // required: true,
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

export default mongoose.model("Products", productSchema);
