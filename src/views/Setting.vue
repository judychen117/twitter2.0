<template>
  <div class="setting">
    <NavBar />
    <div class="setting-form">
      <form @submit.stop.prevent="handleSubmit">
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
          />
        </div>
        <div class="form-label-group mb-3">
          <label for="password-check"></label>
          <input
            id="password-check"
            v-model="checkPassword"
            name="checkPassword"
            type="password"
            class="form-control"
            placeholder="密碼確認"
            autocomplete="new-password"
          />
        </div>
        <div class="buttonStyle">
          <button
            class="btn btn-lg btn-primary btn-block mb-3 mt-4"
            type="submit"
          >
            儲存
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NavBar from "./../components/Navbar";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import userAPI from "./../apis/user";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      account: "",
      name: "",
      email: "",
      checkPassword: "",
      password: "",
      id: "",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchCurrentUser();
  },
  methods: {
    async fetchCurrentUser() {
      try {
        const { data } = await userAPI.userEdit.getSetting(this.currentUser.id);
        console.log(data);
        const { name, email, account, id } = data;
        this.account = account;
        this.name = name;
        this.email = email;
        this.id = id;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "獲取資料失敗,請稍後再試",
        });
      }
    },
    async handleSubmit(e) {
      try {
        const form = e.target;
        const formData = new FormData(form);
        const { data } = await userAPI.userEdit.editSetting({
          id: this.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.fetchCurrentUser();
        Toast.fire({
          icon: "success",
          title: "儲存成功",
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法修改資料,請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.setting {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
}
.setting-form {
  width: 600px;
  height: 100%;
  margin-right: 30px;
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
  width: 7.625rem;
  position: absolute;
  right: 0;
}
.buttonStyle {
  display: flex;
  position: relative;
}

.logo {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  font-size: 1.125rem;
  width: 100%;
  height: 100%;
}
form {
  width: 600px;
}
</style>
