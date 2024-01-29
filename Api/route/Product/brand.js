import express from "express";
import tokenVerify from "../../middlewares/verifyToken.js";

import {
  createBrand,
  deleteBrand,
  getAllBrands,
  getSingleBrand,
  updateBrand,
} from "../../controllers/Product/brand.js";
import { brandLogo } from "../../utils/multer.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllBrands).post(brandLogo, createBrand);
router
  .route("/:id")
  .get(getSingleBrand)
  .delete(deleteBrand)
  .patch(updateBrand)
  .put(updateBrand);
// router.route("/status/:id").patch(updateRoleStatus);

// export default router
export default router;
