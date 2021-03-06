<template>
  <div class="tweets-card">
    <div class="tweets-table" v-for="user in users" :key="user.id" ></div>
  </div>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await adminAPI.users.getUsers();
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.users = response.data;
        console.log(response.data);
      } catch (e) {
        Toast.fire({
          icon: "error",
          title: "無法取得Users，請稍後再試",
        });
        console.log(e);
      }
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
a {
  text-decoration: none; /* 拿掉底線 */
  color: #000000;
}
.tweets-card {
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  padding: 15px;
  position: relative;
}
.tweets-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: palegreen;
  margin-right: 10px;
}
.tweets-title {
  display: flex;
  margin: 4px 0 4px 0;
}
.tweets-title > h5 {
  margin-right: 10px;
}
.tweet {
  padding: 5px;
}
.tweets-name {
  margin-right: 5px;
}
.tweets-id,
.tweets-time {
  color: #657786;
}
.icon {
  position: absolute;
  width: 15;
  height: 15px;
  top: 1rem;
  right: 1rem;
}
</style>