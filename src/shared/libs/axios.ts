import axios from 'axios';
import qs from 'query-string';
import { ACCESS_TOKEN } from '../constants';

export const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

axiosClient.interceptors.request.use(
  async function (config) {
    // add access token to header before request is sent
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    config.headers = config.headers ?? {};
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken as string}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  function ({ data }) {
    return data;
  },
  async function (error) {
    return Promise.reject(error);
  },
);
