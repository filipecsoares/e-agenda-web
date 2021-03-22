export default class Agenda {
  id: number | null;

  name: string;

  userId: number | null;

  fromHour: string;

  toHour: string;

  serviceTime: string;

  lunchBreakFrom: string | null;

  lunchBreakTo: string | null;

  daysOfWeek: string;

  constructor(
    id: number | null,
    name: string,
    userId: number | null,
    fromHour: string,
    toHour: string,
    serviceTime: string,
    lunchBreakFrom: string | null,
    lunchBreakTo: string | null,
    daysOfWeek: string,
  ) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.fromHour = fromHour;
    this.toHour = toHour;
    this.serviceTime = serviceTime;
    this.lunchBreakFrom = lunchBreakFrom;
    this.lunchBreakTo = lunchBreakTo;
    this.daysOfWeek = daysOfWeek;
  }
}
