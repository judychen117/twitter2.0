<template>
  <div class="modal-box">
    <div
      class="tweets-header"
      @click.stop.prevent="closeModal"
      style="cursor: pointer"
    >
      X
    </div>
    <div class="tweets-card">
      <a href="">
        <img src="" alt="avatar" class="tweets-avatar" />
      </a>
      <div class="tweets-content">
        <a href="" class="tweet tweets-title">
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
        <div class="">
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
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import TweetsAPI from "./../apis/tweets";

export default {
  mixins: [fromNowFilter],
  props: {
    initialModalTweet: {
      type: Object,
      required: false,
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
      tweet: {},
      text: "",
      showModal: "none",
    };
  },
  created() {
    this.tweet = this.initialModalTweet;
  },
  methods: {
    async handleSubmit() {
      try {
        this.showModal = false;
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
.tweets-header {
  line-height: 55px;
  padding-left: 15px;
  height: 55px;
  font-size: 18px;
  border-bottom: 1px solid #e6ecf0;
}
a {
  text-decoration: none; /* 拿掉底線 */
  color: #000000;
}
.tweets-card {
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  padding: 15px;
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
/* modal */
.modal-box {
  width: 600px;
  height: 300px;
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