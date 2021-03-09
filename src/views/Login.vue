<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="logo mb-4">
        <img src="../../public/img/alphaCampIcon.svg" alt="alphitter logo" />
      </div>
      <div class="text-center mb-4">
        <h1 class="title">登入 Alphitter</h1>
      </div>
      <div class="box">
        <p>帳號</p>
        <label for="account"></label>
        <input
          id="account"
          v-model="email"
          name="account"
          type="text"
          placeholder=""
          autocomplete="username"
          required
          autofocus
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

      <button
        class="btn btn-lg btn-primary btn-block mb-3 mt-4"
        :disabled="isProcessing"
        type="submit"
      >
        登入
      </button>

      <div class="text-right mb-3 mt-4">
        <router-link :to="{ name: 'regist' }">註冊Alphitter </router-link>
        <span class="dot"></span>
        <router-link :to="{ name: 'admin-login' }"> 後台登入</router-link>
      </div>
    </form>
  </div>
</template>
<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入email與password",
          });
          return;
        }
        //避免做出多次請求
        this.isProcessing = true;

        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });

        console.log("response", response);
        const { data } = response;
        // 只要不成功就無法進下一個頁面以避免空值
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 把token存在application的localstorage
        localStorage.setItem("token", data.token);

        // 修改 currentUser 資料
        this.$store.commit("setCurrentUser", data.user);

        this.$router.push("/tweets");
      } catch (e) {
        this.password = "";
        Toast.fire({
          icon: "warning",
          title: "請確認您輸入了正確的帳號密碼",
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
  margin-bottom: 2rem;
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
  background-color: #ff6600;
  font-size: 1.125rem;
  border: none;
}
.dot {
  background-color: rgba(0, 153, 255, 1);
  border-radius: 50%;
  height: 0.5rem;
  width: 0.5rem;
  display: inline-block;
}
</style>