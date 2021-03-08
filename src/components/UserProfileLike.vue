<template>
  <div class="tweet-card">
    <div class="nav">
      <div class="nav-tab">
        <a href="">推文</a>
      </div>
      <div class="nav-tab">
        <a href="">推文與回覆</a>
      </div>
      <div class="nav-tab nav-active">
        <a href="">喜歡的內容</a>
      </div>
    </div>
    <div class="tweet-list" v-for="tweet in users" :key="tweet.id">
      <a href="" class="tweet-avatar">
        <img :src="info.avatar" alt="avatar" />
      </a>
      <div class="tweet-content">
        <a href="" class="tweet-title">
          <p class="tweet-name">{{ info.name }}</p>
          <p class="tweet-id">{{ info.account }}</p>
          <span class="dot"></span>
          <p class="tweet-time">{{ tweet.createdAt }}</p>
        </a>
        <div class="tweet-text">
          <p>
            {{ tweet.description }}
          </p>
        </div>
        <div class="tweet-activity">
          <a href="#" class="tweet-comment">
            <img
              src="../../public/img/commentIcon.svg"
              alt="comments"
              class="icon"
            />
            <span>{{ tweet.Replies.length }}</span>
          </a>
          <a href="#" class="tweet-like">
            <img src="../../public/img/likeIcon.svg" alt="likes" class="icon" />
            <span>{{ tweet.Likes.length }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";
import {  fromNowFilter } from "./../utils/mixins";

export default {
  data() {
    return {
      users: [],
    };
  },
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUsers(id);
  },
  methods: {
    async fetchUsers(id) {
      try {
        const response = await userAPI.getLike({ id });
        console.log(response);
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.users = response.data;
      } catch (e) {
        Toast.fire({
          icon: "error",
          title: "無法取得Followers，請稍後再試",
        });
        console.log(e);
      }
    },
  },
  mixins: [fromNowFilter],
};
</script>
<style scoped>
a {
  text-decoration: none; /* 拿掉底線 */
}
.nav {
  height: 3rem;
}
.nav-tab {
  width: 130px;
  height: 3rem;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
}
.nav-tab a {
  color: #657786;
}
.nav-active {
  border-bottom: 3px solid #ff6600;
}
.nav-active a {
  color: #ff6600;
}
.tweet-list {
  padding: 1rem 0;
  width: 510px;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
}
.tweet-name {
  font-weight: 500;
}
.tweet-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 20px;
}
.tweet-content {
  padding-left: 2rem;
}
.tweet-title {
  display: flex;
}
.tweet-name {
  margin-right: 20px;
}
.tweet-id,
.tweet-time {
  padding: 0 rem;
  color: #657786;
  font-weight: 300;
}
.tweet-text {
  font-weight: 300;
}
.dot {
  background-color: #657786;
  border-radius: 50%;
  height: 5px;
  width: 5px;
  position: relative;
  top: 8px;
  margin: 0 0.5rem;
}
.tweet-activity span{
  color: #657786;
}
.tweet-comment img{
  padding-right: 1rem;
}
.tweet-comment {
  padding-right: 1.5rem;
}
.tweet-like img{
    padding-right: 1rem;
}
</style>