<template>
  <div class="container py-5">
    <form class="w-50" @submit.stop.prevent="handleSubmit">
      <p>logo</p>
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">建立你的帳號</h1>
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

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        註冊
      </button>

      <div class="text-center mb-3">
        <p>取消</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck,
      });

      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
    },
  },
};
</script>
<style scoped>
input {
  color: 657786;
  background: #e5e5e5;
  /* font-size: 0.8rem; */
}
button {
  background: #ff6600;
  margin-top: 2rem;
}
.container {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>