<template>
  <div id="nav">
    <nav class="navbar navbar-expand">
      <div class="logo-container">
        <font-awesome-icon icon="calendar-check" size="2x"/>
        <router-link to="/"><h2>e-agenda</h2></router-link>
      </div>
      <div class="navbar-nav ml-auto">
        <router-link to="/">
          <font-awesome-icon icon="home" /> Home
        </router-link>
        <router-link to="/about">
          <font-awesome-icon icon="question" /> Sobre
        </router-link>
        <router-link to="/newAgenda" v-if="state.currentUser">
          <font-awesome-icon icon="calendar" /> Minha Agenda
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
  padding-right: 60px;
  padding-left: 50px;
  padding-top: 15px;
  padding-bottom: 5px;
  box-shadow: 1px 1px 8px 1px rgba(0,0,0, 0.2);
  margin-bottom: 1.5%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 20px;
  margin-right: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h2{
  font-family: 'Baloo Paaji 2', cursive;
  color: #42b983;
}
.logo-container {
  display: flex;
  width: 11vw;
  justify-content: space-evenly;
  margin: 0%;
}
</style>
