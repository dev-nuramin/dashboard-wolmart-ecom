import asyncHandler from "express-async-handler";
import { createSlug } from "../../helper/slug.js";
import Tag from "../../models/Product/Tag.js";

/**
 * @DESC Get all Tag data
 * @ROUTE /api/v1/Tag
 * @method GET
 * @access public
 */
export const getAllTags = asyncHandler(async (req, res) => {
  const tags = await Tag.find();

  if (!tags) {
    res.status(404).json({ message: "Tags not found" });
  }

  if (tags.length > 0) {
    res.status(200).json({ tags, msg: "Get all tags successful" });
  }

   
});

/**
 * @DESC Get Single Tags data
 * @ROUTE /api/v1/Tag/:id
 * @method GET
 * @access public
 */
export const getSingleTag = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const singleTag = await Tag.findById(id);

  if (!singleTag) {
    return res.status(404).json({ message: "singleTag data not found" });
  }

  res.status(200).json(singleTag);
});

/**
 * @DESC Create new Role
 * @ROUTE /api/v1/Role
 * @method POST
 * @access public
 */
export const createTag = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Tag are required" });
  }

  const tagCheck = await Tag.findOne({name});

  if(tagCheck){
    return res.status(401).json({msg: "Tag already exist"})
  }
  // create new Tag
  const tags = await Tag.create({
    name,
    slug: createSlug(name),
    
  });

  res.status(200).json({ tags, message: "Tags created successfully" });

});

/**
 * @DESC Delete Role
 * @ROUTE /api/v1/Role/:id
 * @method DELETE
 * @access private
 */
export const deleteTag = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const tags = await Tag.findByIdAndDelete(id);

  res.status(200).json({ tags, message: "tags Deleted successfully" });
});

/**
 * @DESC Update Role
 * @ROUTE /api/v1/Role/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateTag = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const tags = await Tag.findByIdAndUpdate(
    id,
    {
      name,
      slug: createSlug(name),
    },
    { new: true }
  );

  res.status(200).json({ tags, message: "Tag updated successfully" });
});

/**
 * @DESC Update Role
 * @ROUTE /api/v1/Role/:id
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
