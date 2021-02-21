import User from '@/models/User';
import api from '@/services/api';

const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

export function register(user: User): Promise<any> {
  return api.post('users', JSON.stringify(user), { headers });
}

export function getUserById(): Promise<any> {
  return api.get('users');
}

export function getAll(): Promise<any> {
  return api.get('users');
}
