import axios, { AxiosInstance } from 'axios';

const service: AxiosInstance = axios.create({
	baseURL: 'https://backend.getlinked.ai',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default service;
