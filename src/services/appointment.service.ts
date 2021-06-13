import Appointment from '@/models/Appointment';
import User from '@/models/User';
import api from '@/services/api';
import { getCurrentUserValue } from './auth.service';

const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

function getAuthorization() {
  const { type, token } = getCurrentUserValue();
  return `${type} ${token}`;
}

export function save(appointment: Appointment): Promise<any> {
  const { userId } = getCurrentUserValue();
  const Authorization = getAuthorization();
  const newHeaders = { ...headers, Authorization };
  const newAppointment = { ...appointment };
  newAppointment.user = new User(userId, '', '', '', '');
  return api.post('appointments', JSON.stringify(newAppointment), { headers: newHeaders });
}

export function getAllByAgendaId(agendaId: number): Promise<any> {
  const Authorization = getAuthorization();
  const newHeaders = { ...headers, Authorization };
  return api.get(`appointments/${agendaId}`, { headers: newHeaders });
}
