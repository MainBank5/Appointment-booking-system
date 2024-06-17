import axios from 'axios';
import refreshAccessToken from '../utils/refreshAccess';

const axiosusers = axios.create({
  baseURL: 'http://localhost:8080/api/user',
  withCredentials: true,
});

const axiosdoctor = axios.create({
  baseURL: 'http://localhost:8080/api/doctor',
  withCredentials: true,
});

const setupInterceptors = (setToken) => {
  axiosusers.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { config, response: { status } } = error;
      const originalRequest = config;

      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const accessToken = await refreshAccessToken(setToken);
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return axiosusers(originalRequest);
        } catch (refreshError) {
          console.error('Error during refreshing access token:', refreshError);
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
};

export { axiosusers, axiosdoctor, setupInterceptors };
