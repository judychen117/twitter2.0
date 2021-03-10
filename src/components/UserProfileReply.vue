<template>
  <div class="tweet-card">
    <div class="nav">
      <div class="top-right">
        <div class="editorMode" v-if="currentUser.id === info.id">
          <button class="edit-button">編輯個人檔案</button>
        </div>
        <div class="nonEditorMode" v-else>
          <div class="email">
            <img src="./../../public/img/email.svg" alt="email" />
          </div>
          <div class="bell">
            <img src="./../../public/img/bell.svg" alt="bell" />
          </div>
          <div class="user-button">
            <button type="button" class="followers-item-button">
              正在跟隨
            </button>
          </div>
        </div>
      </div>
      <div class="nav-tabs">
        <div class="nav-tab">
          <a href="">推文</a>
        </div>
        <div class="nav-tab nav-active">
          <a href="">推文與回覆</a>
        </div>
        <div class="nav-tab">
          <router-link
            :to="{ name: 'user-profile-like', params: { id: info.id } }"
          >
            <a href="">喜歡的內容</a>
          </router-link>
        </div>
      </div>
    </div>
    <div class="tweet-list" v-for="tweet in tweets" :key="tweet.TweetId">
      <a href="" class="tweet-avatar">
        <img :src="tweet.Tweet.User.avatar" alt="avatar" />
      </a>
      <div class="tweet-content">
        <a href="" class="tweet-title">
          <p class="tweet-name">{{ tweet.Tweet.User.name }}</p>
          <p class="tweet-id">{{ tweet.Tweet.User.account }}</p>
          <span class="dot"></span>
          <p class="tweet-time">{{ tweet.createdAt | fromNow }}</p>
        </a>
        <div class="tweet-text">
          <p>
            {{ tweet.Tweet.description }}
          </p>
        </div>
        <div class="tweet-activity">
          <a href="#" class="tweet-comment">
            <img
              src="../../public/img/commentIcon.svg"
              alt="comments"
              class="icon"
            />
            <span>{{ tweet.Tweet.Replies.length }}</span>
          </a>
          <a href="#" class="tweet-like">
            <img src="../../public/img/likeIcon.svg" alt="likes" class="icon" />
            <span>{{ tweet.Tweet.Likes.length }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";
import { fromNowFilter, emptyImageFilter } from "./../utils/mixins";
import { mapState } from "vuex";

export default {
  data() {
    return {
      tweets: [],
      id: -1,
    };
  },
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUsers(id);
  },
  methods: {
    async fetchUsers(id) {
      try {
        const response = await userAPI.getReply({ id });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.tweets = response.data;
        // this.tweets.filter((tweet) => tweet.Tweet.User);
        console.log(response);
      } catch (e) {
        Toast.fire({
          icon: "error",
          title: "無法取得Followers，請稍後再試",
        });
        console.log(e);
      }
    },
  },
  mixins: [fromNowFilter, emptyImageFilter],
};
</script>
<style scoped>
.tweet-card {
  position: relative;
}
.top-right {
  position: absolute;
  top: -11rem;
  right: 1rem;
}
a {
  text-decoration: none; /* 拿掉底線 */
}
.edit-button {
  width: 180px;
  height: 45px;
  border-radius: 210px;
  margin: 0;
  padding: 0;
  border: 1px solid #ff6600;
  outline: none;
  color: #ff6600;
  margin-top: 10px;
}
.followers-item-button {
  font-size: 15px;
  width: auto;
  height: auto;
  border-radius: 62px;
  background: #ff6600;
  margin: 0;
  padding: 6px;
  border: 1px solid transparent;
  outline: none;
  color: #ffffff;
}
.nonEditorMode {
  display: flex;
}
.email {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #ff6600;
  margin-right: 1rem;
}
.email img {
  padding-top: 0.5rem;
  padding-left: 0.5rem;
}
.bell {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #ff6600;
  margin-right: 1rem;
}
.bell img {
  padding-top: 0.4rem;
  padding-left: 0.4rem;
}
.nav {
  height: 3rem;
  background-color: #fff;
}
.nav-tabs {
  display: flex;
  justify-content: right;
  align-content: center;
  width: 600px;
  border-bottom: 1px solid #e6ecf0;
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
  width: 600px;
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
  margin-left: 25px;
}
.tweet-content {
  padding-left: 1.5rem;
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
.tweet-activity span {
  color: #657786;
}
.tweet-comment img {
  padding-right: 1rem;
}
.tweet-comment {
  padding-right: 1.5rem;
}
.tweet-like img {
  padding-right: 1rem;
}
</style>