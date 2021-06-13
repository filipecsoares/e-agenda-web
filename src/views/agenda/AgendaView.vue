<template>
  <h2 class="agenda-title">Agenda de {{state.agendaName}}</h2>
  <vue-cal class="vuecal--green-theme" :time="true" ref="vuecal"
      active-view="week" style="height: 370px;" :events="state.events"
      events-count-on-year-view
      :editable-events="{ title: true, drag: false, resize: true, delete: true, create: true }"
      @cell-dblclick="$refs.vuecal.createEvent(
        $event,
        120,
        { title: 'New Event', class: 'blue-event' }
      )"
      :snap-to-time="30"
      :time-from="8 * 60"
      :time-to="18 * 60"
      :on-event-create="onEventCreate"
      >
  </vue-cal>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { getAllByAgendaId, save } from '../../services/appointment.service';

export default {
  components: { VueCal },
  setup() {
    const route = useRoute();
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
          title: appointment.description,
          end,
        };
      });
    }).catch((error) => {
      console.error(error);
    });

    const onEventCreate = (event, deleteEventFunction) => {
      console.log('teste', event, deleteEventFunction);
      return event;
    };

    return { state, onEventCreate };
  },
};
</script>

<style scoped>
.agenda-title {
  text-align: center;
}
</style>
