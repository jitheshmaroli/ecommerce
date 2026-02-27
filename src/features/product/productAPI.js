import axios from "axios";

export const fetchProductAPI = async ({ limit, skip, category }) => {
  let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

  if (category) {
    url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
  }
  const response = await axios.get(url);
  return response.data;
};

export const fetchCategoriesAPI = async () => {
  const response = await axios.get(
    `https://dummyjson.com/products/category-list`,
  );
  return response.data;
};
