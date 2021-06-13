<template>
  <div class="card">
    <h1>{{state.title}}</h1>
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
        <label for="address">Endereço</label>
        <v-field
          id="address"
          type="text"
          class="form-control"
          name="address"
          v-model="state.agenda.address"
          :rules="isRequired"
        />
        <v-error-message name="address" class="alert alert-danger" role="alert" />
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
        <label for="days-of-week">Dias de atendimento</label>
        <div class="days-of-week" id="days-of-week">
          <div>
            <input type="checkbox" id="monday" value="2" v-model="state.checkedDays">&nbsp;
            <label for="monday">Segunda-Feira</label>
          </div>
          <div>
            <input type="checkbox" id="tuesday" value="3" v-model="state.checkedDays">&nbsp;
            <label for="tuesday">Terça-Feira</label>
          </div>
          <div>
            <input type="checkbox" id="wednesday" value="4" v-model="state.checkedDays">&nbsp;
            <label for="wednesday">Quarta-Feira</label>
          </div>
          <div>
            <input type="checkbox" id="thursday" value="5" v-model="state.checkedDays">&nbsp;
            <label for="thursday">Quinta-Feira</label>
          </div>
          <div>
            <input type="checkbox" id="friday" value="6" v-model="state.checkedDays">&nbsp;
            <label for="friday">Sexta-Feira</label>
          </div>
          <div>
            <input type="checkbox" id="saturday" value="7" v-model="state.checkedDays">&nbsp;
            <label for="saturday">Sábado</label>
          </div>
          <div>
            <input type="checkbox" id="sunday" value="1" v-model="state.checkedDays">&nbsp;
            <label for="sunday">Domingo</label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">
          <span v-if="!state.agenda.id">Cadastrar</span>
          <span v-else>Atualizar</span>
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
import { getCurrentUserValue } from '@/services/auth.service';
import {
  validateEmptyAndEmail,
  isRequired,
  validateEmptyAndMinLength,
} from '../../utils/validator';
import Agenda from '../../models/Agenda';
import { getAgendaByUserId, register } from '../../services/agenda.service';

export default {
  components: { VForm: V.Form, VField: V.Field, VErrorMessage: V.ErrorMessage },
  setup() {
    const router = useRouter();
    const toast = useToast();
    const state = reactive({
      agenda: new Agenda(null, '', null, '', '', '01:00', '', '', '', ''),
      checkedDays: [2, 3, 4, 5, 6],
      title: 'Cadastrar Agenda',
    });

    const { userId } = getCurrentUserValue();
    getAgendaByUserId(userId).then((response) => {
      if (response.data) {
        const {
          id, name, fromHour, toHour, serviceTime,
          lunchBreakFrom, lunchBreakTo, daysOfWeek, address,
        } = response.data;
        state.checkedDays = daysOfWeek.split(',').map((item: string) => parseInt(item, 10));
        state.agenda = new Agenda(
          id, name, null, fromHour, toHour,
          serviceTime, lunchBreakFrom, lunchBreakTo, daysOfWeek, address,
        );
        state.title = 'Atualizar Agenda';
      }
    }).catch((error) => {
      console.error(error);
    });

    function handleSubmit() {
      state.agenda.daysOfWeek = state.checkedDays.join(',');
      toast.clear();
      register(state.agenda)
        .then((data: any) => {
          if (!state.agenda.id) {
            toast.success('Agenda cadastrada com sucesso!');
          } else {
            toast.success('Agenda atualizada com sucesso!');
          }
          setTimeout(() => {
            router.push({ name: 'Home' });
          }, 1000);
        })
        .catch((err: any) => {
          console.error(err);
          toast.error(err.message);
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
.days-of-week {
  display: flex;
  flex-direction: column;
}
</style>
