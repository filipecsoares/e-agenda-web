import User from '@/models/User';
import api from '@/services/api';

export function register(user: User): Promise<any> {
  return api.post('users', JSON.stringify(user), { headers: { 'Content-Type': 'application/json; charset=UTF-8' } });
}

export function getAll(): Promise<any> {
  return api.get('users');
}
