<template>
  <div class="user-cards">
    <div class="user-card" v-for="user in users" :key="user.id">
      <div class="user-pic">
        <img :src="user.cover | emptyCover" class="user-cover" alt="cover" />
        <a href="" class="user-avatar">
          <img :src="user.avatar | emptyImage" alt="avatar" />
        </a>
      </div>
      <div class="user-content">
        <a href="" >
          <div class="user-name">{{ user.name }}</div>
          <div class="user-id">{{ user.account }}</div>
        </a>
        <div class="user-activity">
          <a href="#" class="tweets-activity">
            <img
              src="../../public/img/commentIcon.svg"
              alt="comments"
              class="icon"
            />
            <span>{{ user.Tweets.length }}</span>
          </a>
          <a href="#" class="tweets-like">
            <img src="../../public/img/likeIcon.svg" alt="likes" class="icon" />
            <span>{{ user.Likes.length }}</span>
          </a>
        </div>
        <div class="user-follow">
          <p>
            <span class="following">{{ user.Followings.length }}個</span>跟隨中
          </p>
          <p>
            <span class="follower">{{ user.Followers.length }}個位</span>跟隨者
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import { emptyImageFilter } from "./../utils/mixins";

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
        this.users = response.data.filter((user) => user.email !== "root@example.com");
        // this.users.filter((user) => user.email !== "root@example.com");
      } catch (e) {
        Toast.fire({
          icon: "error",
          title: "無法取得Users，請稍後再試",
        });
        console.log(e);
      }
    },
  },
  mixins: [emptyImageFilter],
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
.user-cards {
  margin: 30px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5rem;
  height: 700px;
  overflow-y: auto;
}
.user-card {
  margin-left: 16px;
  height: 314px;
  width: 245px;
  background: #f6f7f8;
  border-radius: 1rem;
}
.user-pic {
  height: 140px;
  width: 100%;
  position: relative;
  border-radius: 1rem;
}
.user-pic .user-cover{
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.user-avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #fff;
  position: absolute;
  top: 4.5rem;
  left: 4.5rem;
}
.user-content {
  display: absolute;
  text-align: center;
}
.user-name{
  padding-top: 2rem;
}
.user-id {
  color: #657786;
  font-weight: 300;
}
.icon {
  margin: 0 10px;
  width: 15;
  height: 15px;
}
.user-activity {
  padding: 0.5rem 0;
}
.user-follow {
  font-size: 12px;
  display: flex;
  justify-content: center;
}
.user-follow p {
  padding: 0 0.5rem;
  font-weight: 300;
}
.user-follow span {
  font-weight: 500;
}
</style>