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
          v-model="checkPassword"
          name="checkPassword"
          type="password"
          placeholder=""
          autocomplete="new-password"
          required
        />
        <div class="seperation"></div>
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3 mt-4"
        :disabled="isProcessing"
        type="submit"
      >
        註冊
      </button>

      <div class="text-center mb-3">
        <p>取消</p>
      </div>
    </form>
  </div>
</template>

<script>
import signUpAPI from "./../apis/signUp";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.account) {
        Toast.fire({
          icon: "warning",
          title: "請填寫帳號",
        });
        return;
      }
      if (!this.name) {
        Toast.fire({
          icon: "warning",
          title: "請填寫名稱",
        });
        return;
      }
      if (!this.email) {
        Toast.fire({
          icon: "warning",
          title: "請填寫email",
        });
        return;
      }
      if (!this.password) {
        Toast.fire({
          icon: "warning",
          title: "請填寫密碼",
        });
        return;
      }
      if (!this.checkPassword) {
        Toast.fire({
          icon: "warning",
          title: "請填寫密碼確認",
        });
        return;
      }
      if (this.password !== this.checkPassword) {
        Toast.fire({
          icon: "warning",
          title: "密碼確認不一致，請再次填寫",
        });
        this.checkPassword = "";
        return;
      }
      try {
        // const form = e.target
        // console.log(form)
        // const formData = new FormData(form)
        // for (let [key, value] of formData.entries()) {
        //   console.log(`${key}: ${value}`)
        // }
        const formData = {
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword,
        };
        this.isProcessing = true;
        const { data } = await signUpAPI.signUp({ formData });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "註冊成功",
        });
        this.$router.push({ name: "login" });
      } catch (e) {
        Toast.fire({
          icon: "error",
          title: "無法註冊帳號，請稍後再試",
        });
        this.isProcessing = false;
        console.log(e);
      }
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