import asyncHandler from "express-async-handler";
import { createSlug } from "../../helper/slug.js";
import Category from "../../models/Product/Category.js";
import { cloudUploadPhoto, deleteCloudPhoto } from "../../utils/cloudUpload.js";
import { findPublicId } from "../../helper/helpers.js";

/**
 * @DESC Get all Brands data
 * @ROUTE /api/v1/Brand
 * @method GET
 * @access public
 */
export const getAllCats = asyncHandler(async (req, res) => {
  const cats = await Category.find().populate([
    {
      path: "subCategory",
      populate: {
        path: "subCategory",
        populate: {
          path: "subCategory",
        },
      },
    },
    {
      path: "parentCategory",
      populate: {
        path: "parentCategory",
        populate: {
          path: "parentCategory",
        },
      },
    },
  ]);

  if (!cats) {
    res.status(404).json({ message: "Category not found" });
  }

  if (cats.length > 0) {
    res.status(200).json({ cats, msg: "Get all categories successful" });
  }
});

/**
 * @DESC Get Single Brands data
 * @ROUTE /api/v1/Brand/:id
 * @method GET
 * @access public
 */
export const getSingleCats = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const singleCats = await Category.findById(id);

  if (!singleCats) {
    return res.status(404).json({ message: "singleCats data not found" });
  }

  res.status(200).json(singleCats);
});

/**
 * @DESC Create new Category
 * @ROUTE /api/v1/Category
 * @method POST
 * @access public
 */
export const createCats = asyncHandler(async (req, res) => {
  const { name, parentCategory, icon } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Categories are required" });
  }

  // check Category email
  const catCheck = await Category.findOne({ name });

  if (catCheck) {
    return res.status(400).json({ message: "Category already exists" });
  }

  let catIcon = null;
  if (icon) {
    catIcon = icon;
  }
  console.log(catIcon);

  let uploadCatphoto = null;
  // category photo upload
  if (req.file) {
    const photo = await cloudUploadPhoto(req);
    uploadCatphoto = photo.secure_url;
  }

  // create new Category
  const cats = await Category.create({
    name,
    slug: createSlug(name),
    parentCategory: parentCategory ? parentCategory : null,
    icon: catIcon,
    photo: uploadCatphoto ? uploadCatphoto : null,
  });

  // create category detailes in subcategory
  if (parentCategory) {
    const parent = await Category.findByIdAndUpdate(parentCategory, {
      $push: { subCategory: cats._id },
    });
  }
  res.status(200).json({ cats, message: "Categories created successfully" });
});

/**
 * @DESC Delete Category
 * @ROUTE /api/v1/Category/:id
 * @method DELETE
 * @access private
 */
export const deleteCats = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const cats = await Category.findByIdAndDelete(id);

  if (!cats) {
    return res.status(400).json({ msg: "Data not found" });
  }
  // delete cloudery photo to
  if (cats.photo) {
    await deleteCloudPhoto(findPublicId(cats.photo));
  }
  res.status(200).json({ cats, message: "Category Deleted successfully" });
});






/**
 * @DESC Update Category
 * @ROUTE /api/v1/Category/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateCats = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name, parentCategory, icon } = req.body;

  if (!name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // update parentCategory
  const catUpdate = await Category.findById(id);

  if (!catUpdate) {
    return res.status(400).json({ message: "Category not found for update" });
  }

  // if parent category not upload then parentCategory will previous category
  let updateCategory = catUpdate.parentCategory;
  if (parentCategory) {
    updateCategory = parentCategory ? parentCategory : null;
  }

  // update category icon
  let catIcon = catUpdate.icon;
  if (icon) {
    catIcon = icon;
  }

  // update catory photo and delete previous photo
  let catFile = catUpdate.photo;
  if (req.file) {
    const catPhoto = await cloudUploadPhoto(req);
    catFile = catPhoto.secure_url ? catPhoto.secure_url : catFile;

    // after upload photo delete previous photo
    await deleteCloudPhoto(findPublicId(catUpdate.photo));
  }
  catUpdate.name = name;
  catUpdate.slug = createSlug(name);
  catUpdate.parentCategory = updateCategory;
  catUpdate.icon = catIcon;
  catUpdate.photo = catFile;
  catUpdate.save();
  res
    .status(200)
    .json({ cats: catUpdate, message: "Category updated successfully" });
});









/**
 * @DESC Update Category
 * @ROUTE /api/v1/Category/:id
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
