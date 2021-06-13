import Agenda from './Agenda';
import User from './User';

export default class Appointment {
  id: number | null;

  agenda: Agenda | null;

  user: User | null;

  status: string;

  dtWhen: Date;

  description: string;

  constructor(
    id: number | null,
    agenda: Agenda | null,
    user: User | null,
    status: string,
    dtWhen: Date,
    description: string,
  ) {
    this.id = id;
    this.agenda = agenda;
    this.user = user;
    this.status = status;
    this.dtWhen = dtWhen;
    this.description = description;
  }
}
