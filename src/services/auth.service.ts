import api from '@/services/api';
import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || '{}'));
const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

export function getCurrentUserValue() {
  return currentUserSubject.value;
}

export function getCurrentUser() {
  return currentUserSubject.asObservable();
}

export function login(email: string, password: string) {
  const userLogin = { email, password };
  return api.post('auth', JSON.stringify(userLogin), { headers }).then((response) => {
    localStorage.setItem('currentUser', JSON.stringify(response.data));
    currentUserSubject.next(response.data);
  });
}

export function logout() {
  localStorage.removeItem('currentUser');
  currentUserSubject.next(null);
}
