<template>
  <h2 class="agenda-title">Agenda de {{state.agendaName}}</h2>
  <vue-cal class="vuecal--green-theme" :time="true" ref="vuecal"
      active-view="week" :events="state.events"
      events-count-on-year-view
      :editable-events="{ title: true, drag: false, resize: true, delete: true, create: true }"
      :snap-to-time="30"
      :time-from="8 * 60"
      :time-to="18 * 60"
      :on-event-create="onEventCreate"
      @event-delete="eventDelete"
      >
  </vue-cal>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import Appointment from '@/models/Appointment';
import Agenda from '@/models/Agenda';
import User from '@/models/User';
import { getCurrentUserValue } from '@/services/auth.service';
import { getAllByAgendaId, save, cancelAppointment } from '../../services/appointment.service';

export default {
  components: { VueCal },
  setup() {
    const route = useRoute();
    const toast = useToast();
    const {
      id, fromHour, toHour, serviceTime, name,
    } = route.params;

    const state = reactive({
      agendaName: name,
      agendaId: id,
      fromHour,
      toHour,
      serviceTime,
      events: [],
    });

    const dateFormatter = (dt) => `${dt.getFullYear()}-${(dt.getMonth() + 1)}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}`;

    getAllByAgendaId(state.agendaId).then((result) => {
      console.log(result.data);
      state.events = result.data.map((appointment) => {
        const dateStart = new Date(appointment.dtWhen);
        const hour = parseInt(serviceTime.substring(0, 2), 0);
        const minute = parseInt(serviceTime.substring(3, 5), 0);
        const dateEnd = dateStart.addHours(hour).addMinutes(minute);
        const start = dateFormatter(dateStart);
        const end = dateFormatter(dateEnd);
        return {
          start,
          title: appointment.description || 'Agendamento',
          end,
          id: appointment.id,
        };
      });
      console.log(state.events);
    }).catch((error) => {
      console.error(error);
    });

    function createAppointment(event) {
      const { userId } = getCurrentUserValue();
      const user = new User(userId, '', '', '', null);
      const agenda = new Agenda(state.agendaId, '', null, '', '', '', null, null, '', '');
      const appointment = new Appointment(null, agenda, user, null, event.start, event.title);
      return appointment;
    }

    const onEventCreate = (event) => {
      const appointment = createAppointment(event);
      let newEvent = { ...event, title: 'Agendamento' };
      save(appointment).then((result) => {
        newEvent = { ...newEvent, id: result.data.id };
        toast.clear();
        toast.success('Agendamento marcado com sucesso!');
      }).catch((error) => {
        console.error(error);
        toast.clear();
        toast.error('Erro ao agendar, por favor tente novamente!');
      });
      return newEvent;
    };

    const eventDelete = (event) => {
      cancelAppointment(event.id).then((result) => {
        console.log(result);
        toast.clear();
        toast.success('Agendamento cancelado com sucesso!');
      }).catch((error) => {
        console.error(error);
        toast.clear();
        toast.error('Erro ao cancelar, por favor tente novamente!');
      });
    };

    return { state, onEventCreate, eventDelete };
  },
};
</script>

<style>
.agenda-title {
  text-align: center;
}
.vuecal {
  margin: auto;
  max-width: 1500px;
  max-height: 900px;
  min-width: 1300px;
  min-height: 800px;
}

.vuecal__event {
  box-sizing: border-box;
  padding: 5px;
  background: #BBF;
  height: 52px !important;
}

.vuecal__time-column .vuecal__time-cell {
    height: 55px !important;
}
</style>
