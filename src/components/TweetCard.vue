<template>
  <div class="tweets-card">
    <router-link
      :to="{ name: 'user-profile-tweet', params: { id: tweet.User.id } }"
    >
      <img :src="tweet.User.avatar" alt="avatar" class="tweets-avatar" />
    </router-link>
    <div class="tweets-content">
      <a href="" class="tweet tweets-title">
        <router-link
          :to="{ name: 'user-profile-tweet', params: { id: tweet.User.id } }"
        >
          <div class="tweets-name">{{ tweet.User.name }}</div>
        </router-link>
        <router-link
          :to="{ name: 'user-profile-tweet', params: { id: tweet.User.id } }"
        >
          <div class="tweets-id">{{ tweet.User.account }}・</div>
        </router-link>
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
      <div class="tweet tweets-footer">
        <a
          href="#"
          class="tweets-comment"
          @click.stop.prevent="replyPost(tweet)"
        >
          <img src="../../public/img/commentIcon.svg" alt="" class="icon" />
          <span>{{ tweet.Replies.length }}</span>
        </a>
        <a
          href="#"
          class="tweets-like"
          @click.stop.prevent="deleteLiked(tweet.id)"
          v-if="likeStatus"
        >
          <img src="../../public/img/icon_like_fill.svg" alt="" class="icon" />
          <span style="color: #e0245e">{{ tweet.Likes.length }}</span>
        </a>
        <a
          href="#"
          class="tweets-like"
          @click.stop.prevent="addLiked(tweet.id)"
          v-else
        >
          <img src="../../public/img/likeIcon.svg" alt="" class="icon" />
          <span>{{ likesLength }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {},
  mixins: [fromNowFilter],
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tweet: this.initialTweet,
      showModal: "",
      likeStatus: false,
      likesLength: this.initialTweet.Likes.length,
    };
  },
  created() {
    this.checkLikeId(this.tweet);
  },
  updated() {},
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async addLiked(tweetId) {
      try {
        const { data } = await userAPI.addLiked(tweetId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.likesLength = this.likesLength + 1;
        this.likeStatus = true;
        // TODO:Like數如何即時更新
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
        this.likesLength = this.likesLength - 1;
        this.likeStatus = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法移除喜歡,請稍後再試",
        });
      }
    },
    replyPost(tweet) {
      this.showModal = "reply";
      this.$emit("show-reply-modal", this.showModal);
      this.$emit("reply-tweet-id", tweet);
    },
    closePostModal(showModal) {
      this.showModal = showModal;
    },
    checkLikeId(tweet) {
      tweet.Likes.forEach((like) => {
        if (like.UserId === this.currentUser.id) {
          this.likeStatus = true;
          return;
        }
      });
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
  width: 100%;
}
.tweets-content {
  width: 100%;
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
  width: 400px;
  padding: 5px;
}
.card-text {
  word-wrap: break-word;
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

#fade {
  /* position: relative; */
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1;
  opacity: 0.5;
}
</style>