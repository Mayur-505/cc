import api from "./axios";

export const register = (data:FormData) => api('register', 'POST', data);
export const login = (data:FormData) => api('login', 'POST', data);