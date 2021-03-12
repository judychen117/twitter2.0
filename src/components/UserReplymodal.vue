<template>
  <div class="modal-box">
    <div class="popup">
      <div class="header">
        <img
          src="./../../public/img/cancel.svg"
          class="close"
          alt="close"
          @click.stop.prevent="closeModal"
        />
      </div>
      <div class="tweets-card">
        <img :src="tweet.User.avatar" alt="avatar" class="tweets-avatar" />
        <div class="tweets-content">
          <a href="" class="tweets-title">
            <div class="tweets-name">{{ tweet.User.name }}</div>
            <div class="tweets-id">{{ tweet.User.account }}・</div>
            <div class="tweets-time">{{ tweet.createdAt | fromNow }}</div>
          </a>
          <router-link
            :to="{ name: 'tweet-reply', params: { tweet_id: tweet.id } }"
          >
            <div class="tweet tweets-text">
              <p class="card-text">
                {{ tweet.description }}
              </p>
            </div>
          </router-link>
          <div class="reply-info">
            <span>回覆給</span>
            <span>
              <a href="" class="tweets-post-user">{{
                tweet.User.account
              }}</a></span
            >
          </div>
        </div>
      </div>
      <div class="tweets-post-card">
        <div class="tweets-post">
          <img
            src="../../public/img/divider.svg"
            alt="divider"
            class="tweets-divider"
          />
          <router-link
            :to="{
              name: 'user-profile-tweet',
              params: { id: currentUser.id },
            }"
          >
            <img
              :src="currentUser.avatar"
              alt="avatar"
              class="tweets-avatar-myself tweets-avatar"
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
                placeholder="推你的回覆"
              >
              </textarea>
            </div>
            <div class="tweets-submit">
              <button type="submit" class="tweets-button">回覆</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import TweetsAPI from "./../apis/tweets";
import { mapState } from "vuex";

export default {
  mixins: [fromNowFilter],
  props: {
    initialModalTweet: {
      type: Object,
      default: () => ({
        id: "1",
        UserId: "1",
        description: "Ipsa nihil nemo mollitia autem adipisci quis dolorem.",
        createdAt: "2021-03-08T16:14:00.000Z",
        User: {
          id: "1",
          email: "user1@example.com",
          password:
            "$2a$10$b6qBvYwzLV6dwuX6usgdR.arjW5VLVPHfQ/k54zzFq2mnaDUyh486",
          name: "user1",
          avatar:
            "https://loremflickr.com/320/240/user/?lock=22.865033574174177",
          introduction: "Qui vitae hic esse veritatis.",
          role: "user",
          account: "@說好不打臉",
          cover:
            "https://loremflickr.com/520/320/banner/?lock=73.83472776587239",
          createdAt: "2021-03-08T16:13:59.000Z",
          updatedAt: "2021-03-08T16:13:59.000Z",
        },
      }),
    },
  },
  data() {
    return {
      tweet: this.initialModalTweet,
      text: "",
      showModal: "none",
    };
  },
  watch: {
    initialModalTweet: {
      handler(newValue) {
        console.log("new", newValue);
        this.tweet = {
          ...this.tweet,
          ...newValue,
        };
      },
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async handleSubmit() {
      try {
        const description = this.text;
        const { data } = await TweetsAPI.tweets.post({ description });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.text = "";
        this.$emit("close-post-modal", this.showModal);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法新增推文,請稍後再試",
        });
      }
    },
    closeModal() {
      this.$emit("close-post-modal", this.showModal);
    },
  },
};
</script>

<style scoped>
.popup {
  position: relative;
}
.header {
  height: 60px;
  border-bottom: 1px solid #e6ecf0;
}
.close {
  height: 15px;
  width: 15px;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}
a {
  text-decoration: none;
  color: #000000;
}
.tweets-card {
  display: flex;
  padding-left: 15px;
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
.tweets-post-user {
  color: #ff6600;
}
.tweets-like {
  margin-left: 80px;
}
.tweets-name {
  margin-right: 5px;
}
.tweets-id,
.tweets-time {
  color: #657786;
}
.icon {
  margin-right: 10px;
  width: 15;
  height: 15px;
}
.reply-info {
  font-size: 13px;
  color: #657786;
}
.tweets-post-user {
  padding-left: 10px;
  color: #ff6600;
}
.tweets-avatar {
  margin-top: 2rem;
}
.tweets-content {
  padding-top: 2rem;
  padding-left: 8px;
}
.tweets-post-card {
  margin-top: 2rem;
  display: flex;
  border: transparent;
}
.tweets-post {
  border: transparent;
  position: relative;
}
.tweets-avatar-myself {
  margin-left: 1rem;
  margin-top: 1rem;
  position: relative;
  top: 1.5rem;
}
.tweets-divider {
  position: absolute;
  top: -2.8rem;
  left: 2.5rem;
}
.tweets-form {
  position: absolute;
  top: 1rem;
  left: 5.5rem;
}
textarea {
  display: inline-block;
  border: none;
  width: 480px;
}
textarea:focus {
  outline: none;
}
textarea:focus,
input:focus,
button:focus {
  outline: none;
}
.tweets-submit {
  position: absolute;
  bottom: -3rem;
  right: -1rem;
}
/* modal */
.modal-box {
  width: 600px;
  height: 360px;
  position: fixed;
  top: 5%;
  background-color: red;
  z-index: 2;
  border-radius: 20px;
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