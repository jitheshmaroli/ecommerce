import axiosInstance from "../axiosInstance";

export const loginUserAPI = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  return response.data;
};
