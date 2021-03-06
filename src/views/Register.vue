<template>
  <div class="card">
    <h1>Cadastre-se</h1>
    <img
      id="profile-img"
      src="../assets/avatar-profile.png"
      class="profile-img"
    />
    <v-form @submit="handleSubmit">
      <div class="form-group">
        <label for="name">Nome</label>
        <v-field
          id="name"
          type="text"
          class="form-control"
          name="name"
          v-model="state.user.name"
          :rules="isRequired"
        />
        <v-error-message name="name" class="alert alert-danger" role="alert" />
      </div>
      <div class="form-group">
        <label for="phone">Telefone</label>
        <v-field
          id="phone"
          type="text"
          class="form-control"
          name="phone"
          v-model="state.user.phone"
        />
        <v-error-message name="phone" />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <v-field
          id="email"
          type="email"
          class="form-control"
          name="email"
          v-model="state.user.email"
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
          v-model="state.user.password"
          :rules="validateEmptyAndMinLength"
        />
        <v-error-message
          name="password"
          class="alert alert-danger"
          role="alert"
        />
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
} from '../utils/validator';
import User from '../models/User';
import { register } from '../services/user.service';

export default {
  components: { VForm: V.Form, VField: V.Field, VErrorMessage: V.ErrorMessage },
  setup() {
    const router = useRouter();
    const toast = useToast();
    const state = reactive({
      user: new User(null, '', '', '', ''),
    });

    function handleSubmit() {
      toast.clear();
      register(state.user)
        .then((data: any) => {
          toast.success('Usuário cadastrado com sucesso!');
          setTimeout(() => {
            router.push({ name: 'Login' });
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
