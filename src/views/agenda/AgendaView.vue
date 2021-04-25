<template>
  <h2 class="agenda-title">Agenda de NOME-EMPRESA</h2>
  <vue-cal hide-view-selector :time="false" active-view="month" style="height: 350px;">
  </vue-cal>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
  components: { VueCal },
  setup() {
    console.log('setup AgendaView');
  },
};
</script>

<style scoped>
.agenda-title {
  text-align: center;
}
</style>
