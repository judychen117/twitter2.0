<template>
  <div class="nav-bar">
    <div class="mt-3">
      <router-link :to="{ name: 'tweets-main' }" class="nav-logo">
        <img src="../../public/img/alphaCampIcon.svg" alt="logo" class="logo" />
      </router-link>
      <ul class="nav-list">
        <li class="nav-item nav-home">
          <router-link :to="{ name: 'tweets-main' }">
            <i class="nav-icon fas fa-home"></i>
            <p>首頁</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'chatroom' }">
            <img
              src="./../../public/img/Notice.svg"
              alt="chat"
              class="nav-icon"
            />
            <p>通知</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'chatroom' }">
            <img
              src="./../../public/img/chat.svg"
              alt="chat"
              class="nav-icon"
            />
            <p>公開聊天室</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'chatroom' }">
            <img
              src="./../../public/img/chat.svg"
              alt="chat"
              class="nav-icon"
            />
            <p>私人訊息</p>
          </router-link>
        </li>
        <li class="nav-item nav-profile">
          <router-link
            :to="{ name: 'user-profile-tweet', params: { id: currentUser.id } }"
          >
            <i class="nav-icon fas fa-user-alt"></i>
            <p>個人資料</p>
          </router-link>
        </li>
        <li class="nav-item nav-setting">
          <router-link :to="{ name: 'setting' }">
            <i class="nav-icon fas fa-cog"></i>
            <p>設定</p>
          </router-link>
        </li>

        <li>
          <button
            class="nav-teweet-button button"
            @click.stop.prevent="addPost"
          >
            推文
          </button>
        </li>
      </ul>
      <router-link :to="{ name: 'login' }" class="nav-item nav-sign-out">
        <i class="nav-icon fas fa-sign-out-alt" @click="logout"></i>
        <p @click="logout">登出</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      showModal: "post",
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    addPost() {
      this.showModal = "post";
      this.$emit("show-post-modal", this.showModal);
    },
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.nav-bar {
  margin-right: 40px;
  width: 235px;
  height: 100%;
  position: relative;
}
.nav-logo {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.logo {
  margin-top: 20px;
}
.nav-list {
  margin-top: 100px;
}
.nav-item {
  font-size: 18px;
}
.nav-item > a {
  width: 235px;
  height: 60px;
  display: flex;
  align-items: center;
}
.nav-icon {
  margin-right: 20px;
  color: #1c1c1c;
  width: 18px;
  height: 18px;
}
.nav-teweet-button {
  width: 210px;
  height: 45px;
  border-radius: 210px;
  background: #ff6600;
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  color: #ffffff;
  margin-top: 10px;
}
.nav-sign-out {
  position: absolute;
  bottom: 0px;
  left: 0px;
  margin-bottom: 10px;
}
button {
  position: relative;
  top: 2rem;
}
</style>