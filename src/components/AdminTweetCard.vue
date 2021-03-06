<template>
  <div class="tweets-card">
    <div class="tweets-table" v-for="tweet in tweets" :key="tweet.id">
      <a href="" class="tweets-avatar">
        <img src="../../public/img/UserAvatar.svg" alt="avatar" />
      </a>
      <div class="tweets-content">
        <a href="" class="tweet tweets-title">
          <div class="tweets-name">jason</div>
          <div class="tweets-id">@jason・</div>
          <div class="tweets-time">3hr</div>
        </a>
        <div class="tweet tweets-text">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div class="tweet tweets-delete">
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
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      tweets: [],
      isProcessing: false,
    };
  },
  methods: {
    async fetchTweets() {
      try {
        const response = await adminAPI.tweets.getTweets();
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.tweets = response.data.tweets;
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
  created() {
    this.fetchTweets();
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