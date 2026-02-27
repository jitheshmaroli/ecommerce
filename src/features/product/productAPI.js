import axiosInstance from "../axiosInstance";

export const fetchProductAPI = async ({ limit, skip, category }) => {
  let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

  if (category) {
    url = `/products/category/${category}?limit=${limit}&skip=${skip}`;
  }
  const response = await axiosInstance.get(url);
  return response.data;
};

export const fetchCategoriesAPI = async () => {
  const response = await axiosInstance.get(`/products/category-list`);
  return response.data;
};
