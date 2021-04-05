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
          <div class="card">
            <div class="card-body card-agendas">
              <div>
                <h5 class="card-title">Unhas Lindas Manicure - Joana Santos</h5>
                <p class="card-text">Endereço: Rua Roberto Vianna N:776 Bairro: Londrina</p>
              </div>
              <img src="../assets/calendar.png" width="50" height="50"/>
            </div>
          </div>
          <div class="card">
            <div class="card-body card-agendas">
              <div>
                <h5 class="card-title">Beleza única Salão de Beleza - Zelita Cunha</h5>
                <p class="card-text">Endereço: Rua Jandira da Silva N:8665 Bairro: Bela Vista</p>
              </div>
              <img src="../assets/calendar.png" width="50" height="50"/>
            </div>
          </div>
          <div class="card">
            <div class="card-body card-agendas">
              <div>
                <h5 class="card-title">Bike Oficina de Bicicleta - Breno Mendez</h5>
                <p class="card-text">Endereço: Rua Valdirene Vicente n:668 Bairro: Pedra Branca</p>
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
import { useRouter } from 'vue-router';
import { getCurrentUserValue } from '../services/auth.service';

export default {
  setup() {
    const router = useRouter();

    if (!getCurrentUserValue()) {
      router.push({ name: 'EAgenda' });
    }

    function goToMyAgenda() {
      router.push({ name: 'NewAgenda' });
    }
    return { goToMyAgenda };
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
 }
 .card{
   margin-top: 1.5%;
 }
 .card-title{
   margin: 0;
 }

</style>
