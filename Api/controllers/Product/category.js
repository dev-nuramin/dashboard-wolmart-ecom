import asyncHandler from "express-async-handler";
import { createSlug } from "../../helper/slug.js";
import Category from "../../models/Product/Category.js";

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
          path: "subCategory"
        }
      }
    },
    {
      path: "parentCategory",
      populate: {
        path: "parentCategory",
        populate: {
          path: "parentCategory"
        }
      }
    }
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
  const { name, parentCategory } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Categories are required" });
  }

  // check Category email
  const catCheck = await Category.findOne({ name });

  if (catCheck) {
    return res.status(400).json({ message: "Category already exists" });
  }

  // create new Category
  const cats = await Category.create({
    name,
    slug: createSlug(name),
    parentCategory: parentCategory ? parentCategory : null
  });

  if(parentCategory){
    const parent = await Category.findByIdAndUpdate(parentCategory, {
        $push:{subCategory: cats._id}
    })
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

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const cats = await Category.findByIdAndUpdate(
    id,
    {
      name,
      slug: createSlug(name),
    },
    { new: true }
  );

  res.status(200).json({ cats, message: "Category updated successfully" });
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
