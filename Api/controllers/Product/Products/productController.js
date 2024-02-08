import asyncHandler from "express-async-handler";
import { createSlug } from "../../../helper/slug.js";
import Products from "../../../models/Product/Products/Products.js";
import {
  cloudUploadPhoto,
  deleteCloudPhoto,
} from "../../../utils/cloudUpload.js";
import { findPublicId } from "../../../helper/helpers.js";

/**
 * @DESC Get all Brands data
 * @ROUTE /api/v1/Brand
 * @method GET
 * @access public
 */
export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Products.find();

  if (products.length > 0) {
    res.status(200).json({ products, msg: "Get all products successful" });
  }

  if (!products) {
    res.send(404).json({ message: "products not found" });
    return;
  }
});

/**
 * @DESC Get Single Brands data
 * @ROUTE /api/v1/Brand/:id
 * @method GET
 * @access public
 */
export const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const singleProduct = await Products.findById(id);

  if (!singleProduct) {
    return res.status(404).json({ message: "singleProduct data not found" });
  }

  res.status(200).json(singleProduct);
});

/**
 * @DESC Create new Brand
 * @ROUTE /api/v1/Brand
 * @method POST
 * @access public
 */
export const createProducts = asyncHandler(async (req, res) => {
  const {
    name,
    productType,
    productSimple,
    productGroup,
    productVariable,
    productExternel,
    shortDesc,
    longDesc,
  } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Products are required" });
  }

  // check Brand email

  const productCheck = await Products.findOne({ name });

  if (productCheck) {
    return res.status(400).json({ message: "Products already exists" });
  }

  

  // create new Brand
  const brands = await Products.create({
    name,
    slug: createSlug(name),
    productType,
    productSimple,
    productGroup,
    productVariable,
    productExternel,
    shortDesc,
    longDesc,
    
  });

  res.status(200).json({ brands, message: "Products created successfully" });
});

/**
 * @DESC Delete Brand
 * @ROUTE /api/v1/Brand/:id
 * @method DELETE
 * @access private
 */
export const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const brands = await Brand.findByIdAndDelete(id);

  // delete brand photo
  if (brands.logo) {
    const publicId = findPublicId(brands.logo);
    await deleteCloudPhoto(publicId);
  }

  res.status(200).json({ brands, message: "brands Deleted successfully" });
});

/**
 * @DESC Update Brand
 * @ROUTE /api/v1/Brand/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const brandUpdate = await Brand.findById(id);

  if (!brandUpdate) {
    return res.status(400).json({ message: "Brand data not found" });
  }

  let updateLogo = brandUpdate.logo;

  if (req.file) {
    const logo = await cloudUploadPhoto(req);
    updateLogo = logo.secure_url;
  }

  brandUpdate.name = name;
  brandUpdate.logo = updateLogo;
  brandUpdate.slug = createSlug(name);
  brandUpdate.save();

  res
    .status(200)
    .json({ brands: brandUpdate, message: "Brand updated successfully" });
});

/**
 * @DESC Update Brand
 * @ROUTE /api/v1/Brand/:id
 * @method PUT/PATCH
 * @access public
 */
// export const updateRoleStatus = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   const { status } = req.body;

//   const role = await Role.findByIdAndUpdate(
//     id,
//     {
//       status: !status,
//     },
//     { new: true }
//   );

//   res.status(200).json({ role, message: " Status updated successfully" });
// });
