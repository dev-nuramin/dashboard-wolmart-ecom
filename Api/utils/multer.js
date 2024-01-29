import multer from "multer";

// // create multer storage for server
// const storage = multer.diskStorage({
//   filename: (req, file, cb) => {
//     if (file.fieldname == "cv") {
//       const { name, age } = req.body;
//       cb(null, name + "_" + age + "_cv_" + file.originalname);
//     } else {
//       cb(null, Date.now() + "_" + file.originalname);
//     }
//   },
//   destination: (req, file, cb) => {
//     if (file.fieldname == "photo") {
//       cb(null, "public/photos");
//     }
//   },
// });

// // student photo multer
// export const studentPhotosMulter = multer({ storage }).array("students", 10);

// // export
// export default storage;

// configure for thirdparty

//create multer for photo uploading to cloudenary
const storage = multer.memoryStorage()

// create barnd logo for uplod to brand photo
export const brandLogo = multer({storage}).single('logo')