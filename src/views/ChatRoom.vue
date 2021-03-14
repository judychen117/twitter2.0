<template>
  <div class="main-tweets" id="main">
    <NavBar class="cartroom-nav" />
    <div class="online-users">
      <div class="online-users-nav nav">
        上線的使用者
        <span>({{ newUsers.length }})</span>
      </div>
      <div class="online-users-list-content">
        <ul class="online-users-list">
          <li
            class="online-users-item"
            v-for="(newUser, index) in newUsers"
            :key="index"
          >
            <img
              :src="newUser.avatar"
              alt="avatar"
              class="online-users-avatar avatar"
            />
            <div class="online-users-name">
              <p>{{ newUser.name }}</p>
            </div>
            <div class="online-users-id">
              <p>{{ newUser.account }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="open-chatroom">
      <div class="open-chatroom-nav nav">公開聊天室</div>
      <div class="open-chatroom-content">
        <ul class="open-chatroom-content-list">
          <li
            class="open-chatroom-item"
            v-for="(message, index) in messages"
            :key="index"
            :class="{
              'currentuser-item': message.type === 0,
              'online-item': message.type === 3 || message.type === 4,
            }"
          >
            <div class="online-item" v-if="message.type === 3">
              <p>{{ message.message }}上線了</p>
            </div>
            <div class="online-item" v-else-if="message.type === 4">
              <p>{{ message.message }}離線</p>
            </div>
            <div class="open-chatroom-item" v-else>
              <img
                :src="message.avatar"
                alt="avatar"
                class="open-chatroom-avatar avatar"
                v-if="message.type === 1"
              />
              <div
                class="open-chatroom-user-content"
                :class="{ 'currentuser-content': message.type === 0 }"
              >
                <p>{{ message.message }}</p>
              </div>
            </div>
          </li>
          <!-- <li class="open-chatroom-item currentuser-item">
            <img
              :src="currentUser.avatar"
              alt="avatar"
              class="open-chatroom-avatar avatar"
            />
            <div class="open-chatroom-user-content currentuser-content">
              <p>安安</p>
            </div>
          </li> -->
        </ul>
      </div>
      <form class="open-chatroom-form">
        <div class="open-chatroom-text">
          <input
            type="text"
            class="open-chatroom-form-control"
            v-model="newMessage"
            placeholder="輸入訊息..."
          />
        </div>
        <div class="open-chatroom-submit">
          <button
            type="submit"
            class="open-chatroom-button"
            @click="pingServer()"
          >
            <i class="fas fa-paper-plane" id="send-messages"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script src="/socket.io/socket.io.js"></script>
<script>
import { Toast } from "./../utils/helpers";
import NavBar from "./../components/Navbar";
import { mapState } from "vuex";
import { io } from "socket.io-client";
const socket = io("https://twitterkiller-backend.herokuapp.com/"); // 接受後端的 message event 的 emit

export default {
  data() {
    return {
      messages: [],
      newMessage: null,
      currentName: "",
      currentId: "",
      currentAccount: "",
      currentAvatar: "",
      numberUser: "",
      newUsers: [],
      IncomingAlert: "",
      userLeave: "",
    };
  },
  components: {
    NavBar,
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.currentName = this.currentUser.name;
    this.currentId = this.currentUser.id;
    this.currentAccount = this.currentUser.account;
    this.currentAvatar = this.currentUser.avatar;
    socket.emit("add user", {
      name: this.currentName,
      id: this.currentId,
      account: this.currentAccount,
      avatar: this.currentAvatar,
    });
    socket.on("user join public chat", (data) => {
      this.newUsers = [];
      this.newUsers = data.onlineUserList;
      this.newUsers = this.newUsers.filter(
        (newUser) => newUser.name != data.user.name
      );
      this.IncomingAlert = data.user.account;
      this.messages.push({ message: this.IncomingAlert, type: 3 });
    });

    socket.on("user left", (data) => {
      console.log(data);
      this.userLeave = data.user.account;
      this.messages.push({ message: this.userLeave, type: 4 });
    });

    socket.emit("reconnect", this.currentUser);
    socket.on("user reconnect", (data) => {
      this.newUsers = [];
      console.log("LOOK:", data);
      this.newUsers = data.onlineUserList;
    });

    socket.on("new message", (data) => {
      console.log(this.messages);
      this.messages.push({
        message: data.message,
        avatar: data.avatar,
        id: data.id,
        type: 1,
      });
    });
  },
  methods: {
    pingServer() {
      if (this.newMessage.replace(/\s*/g, "") === "") {
        Toast.fire({
          icon: "error",
          title: "推文內容不能空白,請輸入內容",
        });
        return;
      }
      this.messages.push({
        message: this.newMessage,
        avatar: this.currentAvatar,
        id: this.currentId,
        type: 0,
      });
      socket.emit("new message", {
        message: this.newMessage,
        avatar: this.currentAvatar,
        id: this.currentId,
      });
      this.newMessage = "";
    },
  },
};
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
.online-users-list-content {
  height: 94%;
  display: flex;
  flex-direction: column;
}
.online-users-list {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
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
  display: flex;
  flex-direction: column;
  height: 100%;
}
.open-chatroom-item {
  margin: 10px;
  display: flex;
  justify-content: flex-start;
}
.currentuser-item {
  justify-content: flex-end;
  color: red;
}
.open-chatroom-user-content {
  width: auto;
  background: #b6b8b9;
  border-radius: 10% 10% 10% 0%;
}
.open-chatroom-user-content > p {
  margin: 10px;
  line-height: 50px;
}
.currentuser-content {
  border-radius: 10% 10% 0% 10%;
  background: #ff6600;
}
.currentuser-content > p {
  color: white;
}
.open-chatroom-content {
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.open-chatroom-content-list {
  overflow: scroll;
  overflow-x: hidden;
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
  align-items: center;
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
  outline: none;
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
button {
  border: 0;
  background: none;
  font-size: 25px;
}
#send-messages {
  color: #ff6600;
}
.online-item {
  justify-content: center;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
input {
  padding-left: 1rem;
}
</style>