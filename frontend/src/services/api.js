import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

// Add contact message
export const addContact = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact/add`, formData);
    return response.data;
  } catch (error) {
    console.error("Error adding contact:", error.response?.data || error.message);
    throw error;
  }
};
