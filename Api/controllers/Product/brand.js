import asyncHandler from "express-async-handler";
import { createSlug } from "../../helper/slug.js";
import Brand from "../../models/Product/Brand.js";
import { cloudUploadPhoto, deleteCloudPhoto } from "../../utils/cloudUpload.js";
import { findPublicId } from "../../helper/helpers.js";

/**
 * @DESC Get all Brands data
 * @ROUTE /api/v1/Brand
 * @method GET
 * @access public
 */
export const getAllBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find();
  console.log(brands);
  if (brands.length > 0) {
    res.status(200).json({ brands, msg: "Get all brands successful" });
  }

  if (!brands) {
    res.send(404).json({ message: "Brands not found" });
    return;
  }
});

/**
 * @DESC Get Single Brands data
 * @ROUTE /api/v1/Brand/:id
 * @method GET
 * @access public
 */
export const getSingleBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const singleBrand = await Brand.findById(id);

  if (!singleBrand) {
    return res.status(404).json({ message: "singleBrand data not found" });
  }

  res.status(200).json(singleBrand);
});

/**
 * @DESC Create new Brand
 * @ROUTE /api/v1/Brand
 * @method POST
 * @access public
 */
export const createBrand = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Brand are required" });
  }

  // check Brand email

  const brandCheck = await Brand.findOne({ name });

  if (brandCheck) {
    return res.status(400).json({ message: "Brand already exists" });
  }

  // call function from folder to upload photo
  let uploadLogo = null;
  if (req.file) {
    const logo = await cloudUploadPhoto(req);
    uploadLogo = logo;
  }

  // create new Brand
  const brands = await Brand.create({
    name,
    slug: createSlug(name),
    logo: uploadLogo?.secure_url ? uploadLogo?.secure_url : null,
  });

  res.status(200).json({ brands, message: "Brands created successfully" });
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

  if(!brandUpdate){
    return res.status(400).json({ message: "Brand data not found" });
  }

  let updateLogo = brandUpdate.logo;

  if (req.file) {
    const logo = await cloudUploadPhoto(req);
    updateLogo = logo.secure_url;
  }

  brandUpdate.name = name;
  brandUpdate.logo = updateLogo;
  brandUpdate.save()


  res.status(200).json({ brands: brandUpdate, message: "Brand updated successfully" });
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
