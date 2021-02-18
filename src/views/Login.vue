<template>
  <div class="card">
    <h1>Entrar no Sistema</h1>
    <img
      id="profile-img"
      src="../assets/avatar-profile.png"
      class="profile-img"
    />
    <v-form @submit="handleSubmit">
      <div class="form-group">
        <label for="email">E-mail</label>
        <v-field
          id="email"
          type="email"
          class="form-control"
          name="email"
          v-model="state.email"
          :rules="validateEmptyAndEmail"
        />
        <v-error-message name="email" class="alert alert-danger" role="alert" />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <v-field
          id="password"
          type="password"
          class="form-control"
          name="password"
          v-model="state.password"
          :rules="isRequired"
        />
        <v-error-message
          name="password"
          class="alert alert-danger"
          role="alert"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">
          <span>Entrar</span>
        </button>
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import * as V from 'vee-validate/dist/vee-validate';
import { validateEmptyAndEmail, isRequired } from '../utils/validator';

export default {
  components: { VForm: V.Form, VField: V.Field, VErrorMessage: V.ErrorMessage },
  setup() {
    const state = reactive({
      email: '',
      password: '',
    });

    function handleSubmit() {
      console.log('entrar');
      console.log(JSON.stringify(state));
    }

    return {
      state,
      handleSubmit,
      isRequired,
      validateEmptyAndEmail,
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
.profile-img {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 92px;
  height: 92px;
  margin-bottom: 7px;
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
