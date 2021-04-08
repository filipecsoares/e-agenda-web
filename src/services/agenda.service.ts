import Agenda from '@/models/Agenda';
import User from '@/models/User';
import api from '@/services/api';
import { getCurrentUserValue } from './auth.service';

const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

function getAuthorization() {
  const { type, token } = getCurrentUserValue();
  return `${type} ${token}`;
}

export function register(agenda: Agenda): Promise<any> {
  const { userId } = getCurrentUserValue();
  const Authorization = getAuthorization();
  const newHeaders = { ...headers, Authorization };
  const newAgenda = { ...agenda };
  newAgenda.user = new User(userId, '', '', '', '');
  return api.post('agendas', JSON.stringify(newAgenda), { headers: newHeaders });
}

export function getAll(): Promise<any> {
  return api.get('agendas');
}

export function getAgendaByUserId(userId: number): Promise<any> {
  const Authorization = getAuthorization();
  const newHeaders = { ...headers, Authorization };
  return api.get(`agendas/${userId}`, { headers: newHeaders });
}
