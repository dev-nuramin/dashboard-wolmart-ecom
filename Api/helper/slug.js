export const createSlug = (productName) => {
  // Convert the string to lowercase
  let slug = productName.toLowerCase();

  // Replace spaces with hyphens
  slug = slug.replace(/\s+/g, "-");

  // Remove special characters and non-word characters (except hyphens)
  slug = slug.replace(/[^\w-]+/g, "");

  return slug;
};
