import User from '@/models/User';
import api from '@/services/api';
import { getCurrentUserValue } from './auth.service';

const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

export function register(user: User): Promise<any> {
  return api.post('users', JSON.stringify(user), { headers });
}

export function update(user: User): Promise<any> {
  const { type, token } = getCurrentUserValue();
  const Authorization = `${type} ${token}`;
  const newHeaders = { ...headers, Authorization };
  return api.put(`users/${user.id}`, JSON.stringify(user), { headers: newHeaders });
}

export function getUserById(userId: number): Promise<any> {
  return api.get(`users/${userId}`);
}

export function getAll(): Promise<any> {
  return api.get('users');
}
