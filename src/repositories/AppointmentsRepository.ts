import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppoinmentDTO {
  provider: string;

  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] | null {
    return this.appointments || null;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointmentInSameDate = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointmentInSameDate || null;
  }

  public create({ provider, date }: CreateAppoinmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}
export default AppointmentsRepository;
