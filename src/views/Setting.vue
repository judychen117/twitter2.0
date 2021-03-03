<template>
  <div class="container py-5">
    <NavBar/>
    <form class="w-50 mx-5" @submit.stop.prevent="handleSubmit">
    <div>帳戶設定</div>
      <div class="form-label-group mb-2">
        <label for="account"></label>
        <input
          id="account"
          v-model="account"
          name="account"
          type="text"
          class="form-control"
          placeholder="帳號"
          autocomplete="username"
          required
          autofocus
        />
      </div>
      <div class="form-label-group mb-2">
        <label for="name"></label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="名稱"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email"></label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="Email"
          autocomplete="email"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password"></label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="密碼"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check"></label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="密碼確認"
          autocomplete="new-password"
          required
        />
      </div>
    <div class="buttonStyle">
        <button class="btn btn-lg btn-primary btn-block mb-3 mt-4" type="submit">
        註冊
      </button>
    </div>
    </form>
    <RecommendUsers/>
  </div>
</template>

<script>
import RecommendUsers from "./../components/RecommendUsers";
import NavBar from "./../components/Navbar";
export default {
  components: {
    RecommendUsers,
    NavBar,
  },
};
</script>

<style scoped>
input {
  color: 657786;
  background: #e5e5e5;
  height: 3.125rem;
  font-size: 1rem;
}
button {
  background: #ff6600;
  font-size: 1.125rem;
  width: 7.625rem;
  position: absolute;
  right: 0;
}
.buttonStyle{
    display: flex;
    position: relative;
}
.container, .logo {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  font-size: 1.125rem;
  width: 100%;
}

</style>
