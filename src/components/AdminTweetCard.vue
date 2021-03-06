<template>
  <div class="tweets-card">
    <div class="tweets-list" v-for="tweet in tweets" :key="tweet.UserId">
      <div class="tweet">
        <a href="" class="tweets-avatar">
          <img :src="tweet.User.avator" alt="avatar" />
        </a>
        <div class="tweets-content">
          <a href="" class="tweet tweets-title">
            <div class="tweets-name">{{ tweet.User.name }}</div>
            <div class="tweets-id">{{ tweet.User.account }}</div>
            <div class="tweets-time">3hr</div>
          </a>
          <div class="tweet tweets-text">
            <p class="card-text">
              {{ tweet.description }}
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
  </div>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

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
.tweets-list {
  display: flex;
  flex-direction: column;
}
.tweet {
  width: 950px;
}
</style>