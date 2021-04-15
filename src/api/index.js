import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const createTask = data => httpClient.post('/tasks', data);
export const getAllTasks = ({ page, size } = {}) =>
  httpClient.get(`/tasks?${queryString.stringify({ page, size })}`);

export const getTask = () => httpClient.get('/tasks/:taskId');
export const updateTask = data => httpClient.update('/tasks/:taskId', data);
export const deleteTask = data => httpClient.delete('/tasks/:taskId', data);
