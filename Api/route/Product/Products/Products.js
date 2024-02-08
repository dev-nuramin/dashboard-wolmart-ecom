import express from "express";
import tokenVerify from "../../../middlewares/verifyToken.js";


// import { brandLogo } from "../../utils/multer.js";
import { getAllProducts } from "../../../controllers/Product/Products/productController.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllProducts)
// router.route.post(brandLogo, createBrand);
// router
//   .route("/:id")
//   .get(getSingleBrand)
//   .delete(deleteBrand)
//   .patch(brandLogo, updateBrand)
//   .put(brandLogo, updateBrand);
// router.route("/status/:id").patch(updateRoleStatus);

// export default router
export default router;
