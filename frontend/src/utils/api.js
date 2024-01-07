import axios from 'axios';

export const registerUser = async (userData) => {
    try {
        const res = await axios.post('/api/register', userData);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };
  
  export const loginUser = async (userData) => {
    try {
        const res = await axios.post('/api/login', userData);
        return res.data;
      } catch (error) {
        console.error(error);
      }
  };
  
  export const getCurrentUser = async () => {
    try {
      const res = await axios.get('/api/user');
      return res.data;
    } catch (error) {
        console.error(error);
    }
  };