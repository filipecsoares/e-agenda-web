import User from './User';

export default class Agenda {
  id: number | null;

  name: string;

  user: User | null;

  fromHour: string;

  toHour: string;

  serviceTime: string;

  lunchBreakFrom: string | null;

  lunchBreakTo: string | null;

  daysOfWeek: string;

  address: string;

  constructor(
    id: number | null,
    name: string,
    user: User | null,
    fromHour: string,
    toHour: string,
    serviceTime: string,
    lunchBreakFrom: string | null,
    lunchBreakTo: string | null,
    daysOfWeek: string,
    address: string,
  ) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.fromHour = fromHour;
    this.toHour = toHour;
    this.serviceTime = serviceTime;
    this.lunchBreakFrom = lunchBreakFrom;
    this.lunchBreakTo = lunchBreakTo;
    this.daysOfWeek = daysOfWeek;
    this.address = address;
  }
}
