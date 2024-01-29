import express from "express";
import tokenVerify from "../../middlewares/verifyToken.js";
import {
  createTag,
  deleteTag,
  getAllTags,
  getSingleTag,
  updateTag,
} from "../../controllers/Product/tag.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllTags).post(createTag);
router
  .route("/:id")
  .get(getSingleTag)
  .delete(deleteTag)
  .patch(updateTag)
  .put(updateTag);
// router.route("/status/:id").patch(updateRoleStatus);

// export default router
export default router;
