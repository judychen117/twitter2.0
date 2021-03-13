<template>
  <div class="main-tweets" id="main">
    <NavBar class="cartroom-nav" />
    <div class="online-users">
      <div class="online-users-nav nav">上線的使用者</div>
      <ul class="online-users-list">
        <li class="online-users-item">
          <img
            :src="currentUser.avatar"
            alt="avatar"
            class="online-users-avatar avatar"
          />
          <div class="online-users-name">
            <p>{{ currentUser.name }}</p>
          </div>
          <div class="online-users-id">
            <p>{{ currentUser.account }}</p>
          </div>
        </li>
      </ul>
      <ul class="online-users-list">
        <li class="online-users-item">
          <img
            :src="currentUser.avatar"
            alt="avatar"
            class="online-users-avatar avatar"
          />
          <div class="online-users-name">
            <p>{{ currentUser.name }}</p>
          </div>
          <div class="online-users-id">
            <p>{{ currentUser.account }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="open-chatroom">
      <div class="open-chatroom-nav nav">公開聊天室</div>
      <div class="open-chatroom-content">
        <ul class="open-chatroom-content-list">
          <li class="open-chatroom-item">
            <img
              :src="currentUser.avatar"
              alt="avatar"
              class="open-chatroom-avatar avatar"
            />
            <!-- <div class="open-chatroom-name">
              <p>{{ currentUser.name }}</p>
            </div> -->
            <div class="open-chatroom-user-content">
              <p>安安你好</p>
            </div>
          </li>
          <li class="open-chatroom-item currentuser-item">
            <img
              :src="currentUser.avatar"
              alt="avatar"
              class="open-chatroom-avatar avatar"
            />
            <!-- <div class="open-chatroom-name">
              <p>{{ currentUser.name }}</p>
            </div> -->
            <div class="open-chatroom-user-content currentuser-content">
              <p>安安</p>
            </div>
          </li>
        </ul>
      </div>
      <form class="open-chatroom-form" @submit.stop.prevent="handleSubmit">
        <div class="open-chatroom-text">
          <label for="text"></label>
          <textarea
            class="open-chatroom-form-control"
            rows="3"
            name="text"
            v-model="text"
            placeholder="輸入訊息..."
          >
          </textarea>
        </div>
        <div class="open-chatroom-submit">
          <button type="submit" class="open-chatroom-button" @click="pingServer()">推文</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import NavBar from "./../components/Navbar";
import { mapState } from "vuex";
import { io } from "socket.io-client";
const socket = io("https://twitterkiller-backend.herokuapp.com/"); // 接受後端的 message event 的 emit

export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    pingServer() {
      console.log();
      socket.on("message", (message) => {
        console.log(message);
      });
      socket.emit('judy','this is judy');
    },
  },
};

// import socketio from 'socket.io';
// import VueSocketIO from 'vue-socket.io';

// export const SocketInstance = socketio('https://twitterkiller-backend.herokuapp.com/');
// Vue.use(VueSocketIO, SocketInstance)
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000000;
}
/* main tweets */
.main-tweets {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* padding: 3rem 0;   */
}
.cartroom-nav {
  margin-left: 50px;
}

/* online-users */
.online-users {
  width: 30rem;
  border-left: 2px solid #e6ecf0;
  border-right: 2px solid #e6ecf0;
}
.online-users-list {
  display: flex;
  flex-direction: column;
}
.online-users-item {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e6ecf0;
  padding: 10px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.online-users-id {
  color: #afb2b4;
}

/* open-chatroom */
.open-chatroom {
  width: 50rem;
  position: relative;
}
.open-chatroom-item {
  margin: 10px;
  display: flex;
}
.currentuser-item {
  justify-content: flex-end;
}

.open-chatroom-user-content {
  width: auto;
  background: #b6b8b9;
  border-radius: 40% 40% 40% 10%;
}
.currentuser-content {
  border-radius: 40% 40% 10% 40%;
}
.open-chatroom-user-content > p {
  margin: 20px;
}

/* open-chatroom-form */
.open-chatroom-form {
  border-top: 2px solid #e6ecf0;
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: auto;
  align-items: flex-end;
  justify-content: space-evenly;
}
.open-chatroom-text {
  width: 90%;
}
.open-chatroom-form-control {
  margin: 10px 0px;
  background: #b5b7b8;
  width: 100%;
  height: 50px;
  border: 0px;
  border-radius: 100px;
  line-height: 40px;
}
.tweets-container {
  width: 600px;
  height: 100%;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  margin-right: 30px;
}
.nav {
  border-bottom: 1px solid #e6ecf0;
  padding: 10px;
}
</style>