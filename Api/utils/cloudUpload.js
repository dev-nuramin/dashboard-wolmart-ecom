import cloudinary from "cloudinary";
import fs from "fs";

//config cloudnary
cloudinary.config({
  cloud_name: "dfmm5mcb5",
  api_key: "667353881224541",
  api_secret: "GjT4CKf_q2ZcvxGQIxTE0v_50W0",
});

// setup fs and cloudnary for photo uploadng
// export const cloudUploadPhoto = async (req) => {
//   // fs to add photo to local machine
//   fs.writeFileSync("../" + req.file.originalname, req.file.buffer);
//   const data = await cloudinary.v2.uploader.upload(
//     "../" + req.file.originalname,
//     req.file.buffer
//   );
//   // remove photo from local machine
//   fs.unlinkSync("../" + req.file.originalname, req.file.buffer);

//   return data;
// };

// this way also can upload photo
//single uploads
export const cloudUploadPhoto = async (req) => {
  const data = await cloudinary.v2.uploader.upload(req.file.path);
  return data;
};
// delte photo
export const deleteCloudPhoto = async (publicId) => {
  await cloudinary.v2.uploader.destroy(publicId);
};

//multiple uploads
export const cloudMultiUploadPhoto = async (path) => {
  const data = await cloudinary.v2.uploader.upload(path);
  return data.secure_url;
};
