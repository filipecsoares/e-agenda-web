<template>
  <h2 class="agenda-title">Agenda de {{state.agenda.name}}</h2>
  <vue-cal class="vuecal--green-theme" :time="false"
      active-view="month" style="height: 350px;" :events="state.events"
      events-count-on-year-view>
  </vue-cal>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

export default {
  components: { VueCal },
  setup() {
    const route = useRoute();

    const state = reactive({
      agenda: route.params,
      events: [
        {
          start: '2021-05-01 10:00',
          end: '2021-05-1 11:00',
          title: 'Doctor appointment',
        },
      ],
    });

    return { state };
  },
};
</script>

<style scoped>
.agenda-title {
  text-align: center;
}
</style>
