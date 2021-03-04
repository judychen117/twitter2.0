<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="logo mb-4">
        <img src="../../public/img/alphaCampIcon.svg" alt="alphitter logo" />
      </div>
      <div class="text-center mb-4">
        <h1 class="title">建立你的帳號</h1>
      </div>
      <div class="box">
        <p>帳號</p>
        <label for="account"></label>
        <input
          id="account"
          v-model="account"
          name="account"
          type="text"
          placeholder=""
          autocomplete=""
          required
          autofocus
        />
        <div class="seperation"></div>
      </div>
      <div class="box">
        <p>名稱</p>
        <label for="name"></label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          placeholder=""
          autocomplete="name"
          required
          autofocus
        />
        <div class="seperation"></div>
      </div>

      <div class="box">
        <p>Email</p>
        <label for="email"></label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          placeholder=""
          autocomplete="email"
          required
        />
        <div class="seperation"></div>
      </div>

      <div class="box">
        <p>密碼</p>
        <label for="password"></label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          placeholder=""
          autocomplete="new-password"
          required
        />
        <div class="seperation"></div>
      </div>

      <div class="box">
        <p>密碼確認</p>
        <label for="password-check"></label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          placeholder=""
          autocomplete="new-password"
          required
        />
        <div class="seperation"></div>
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3 mt-4" type="submit">
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
.container,
.logo {
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 1.125rem;
}
.title {
  font-size: 1.5rem;
  font-weight: 500;
}
form {
  width: 600px;
}
.box {
  position: relative;
  background-color: #e5e5e5;
  font-size: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
}
.box p {
  padding-top: 0.6rem;
  padding-left: 0.6rem;
  color: rgba(101, 119, 134, 1);
}
input {
  background-color: #e5e5e5;
  border: none;
  border-style: none;
  height: 2rem;
  padding-left: 1rem;
  border-radius: 1rem;
}
textarea:focus,
input:focus,
button:focus {
  outline: none;
}
.seperation {
  height: 2px;
  background-color: rgba(101, 119, 134, 1);
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 1rem;
}
button {
  background: #ff6600;
  font-size: 1.125rem;
}
</style>