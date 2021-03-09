<template>
  <div class="main-tweets">
    <NavBar />
    <div class="tweets-container">
      <div class="tweets-header">
        <a href="">
          <img
            src="../../public/img/icon_back.svg"
            alt=""
            @click.stop.prevent="$router.back()"
          />
          <span>推文 </span>
        </a>
      </div>
      <div class="tweets">
        <div class="tweets-post-card">
          <div class="tweets-post">
            <div class="tweet-title">
              <a href="">
                <img
                  :src="tweetUser.avatar"
                  alt="avatar"
                  class="tweets-avatar"
                />
              </a>
              <a class="tweets-name">
                <div class="name">{{ tweetUser.name }}</div>
                <div class="id">{{ tweetUser.account }}</div>
              </a>
            </div>
            <div class="tweet-replay-container">
              <div class="tweet-push-content">
                <p>
                  {{ tweet.description }}
                </p>
              </div>
              <div class="tweet-push-time">
                <p>{{ tweet.createdAt }}</p>
              </div>
              <div class="tweet-status">
                <div class="re-tweet">
                  <span>{{ tweet.Replies.length }}</span>
                  <span>回覆</span>
                </div>
                <div class="like">
                  <span>{{ tweet.Likes.length }}</span>
                  <span>喜歡次數</span>
                </div>
              </div>
              <div class="tweet-status-icon">
                <a href="" class="re-tweet-icon">
                  <img
                    src="../../public/img/commentIcon.svg"
                    alt=""
                    class="icon"
                  />
                </a>
                <a href="" class="like-icon">
                  <img
                    src="../../public/img/likeIcon.svg"
                    alt=""
                    class="icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="tweets-list">
          <div class="tweets-card" v-for="reply in replies" :key="reply.id">
            <a href="">
              <img
                :src="reply.User.avatar"
                alt="avatar"
                class="tweets-avatar"
              />
            </a>
            <div class="tweets-content">
              <a href="" class="tweets tweets-title">
                <div class="tweets-reply-name">{{ reply.User.name }}</div>
                <div class="tweets-reply-id id">{{ reply.User.account }}</div>
                <div class="tweets-reply-time">3hr</div>
              </a>
              <div class="">
                <span>回覆</span>
                <span>
                  <a href="" class="tweets-post-user">{{
                    tweetUser.account
                  }}</a></span
                >
              </div>
              <div class="tweet tweets-text">
                <p class="card-text">
                  {{ reply.comment }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RecommendUsers />
  </div>
</template>

<script>
import RecommendUsers from "./../components/RecommendUsers";
import NavBar from "./../components/Navbar";
import TweetsAPI from "./../apis/tweets";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    RecommendUsers,
    NavBar,
  },
  data() {
    return {
      tweet: [],
      replies: [],
      tweetUser: [],
    };
  },
  created() {
    const tweet_id = this.$route.params;
    this.fetchTweet(tweet_id);
  },
  beforeRouteUpdate(to, next) {
    const tweet_id = to.params;
    this.fetchTweet(tweet_id);
    next();
  },
  methods: {
    async fetchTweet(tweet_id) {
      try {
        const { data } = await TweetsAPI.tweet.get(tweet_id);
        this.tweet = data;
        this.replies = data.Replies;
        this.tweetUser = data.User;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法獲取推文,請稍後再試",
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
.tweets-header > a {
  line-height: 50px;
}
.tweets-header > a > img {
  margin-left: 15px;
}
.tweets-header a > span {
  margin-left: 40px;
}
.main-tweets {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.tweets-container {
  width: 600px;
  height: 100%;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  margin-right: 30px;
}
.tweets-header {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
}
.tweets-post {
  height: auto;
  position: relative;
  padding: 15px 15px 0 15px;
  border-bottom: 1px solid #e6ecf0;
}
.tweets-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.tweet-title {
  display: flex;
}
.tweet-status {
  display: flex;
  padding: 20px 0px 20px 0px;
}
.like {
  padding-left: 20px;
}
.like-icon {
  padding-left: 150px;
}
.re-tweet-icon,
.like-icon {
  width: 30px;
  height: 30px;
}
.tweets-name > .name {
  margin-bottom: 5px;
}
.tweet-status-icon {
  padding: 15px 0px 15px 0px;
}
.tweet-push-time {
  padding: 15px 0 15px 0;
}
.tweet-push-time > p {
  color: #657786;
}

.tweets-reply-name {
  margin-right: 5px;
}
.tweet-push-time,
.tweet-status {
  border-bottom: 1px solid #e6ecf0;
}
.tweets-post-user {
  padding-left: 5px;
}
.tweet-push-content {
  margin-top: 15px;
  word-wrap: break-word;
}
.tweets-post-user {
  color: #ff6600;
}
.tweets-list {
  height: 100%;
}
.tweets-card {
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  padding: 10px;
}
.tweets-title {
  display: flex;
  margin: 4px 0 4px 0;
}
.tweets-title > h5 {
  margin-right: 10px;
}
.id,
.tweets-reply-time {
  color: #657786;
}
.icon {
  width: 30px;
  height: 30px;
}
</style>