<template>
  <div class="main-tweets" id="main">
    <NavBar class="cartroom-nav" />
    <div class="online-users">
      <div class="online-users-nav nav">
        <span>{{ numberUser }}</span
        >上線的使用者
      </div>
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
          <li
            class="open-chatroom-item"
            v-for="(message, index) in messages"
            :key="index"
            :class="{ 'currentuser-item': message.type === 0 }"
          >
            <!-- <img
              :src="currentUser.avatar"
              alt="avatar"
              class="open-chatroom-avatar avatar"
            /> -->
            <div class="open-chatroom-name">
              <p>
                {{ current }}
              </p>
            </div>
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
      <form @submit.stop.prevent="handleSubmit">
        <div class="open-chatroom-text">
          <!-- <label for="newMessage"></label>
          <textarea
            class="open-chatroom-form-control"
            rows="3"
            name="newMessage"
            v-model="newMessage"
            placeholder="輸入訊息..."
          >
          </textarea> -->
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
            推文
          </button>
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
  data() {
    return {
      messages: [],
      newMessage: null,
      current: "",
      numberUser: "",
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
    this.current = this.currentUser.name;
    socket.emit("add user", this.current);
    socket.on("login", (data) => {
      console.log(data);
      this.numberUser = data.numUsers;
    });
    socket.on("user join public chat", (data) => {
      console.log(data);
    });

    socket.on("message", (message) => {
      this.messages.push(message);
    });
    // for other users
    socket.on("new message", (data) => {
      console.log(data);
      this.messages.push(data);
    });
    socket.on('user left')
  },
  methods: {
    pingServer() {
      // for myself: type 0--> receiving
      this.messages.push({ message: this.newMessage, type: 0 });
      socket.emit("new message", { message: this.newMessage, type: 1 });
      this.newMessage = "";
    },
    // socket.on('sendMessage',(data)=>{
    //   socket.broadcast.emit('sendMessage', data)
    // })
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    console.log(answer);
    if (answer) {
      this.userLeave = this.currentUser.id;
      console.log("user leaves");
      socket.emit('disconnect', this.userLeave);
      // socket.on('user left',(data)=>{
      //   console.log(data)
      // })
      next();
    } else {
      next(false);
    }
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
  color: red;
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