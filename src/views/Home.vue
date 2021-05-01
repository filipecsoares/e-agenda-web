<template>
  <div class="home">
    <div class="container-fluid grid">
      <div class="row justify-content-between">
        <div class="col-4 align-self-center first-col">
          <div class="my-agenda" @click="goToMyAgenda">
            <h2>Minha agenda</h2>
            <img src="../assets/calendar.png" width="50" height="50"/>
          </div>
        </div>
        <div class="col-8 sec-col px-6 py-5">
          <h2>Agendas disponíveis</h2>
          <div class="input-group input-group-lg">
            <input class="form-control" type="text" placeholder="Procure aqui">
            <button class="btn btn-outline-secondary">
              <font-awesome-icon icon="search" />
            </button>
          </div>
          <div class="card" v-for="agenda in state.agendas" :key="agenda.id">
            <div class="card-body card-agendas" @click="openAgenda(agenda.id)">
              <div class="w-75">
                <h5 class="card-title">{{agenda.name}}</h5>
                <p class="card-text">{{agenda.address}}</p>
              </div>
              <img src="../assets/calendar.png" width="50" height="50"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { getCurrentUserValue } from '../services/auth.service';
import { getAll, getAgendaById } from '../services/agenda.service';

export default {
  setup() {
    const router = useRouter();

    if (!getCurrentUserValue()) {
      router.push({ name: 'EAgenda' });
    }

    const state = reactive({
      agendas: [],
    });

    getAll().then((response) => {
      state.agendas = response.data;
    }).catch((err) => {
      console.error(err);
    });

    function goToMyAgenda() {
      router.push({ name: 'MyAgenda' });
    }

    function openAgenda(agendaId: number) {
      console.log(agendaId);
      getAgendaById(agendaId).then((response) => {
        console.log(response.data);
        router.push({ name: 'AgendaView', params: response.data });
      }).catch((err) => {
        console.error(err);
      });
    }
    return { state, goToMyAgenda, openAgenda };
  },
};
</script>
<style scoped>
 .grid{
   height: 80vh;
   width: 90vw;
 }
 .first-col{
   padding: 1%;
   height: 35vh;
 }
 .sec-col{
    height: 80vh;
    background-color: #eee;
    box-shadow: 1px 1px 8px 1px rgba(0,0,0, 0.2);
    border-radius: 5px;
    padding: 5%;
 }
 .my-agenda{
   width: 75%;
   height: 90%;
   background-color: #eee;
   border-radius: 5px;
   box-shadow: 1px 1px 8px 1px rgba(0,0,0, 0.2);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-weight: bold;
   margin-left: 10%;
   cursor: pointer;
 }
  .card-agendas{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.6rem;
    cursor: pointer;
 }
 .card{
   margin-top: 1.5%;
 }
 .card-title{
   margin: 0;
 }

</style>
