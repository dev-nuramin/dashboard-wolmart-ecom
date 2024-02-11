import express from "express";
import tokenVerify from "../../../middlewares/verifyToken.js";

import { productPhoto } from "../../../utils/multer.js";
import {
  createProducts,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../../../controllers/Product/Products/productController.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllProducts).post(productPhoto, createProducts);

router
  .route("/:id")
  .get(getSingleProduct)
  .delete(deleteProduct)
  .patch(updateProduct)
  .put(updateProduct);
// router.route("/status/:id").patch(updateRoleStatus);

// export default router
export default router;
