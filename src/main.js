import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

const app = createApp(App);
app.use(router);

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
});

// Set the Axios instance as a global property
app.config.globalProperties.$axios = axiosInstance;

app.mount('#app');
