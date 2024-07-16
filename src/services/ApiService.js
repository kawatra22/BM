import axios from 'axios';
//import packageJson from '/package.json';
const BASE_URL = "http://bm.exatosoftware.in";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
      timeout: 10000
    });
    this.api.interceptors.response.use(
        response => response,
        error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Error response:', error.response);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('Error request:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error message:', error.message);
          }
          return Promise.reject(error);
        }
      );
  }

  // GET request
  get(endpoint) {
    return this.api.get(endpoint);
  }

  // POST request
  post(endpoint, data) {
    return this.api.post(endpoint, data);
  }

  // PUT request
  put(endpoint, data) {
    return this.api.put(endpoint, data);
  }

  // DELETE request
  delete(endpoint) {
    return this.api.delete(endpoint);
  }
}

export default new ApiService();

