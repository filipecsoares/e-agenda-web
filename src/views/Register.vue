<template>
  <div class="card">
    <h1>Cadastre-se</h1>
    <img
      id="profile-img"
      src="../assets/avatar-profile.png"
      class="profile-img"
    />
    <form>
      <div class="form-group">
        <label for="name">Nome completo</label>
        <input
          id="name"
          type="text"
          class="form-control"
          name="name"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          id="email"
          type="email"
          class="form-control"
          name="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="phone">Telefone</label>
        <input id="phone" type="text" class="form-control" name="phone" />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input
          id="password"
          type="password"
          class="form-control"
          name="password"
          required
        />
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block">
          <span>Cadastrar</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-group {
  text-align: left;
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
  width: 45%;
  display: block;
  margin: auto;
  padding: 1% 8%;
}
@media screen and (max-width: 840px) {
  .card {
    width: 80%;
    padding: 1% 4%;
  }
}
@media screen and (max-width: 540px) {
  .card {
    width: 90%;
    padding: 1% 2%;
  }
}
</style>
