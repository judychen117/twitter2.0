<template>
  <div class="main-tweets" id="main">
    <NavBar @show-post-modal="showModalBox" />
    <div id="fade" v-if="showModal !== 'none'"></div>
    <UserPostmodal
      v-show="showModal === 'post'"
      @close-post-modal="closePostModal"
    />
    <UserReplymodal
      v-show="showModal === 'reply'"
      @close-post-modal="closePostModal"
      :initial-modal-tweet="replyModalTweet"
    />
    <div class="tweets-container">
      <div class="tweets-header">
        <a href="">首頁</a>
      </div>
      <div class="tweets">
        <div class="tweets-post-card">
          <div class="tweets-post">
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
            <form class="tweets-form" @submit.stop.prevent="handleSubmit">
              <div class="tweets-text">
                <label for="text"></label>
                <textarea
                  class="form-control"
                  rows="3"
                  name="text"
                  v-model="text"
                  placeholder="有什麼新鮮事？"
                >
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
            @show-reply-modal="showModalBox"
            @reply-tweet-id="showReplyModal"
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
import UserPostmodal from "./../components/UserPostmodal";
import UserReplymodal from "./../components/UserReplymodal";
import store from "./../store";
import { mapState } from "vuex";

export default {
  components: {
    RecommendUsers,
    NavBar,
    TweetCard,
    UserPostmodal,
    UserReplymodal,
  },
  data() {
    return {
      tweets: [],
      text: "",
      showModal: "none",
      replyModalTweet: {},
    };
  },
  created() {
    console.log(store.state);
    this.fetchTweets();
  },
  computed: {
    ...mapState(["currentUser"]),
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
        if (this.text.replace(/\s*/g, "") === "") {
          Toast.fire({
            icon: "error",
            title: "推文內容不能空白,請輸入內容",
          });
          return;
        }
        if (this.text.length >= 140) {
          Toast.fire({
            icon: "error",
            title: "超過字數限制,最多不可超過140字,請重新輸入",
          });
          return;
        }
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
          title: "新增推文錯誤,請稍後再試",
        });
      }
    },
    showModalBox(showModal) {
      this.showModal = showModal;
    },
    closePostModal(showModal) {
      this.showModal = showModal;
      this.fetchTweets();
    },
    showReplyModal(tweet) {
      this.replyModalTweet = tweet;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000000;
}
/* main tweets */
.main-tweets {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* padding: 3rem 0;   */
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
  height: auto;
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
  height: 74vh;
  width: 100%;
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

/* modal */
.modal-box {
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