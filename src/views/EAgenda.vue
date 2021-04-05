<template>
 <div class="container-fluid">
   <div class="grid-row flex-column-center">
     <h1>Conectando pessoas e estabelecimentos de serviços</h1>
     <h2>Disponibilize e/ou agende seu horário</h2>
     <img src="../assets/calendar.png" width="230" height="230"/>
   </div>
   <div class="button-align flex-column-center">
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
<style scoped>
.container-fluid{
  height: 90vh;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  display: flex;
  font-family: 'Baloo Paaji 2', cursive;
  margin-top: -1.5%;
}
.grid-row{
  max-width: 60%;
  padding: 5%;
  text-align: center;
}
.grid-row h1{
  font-size: 3rem;
}
.button-align{
  height: 50%;
  width: 35%;
  align-self: center;
}
.flex-column-center{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
@media only screen and (max-width:820px){
  .container-fluid{
    flex-direction: column;
    width: 100%;
  }
  .grid-row{
    max-width: 100vw;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
  }
  .button-align{
    height: unset;
    display: flex;
    flex-direction: row;
  }
  .my-button{
    min-width: 20vw;
    min-height: 8vh;
    font-size: 1.5rem !important;
    margin: 0 2%;
  }

 @media only screen and (max-width:600px) {
   .grid-row h1,h2{
     font-size: 1.6rem !important;
   }
   img{
     width: 150px;
     height: 150px;
   }
   .my-button{
     font-size: 1.2rem !important;
     min-width: 30vw;
   }
 }
}
</style>
