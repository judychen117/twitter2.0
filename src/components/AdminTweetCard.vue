<template>
  <div class="tweet-card">
    <div class="tweet-list" v-for="tweet in tweets" :key="tweet.UserId">
      <div class="tweet">
        <a href="" class="tweet-avatar">
          <img :src="tweet.User.avatar | emptyPicture" alt="avatar" />
        </a>
        <div class="tweet-content">
          <a href="" class="tweet-title">
            <div class="tweet-name">{{ tweet.User.name }}</div>
            <div class="tweet-id">{{ tweet.User.account }}</div>
            <span class="dot"></span>
            <div class="tweet-time">{{ tweet.createdAt | fromNow }}</div>
          </a>
          <div class="tweet-text">
            <p class="card-text">
              {{ tweet.description }}
            </p>
          </div>
          <div class="tweet-delete">
            <a href="#">
              <img
                src="../../public/img/cancel.svg"
                alt="deleteIcon"
                class="icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import { emptyImageFilter, fromNowFilter } from "./../utils/mixins";

export default {
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        const response = await adminAPI.tweets.getTweets();
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.tweets = response.data;
      } catch (e) {
        Toast.fire({
          icon: "error",
          title: "無法取得Tweets，請稍後再試",
        });
        console.log(e);
      }
    },
    async deleteRestaurant(tweetId) {
      try {
        const { data } = await adminAPI.tweets.deleteTweet({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
      } catch (e) {
        Toast.fire({
          icon: "error",
          title: "無法刪除tweet，請稍後再試",
        });
      }
    },
  },
  mixins: [fromNowFilter, emptyImageFilter],
};
</script>

<style scoped>
a {
  text-decoration: none; /* 拿掉底線 */
  color: #000000;
}
.tweet-card {
  height: 750px;
  overflow-y: auto;
}
.tweet-list {
  padding: 30px 0;
  border-bottom: 1px solid #e6ecf0;
}
.tweet {
  height: 50px;
  position: relative;
}
.tweet-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
  display: inline-block;
  position: absolute;
  left: 1rem;
}
.tweet-content {
  padding-left: 100px;
}
.tweet-title {
  display: flex;
  margin: 4px 0 4px 0;
}
.tweet-title > h5 {
  margin-right: 10px;
}
.tweets-name {
  margin-right: 10px;
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
}
.icon {
  position: absolute;
  width: 15;
  height: 15px;
  top: 1rem;
  right: 1rem;
}
.tweet-delete{
  position: relative;
  bottom: 4.5rem;
  right: 0.5rem;
}
</style>