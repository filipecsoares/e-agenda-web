import Agenda from '@/models/Agenda';
import api from '@/services/api';
import { getCurrentUserValue } from './auth.service';

const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

export function register(agenda: Agenda): Promise<any> {
  const { type, token, userId } = getCurrentUserValue();
  const Authorization = `${type} ${token}`;
  const newHeaders = { ...headers, Authorization };
  const newAgenda = { ...agenda };
  newAgenda.userId = userId;
  return api.post('agendas', JSON.stringify(newAgenda), { headers: newHeaders });
}

export function getAll(): Promise<any> {
  return api.get('agendas');
}
