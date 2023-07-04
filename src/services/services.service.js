import axios from 'axios';
 
class ServicesService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5005'
    });
 
    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');
 
      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
 
      return config;
    });
  }
 
  // POST /api/newservice
  createService = requestBody => {
    return this.api.post('/api/newservice', requestBody);
  };
 
  // GET /api/services
  getAllServices = () => {
    return this.api.get('/api/services');
  };
 
  // GET /api/services/:id
  getService = id => {
    return this.api.get(`/api/services/${id}`);
  };
 
  // PUT /api/services/:id
  updateService = (id, requestBody) => {
    return this.api.put(`/api/services/${id}`, requestBody);
  };
 
  // DELETE /api/services/:id
  deleteService = id => {
    return this.api.delete(`/api/services/${id}`);
  };
}
 
// Create one instance object
const servicesService = new ServicesService();
 
export default servicesService;