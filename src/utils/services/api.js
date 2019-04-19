import { request } from 'axios';
import getBaseConfig from '../constants/serverConfig';

const getConfig = () => ({
  baseURL: getBaseConfig().SERVER_BASE_URL,
  headers: getBaseConfig().HEADERS
});

const api = (options = {}) => {
  const axiosConfig = getConfig();
  const finalOptions = {
    ...axiosConfig,
    ...options,
    headers: {
      ...axiosConfig.headers,
      ...options.headers
    }
  };
  return request({ ...finalOptions });
};

export default api;
