import { axiosusers } from "../API/api";

// Utility function for refreshing access token
const refreshAccessToken = async (setToken) => {
  try {
    const response = await axiosusers.get('/refresh');
    const { accessToken } = response.data;
    setToken(prev => { 
      console.log(JSON.stringify(prev));
      return { ...prev, accessToken };
    });
    return accessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error;
  }
};

export default refreshAccessToken;
