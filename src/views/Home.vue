<template>
  <div class="home">
    <div class="container-fluid grid">
      <div class="row justify-content-between">
        <div class="col-3 align-self-center first-col">
          <div class="my-agenda">
            <h4>Minha agenda</h4>
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
          <div class="card">
            <div class="card-body card-agendas">
              <div>
                <h5 class="card-title">Beleza única Salão de Beleza</h5>
                <p class="card-text">Endereço: hhhhhhhh n:8665 Bairro: kkkkk</p>
              </div>
              <img src="../assets/calendar.png" width="50" height="50"/>
            </div>
          </div>
          <div class="card">
            <div class="card-body card-agendas">
              <div>
                <h5 class="card-title">Beleza única Salão de Beleza</h5>
                <p class="card-text">Endereço: hhhhhhhh n:8665 Bairro: kkkkk</p>
              </div>
              <img src="../assets/calendar.png" width="50" height="50"/>
            </div>
          </div>
          <div class="card">
            <div class="card-body card-agendas">
              <div>
                <h5 class="card-title">Beleza única Salão de Beleza</h5>
                <p class="card-text">Endereço: hhhhhhhh n:8665 Bairro: kkkkk</p>
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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
  },
});
</script>
<style scoped>
 .grid{
   height: 80vh;
   width: 90vw;
 }
 .first-col{
   padding: 4%;
   height: 40vh;
 }
 .sec-col{

   height: 80vh;
    background-color: #eee;
    box-shadow: 1px 1px 8px 1px rgba(0,0,0, 0.2);
    border-radius: 5px;
    padding: 5%;
 }
 .my-agenda{
   width: 100%;
   height: 100%;
   background-color: #eee;
   border-radius: 5px;
   box-shadow: 1px 1px 8px 1px rgba(0,0,0, 0.2);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-weight: bold;
 }
  .card-agendas{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.6rem;
 }
 .card{
   margin-top: 1.5%;
 }
 .card-title{
   margin: 0;
 }

</style>
