import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const token = AsyncStorage.getItem('userToken')

const api = axios.create({
    baseURL: 'http://54.254.164.127/api/v1',
    headers: {
        'Content-Type' : 'application/json',
        Authorization: 'Bearer' + token
    }
});

export const fetchPosts = async () => {
    try {
        const response = await api.get('/users');
        return response.data.data;
    } catch (error) {
        throw new Error('Failed to fetch new users: ' + error.message)
    }
};

export const createPost = async (postData) => {
    try {
      const response = await api.post('/users', postData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create post: ' + error.message);
    }
  };
  
  {/* */}
  export const login = async (data) => {
    console.log("Payload sent to API:", data); // Debugging log
    try {
      const response = await api.post('/auth/login', data); // Send `data` directly
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message); // Debugging log
      throw new Error(error.response?.data?.error || 'Login failed');
    }
  };
  
  
  export const register = async (name, email, password, avatarUrl) => {
    console.log("Payload received in register API:", { name, email, password, avatarUrl }); //
    try {
      const response = await api.post('/auth/register', { 
        full_name: name, 
        email: email, 
        password:password,
        avatarUrl: avatarUrl });
        console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Registration API error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.error || 'Registration failed');
    }
  };

  

export default api;
