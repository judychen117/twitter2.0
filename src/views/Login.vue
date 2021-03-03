<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="logo mb-4">
        <img src="./../../public/Logo.png" alt="alphitter logo" />
      </div>
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal title">登入 Alphitter</h1>
      </div>

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

      <button class="btn btn-lg btn-primary btn-block mb-3 mt-4" type="submit">
        登入
      </button>

      <div class="text-right mb-3 mt-4">
        <p>
          <a href="/signup">註冊Alphitter </a>
          <a href="/admin-login"> 後台登入</a>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        email: this.email,
        password: this.password,
      });

      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 1.5rem;
}
input {
  color: 657786;
  background: #e5e5e5;
  height: 3.125rem;
  font-size: 1rem;
}
button {
  background: #ff6600;
   font-size: 1.125rem;
}
.container,
.logo {
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 1.125rem;
}
</style>