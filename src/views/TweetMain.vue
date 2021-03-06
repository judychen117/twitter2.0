<template>
  <div class="main-tweets">
    <NavBar />
    <div class="tweets-container">
      <div class="tweets-header">
        <router-link to="/tweets">首頁</router-link>
      </div>
      <div class="tweets">
        <div class="tweets-post-card">
          <div class="tweets-post">
            <a href="">
              <img
                src="../../public/img/UserAvatar.svg"
                alt="avatar"
                class="tweets-avatar"
              />
            </a>
            <form class="tweets-form" @submit.stop.prevent="handleSubmit">
              <div class="tweets-text">
                <label for="text"></label>
                <textarea
                  class="form-control"
                  rows="3"
                  name="text"
                  v-model="text"
                >
                有什麼新鮮事？
                </textarea>
              </div>
              <div class="tweets-submit">
                <button type="submit" class="tweets-button">推文</button>
              </div>
            </form>
          </div>
        </div>
        <div class="divider"></div>
        <div class="tweets-list">
          <TweetCard
            v-for="tweet in tweets"
            :key="tweet.id"
            :initial-tweet="tweet"
          />
        </div>
      </div>
    </div>
    <RecommendUsers />
  </div>
</template>

<script>
import RecommendUsers from "./../components/RecommendUsers";
import NavBar from "./../components/Navbar";
import TweetCard from "./../components/TweetCard";
import TweetsAPI from "./../apis/tweets";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    RecommendUsers,
    NavBar,
    TweetCard,
  },
  data() {
    return {
      tweets: [],
      text: "",
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        const { data } = await TweetsAPI.tweets.get();
        this.tweets = data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法獲取推文,請稍後再試",
        });
      }
    },
    async handleSubmit() {
      try {
        const description = this.text;
        const { data } = await TweetsAPI.tweets.post({ description });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.text = "";
        this.fetchTweets();
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法新增推文,請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none; /* 拿掉底線 */
  color: #000000;
}
/* main tweets */
.main-tweets {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.tweets-container {
  width: 600px;
  height: 100%;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  margin-right: 30px;
}
.tweets-header {
  line-height: 55px;
  padding-left: 15px;
  height: 55px;
  font-size: 18px;
  border-bottom: 1px solid #e6ecf0;
}

.tweets-post-card {
  margin: 15px;
}

.tweets-post {
  height: 100%;
  display: flex;
  position: relative;
}
.tweets-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: palegreen;
  margin-right: 10px;
}
.tweets-list {
  /* 暫時先設定固定高度 */
  height: 500px;
  overflow: scroll;
}

.tweets-form {
  width: 100%;
}
textarea {
  border: 0px;
  resize: none;
}
.tweets-text {
  width: 100%;
}
.tweets-submit {
  bottom: 0px;
  right: 0px;
  position: absolute;
}

.divider {
  width: 100%;
  height: 10px;
  background-color: #e6ecf0;
}
.tweets-button {
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
</style>