<template>
  <div id="nav">
    <nav class="navbar navbar-expand">
      <div class="navbar-nav mr-auto">
        <router-link to="/">
          <font-awesome-icon icon="home" /> Home
        </router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div class="navbar-nav ml-auto">
        <router-link to="/newAgenda" v-if="state.currentUser">
          <font-awesome-icon icon="user" /> Minha Agenda
        </router-link>
        <router-link to="/personal" v-if="state.currentUser">
          <font-awesome-icon icon="user" /> Dados Pessoais
        </router-link>
        <router-link to="/register" v-if="!state.currentUser">
          <font-awesome-icon icon="user" /> Cadastrar
        </router-link>
        <router-link to="/login" v-if="!state.currentUser">
          <font-awesome-icon icon="sign-in-alt" /> Entrar
        </router-link>
        <router-link to="/logout" v-if="state.currentUser">
          <font-awesome-icon icon="sign-out-alt" /> Sair
        </router-link>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<script lang="ts">
import { reactive } from 'vue';
import { getCurrentUser } from './services/auth.service';

export default {
  setup() {
    const state = reactive({
      currentUser: null,
    });

    getCurrentUser().subscribe((data) => {
      state.currentUser = data;
    });
    return { state };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 5px;
  margin-right: 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
