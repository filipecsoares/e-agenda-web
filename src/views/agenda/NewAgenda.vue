<template>
  <div class="card">
    <h1>Cadastrar Agenda</h1>
    <v-form @submit="handleSubmit">
      <div class="form-group">
        <label for="name">Nome da Agenda</label>
        <v-field
          id="name"
          type="text"
          class="form-control"
          name="name"
          v-model="state.agenda.name"
          :rules="isRequired"
        />
        <v-error-message name="name" class="alert alert-danger" role="alert" />
      </div>
      <div class="form-group">
        <label for="fromHour">Horário inicial do atendimento</label>
        <v-field
          id="fromHour"
          type="time"
          class="form-control"
          name="fromHour"
          v-model="state.agenda.fromHour"
          :rules="isRequired"
        />
        <v-error-message name="fromHour" class="alert alert-danger" role="alert" />
      </div>
      <div class="form-group">
        <label for="toHour">Horário final do atendimento</label>
        <v-field
          id="toHour"
          type="time"
          class="form-control"
          name="toHour"
          v-model="state.agenda.toHour"
          :rules="isRequired"
        />
        <v-error-message name="toHour" class="alert alert-danger" role="alert" />
      </div>
      <div class="form-group">
        <label for="serviceTime">Tempo de atendimento</label>
        <v-field
          id="serviceTime"
          type="text"
          placeholder="hh:mm"
          class="form-control"
          name="serviceTime"
          v-model="state.agenda.serviceTime"
          :rules="isRequired"
        />
        <v-error-message name="serviceTime" class="alert alert-danger" role="alert" />
      </div>
      <div class="form-group">
        <label for="lunchBreakFrom">Saída para almoço</label>
        <v-field
          id="lunchBreakFrom"
          type="time"
          class="form-control"
          name="lunchBreakFrom"
          v-model="state.agenda.lunchBreakFrom"
        />
        <v-error-message name="lunchBreakFrom" class="alert alert-danger" role="alert" />
      </div>
      <div class="form-group">
        <label for="lunchBreakTo">Volta do almoço</label>
        <v-field
          id="lunchBreakTo"
          type="time"
          class="form-control"
          name="lunchBreakTo"
          v-model="state.agenda.lunchBreakTo"
        />
        <v-error-message name="lunchBreakTo" class="alert alert-danger" role="alert" />
      </div>
      <div class="form-group">
        <label for="daysOfWeek">Dias de trabalho</label>
        <v-field
          id="daysOfWeek"
          type="text"
          class="form-control"
          name="daysOfWeek"
          v-model="state.agenda.daysOfWeek"
          :rules="isRequired"
        />
        <v-error-message name="daysOfWeek" class="alert alert-danger" role="alert" />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">
          <span>Cadastrar</span>
        </button>
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import * as V from 'vee-validate/dist/vee-validate';
import {
  validateEmptyAndEmail,
  isRequired,
  validateEmptyAndMinLength,
} from '../../utils/validator';
import Agenda from '../../models/Agenda';
import { register } from '../../services/agenda.service';

export default {
  components: { VForm: V.Form, VField: V.Field, VErrorMessage: V.ErrorMessage },
  setup() {
    const router = useRouter();
    const toast = useToast();
    const state = reactive({
      agenda: new Agenda(null, '', null, '', '', '', '', '', ''),
    });

    function handleSubmit() {
      toast.clear();
      register(state.agenda)
        .then((data: any) => {
          toast.success('Agenda cadastrada com sucesso!');
          setTimeout(() => {
            router.push({ name: 'Home' });
          }, 1000);
        })
        .catch((err: any) => {
          console.error(err);
        });
    }

    return {
      state,
      handleSubmit,
      isRequired,
      validateEmptyAndEmail,
      validateEmptyAndMinLength,
    };
  },
};
</script>

<style scoped>
.form-group {
  text-align: left;
}
.alert {
  margin-top: 3px;
  padding: 1%;
  display: block;
}
.card {
  background-color: #f7f7f7;
  width: 40%;
  display: block;
  margin: auto;
  padding: 1% 8%;
}
@media screen and (max-width: 840px) {
  .card {
    width: 77%;
    padding: 1% 5%;
  }
}
@media screen and (max-width: 540px) {
  .card {
    width: 90%;
    padding: 1% 2%;
  }
}
</style>
