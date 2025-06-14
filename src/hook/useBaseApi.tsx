import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true
})
const useBaseApi = () => {
    return baseApi
};

export default useBaseApi;