import express from "express";
import tokenVerify from "../../middlewares/verifyToken.js";
import {
  createCats,
  deleteCats,
  getAllCats,
  getSingleCats,
  updateCats,
} from "../../controllers/Product/category.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllCats).post(createCats);
router
  .route("/:id")
  .get(getSingleCats)
  .delete(deleteCats)
  .patch(updateCats)
  .put(updateCats);
// router.route("/status/:id").patch(updateRoleStatus);

// export default router
export default router;
