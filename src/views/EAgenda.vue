<template>
 <div class="eagenda-container">
   <div class="grid-row">
     <h1>Conectando pessoas e estabelecimentos de serviços</h1>
     <h2>Agende seu horário ou disponibilize seu horário</h2>
     <img src="../assets/calendar.png" width="250" height="250"/>
   </div>
   <div class="button-align">
     <button class="btn btn-light my-button" @click="goToLoginPage">Entrar</button>
     <button class="btn btn-light my-button" @click="goToRegisterPage">Cadastrar</button>
   </div>
 </div>
</template>
<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    function goToLoginPage() {
      router.push({ name: 'Login' });
    }
    function goToRegisterPage() {
      router.push({ name: 'Register' });
    }

    return {
      goToLoginPage,
      goToRegisterPage,
    };
  },
};
</script>
<style>
.eagenda-container{
  width: 100vw;
  height: 90vh;
  background-image:  url("../assets/background.jpg");
  background-size: cover;
  display: flex;
  font-family: 'Baloo Paaji 2', cursive;
  margin-top: -1.5%;
}
.grid-row{
  display: flex;
  flex-direction: column;
  max-width: 50%;
  padding: 5%;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
}
.button-align{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50%;
  width: 50%;
  align-self: center;
  align-items: center;
}
.my-button{
  width: 15vw;
  height: 10vh;
  font-size: 1.5rem !important;
}
.button-align>button:first-child{
  background-color:  #42b983 !important;
  color: white;
}
.button-align>button:last-child{
  background-color:  rgb(75, 83, 79) !important;
  color: white;
}
button:hover{
  filter: brightness(0.9);
}
</style>
