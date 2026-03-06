// client/src/utils/api.js
import axios from 'axios';

// Backend sunucunuzun adresini burada merkezi olarak tanımlayın.
// Geliştirme sırasında genellikle bu şekildedir.
const API_BASE_URL = import.meta.env.PROD ? 'https://trihonor-webpage.onrender.com/api' : (import.meta.env.VITE_API_URL || 'http://localhost:5000/api');

// Axios için bir "instance" oluşturarak temel ayarları yapabiliriz.
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * İletişim formunu backend'e gönderir.
 * @param {object} formData - { name, email, message } içeren obje
 * @returns {Promise<object>} - Backend'den dönen yanıt
 */
export const submitContactForm = async (formData) => {
  try {
    // apiClient.post('/contact', ...) isteği http://localhost:5000/api/contact adresine gider.
    const response = await apiClient.post('/contact', formData);
    return response.data;
  } catch (error) {
    // Eğer backend bir hata dönerse (örn: 400, 500), axios bir hata fırlatır.
    // Bu hatayı, onu çağıran bileşenin yakalayabilmesi için tekrar fırlatıyoruz.
    console.error("Error submitting form:", error.response ? error.response.data : error.message);
    throw error;
  }
};