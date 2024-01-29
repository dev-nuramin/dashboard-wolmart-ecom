import asyncHandler from "express-async-handler";
import { createSlug } from "../../helper/slug.js";
import Brand from "../../models/Product/Brand.js";

/**
 * @DESC Get all Brands data
 * @ROUTE /api/v1/Brand
 * @method GET
 * @access public
 */
export const getAllBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find();

  if (!brands) {
    res.status(404).json({ message: "Brands not found" });
  }

  if (brands.length > 0) {
    res.status(200).json({ brands, msg: "Get all brands successful" });
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
  
  console.log(req.file)
  
  if (!name) {
    return res.status(400).json({ message: "Role are required" });
  }

  // check Brand email
  const brandCheck = await Brand.findOne({ name });

  if (brandCheck) {
    return res.status(400).json({ message: "Brand already exists" });
  }

  // create new Brand
  const brands = await brand.create({
    name,
    slug: createSlug(name),
    logo: null,
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

  const brands = await Brand.findByIdAndUpdate(
    id,
    {
      name,
      slug: createSlug(name),
    },
    { new: true }
  );

  res.status(200).json({ brands, message: "Brand updated successfully" });
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
