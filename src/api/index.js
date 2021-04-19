import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const createTask = ({ data }) => httpClient.post('/tasks', data);
export const getAllTasks = ({ page = 1, size = 10 } = {}) =>
  httpClient.get(`/tasks?${queryString.stringify({ page, size })}`);
export const getTask = ({ taskId }) => httpClient.get(`/tasks/${taskId}`);
export const updateTask = ({ taskId, data }) =>
  httpClient.update(`/tasks/${taskId}`, data);
export const deleteTask = ({ taskId }) => httpClient.delete(`/tasks/${taskId}`);
