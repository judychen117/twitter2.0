<template>
  <div class="main-tweets">
    <NavBar />
    <div id="fade" v-if="showModal !== 'none'"></div>
    <UserReplymodal
      v-show="showModal === 'reply'"
      @close-post-modal="closePostModal"
      :initial-modal-tweet="tweet"
    />
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
              <router-link
                :to="{
                  name: 'user-profile-tweet',
                  params: { id: currentUser.id },
                }"
              >
                <img
                  :src="currentUser.avatar"
                  alt="avatar"
                  class="tweets-avatar"
                />
              </router-link>
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
                  <span>{{ RepliesLength }}</span>
                  <span>回覆</span>
                </div>
                <div class="like">
                  <span>{{ likesLength }}</span>
                  <span>喜歡次數</span>
                </div>
              </div>
              <div class="tweet-status-icon">
                <a
                  href=""
                  class="re-tweet-icon"
                  @click.stop.prevent="replyPost(tweet)"
                >
                  <img
                    src="../../public/img/commentIcon.svg"
                    alt=""
                    class="icon"
                  />
                </a>
                <a
                  href=""
                  class="like-icon"
                  v-if="likeStatus"
                  @click.stop.prevent="deleteLiked(tweet.id)"
                >
                  <img
                    src="../../public/img/icon_like_fill.svg"
                    alt=""
                    class="icon"
                  />
                </a>
                <a
                  href=""
                  class="like-icon"
                  @click.stop.prevent="addLiked(tweet.id)"
                  v-else
                >
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
import userAPI from "./../apis/user";
import { mapState } from "vuex";
import UserReplymodal from "./../components/UserReplymodal";

export default {
  components: {
    RecommendUsers,
    NavBar,
    UserReplymodal,
  },
  data() {
    return {
      tweet: [],
      replies: [],
      tweetUser: [],
      likeStatus: false,
      likesLength: "",
      RepliesLength: "",
      showModal: "none",
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

  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetchTweet(tweet_id) {
      try {
        const { data } = await TweetsAPI.tweet.get(tweet_id);
        this.tweet = data;
        this.replies = data.Replies;
        this.tweetUser = data.User;
        this.likesLength = data.Likes.length;
        this.RepliesLength = data.Replies.length;
        this.checkLikeId(this.tweet);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法獲取推文,請稍後再試",
        });
      }
    },
    async addLiked(tweetId) {
      try {
        const { data } = await userAPI.addLiked(tweetId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.likeStatus = true;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法加入喜歡,請稍後再試",
        });
      }
    },
    async deleteLiked(tweetId) {
      try {
        const { data } = await userAPI.deleteLiked(tweetId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.likeStatus = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法移除喜歡,請稍後再試",
        });
      }
    },
    checkLikeId(tweet) {
      tweet.Likes.forEach((like) => {
        if (like.UserId === this.currentUser.id) {
          this.likeStatus = true;
          return;
        }
      });
    },
    replyPost() {
      this.showModal = "reply";
    },
    closePostModal(showModal) {
      this.showModal = showModal;
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
.modal-box {
  /* display: flex;
  flex-direction: column; */
  width: 600px;
  position: fixed;
  top: 5%;
  background-color: white;
  z-index: 2;
  border-radius: 20px;
}
#fade {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1;
  opacity: 0.5;
}
</style>