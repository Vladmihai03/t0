import axios from 'axios';

// Folosește adresa IP locală a mașinii tale de dezvoltare
const api = axios.create({
  baseURL: 'https://iahim-mobile.onrender.com', 
});

export default api;
