import api from "./axios";

export const register = (data:FormData) => api('register', 'POST', data);
