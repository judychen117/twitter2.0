<template>
  <div class="tweet-card">
    <div class="nav">
      <div class="top-right">
        <div class="editorMode" v-if="currentUser.id === info.id">
          <button class="edit-button" @click="editProfile">編輯個人檔案</button>
          <div v-if="isEditing" class="editing">
            <form @submit.stop.prevent="handleSubmit">
              <div class="popup">
                <div class="popup-title">
                  <img
                    src="./../../public/img/cancel.svg"
                    class="close"
                    alt="close"
                    @click="editProfile"
                  />
                  <p>編輯個人資料</p>
                </div>
                <div class="popup-pic">
                  <div class="popup-cover">
                    <img :src="info.cover" alt="cover" />
                  </div>
                  <div class="popup-avatar">
                    <img :src="info.avatar" alt="avatar" />
                  </div>
                  <div class="button">
                    <button class="followers-item-button" type="submit">
                      儲存
                    </button>
                  </div>
                </div>
                <div class="popup-info">
                  <div class="popup-name">
                    <p>名稱</p>
                    <label for="name"></label>
                    <input
                      id="name"
                      v-model="info.name"
                      name="name"
                      type="name"
                      placeholder=""
                      autocomplete=""
                      required
                    />
                    <div class="seperation"></div>
                  </div>
                </div>
                <div class="popup-info">
                  <div class="popup-intro">
                    <p>自我介紹</p>
                    <label for="introduction"></label>
                    <input
                      id="introduction"
                      v-model="info.introduction"
                      name="intro"
                      type="introduction"
                      placeholder=""
                      autocomplete=""
                      required
                    />
                    <div class="seperation"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="nonEditorMode" v-else>
          <div class="email">
            <img src="./../../public/img/email.svg" alt="email" />
          </div>
          <div class="bell">
            <img src="./../../public/img/bell.svg" alt="bell" />
          </div>
          <div class="user-button">
            <button type="button" class="followers-item-button">
              正在跟隨
            </button>
          </div>
        </div>
        <div class="nav-tabs">
          <div class="nav-tab">
            <router-link
              :to="{ name: 'user-profile-tweet', params: { id: info.id } }"
              >推文</router-link
            >
          </div>
          <div class="nav-tab">
            <router-link
              :to="{ name: 'user-profile-reply', params: { id: info.id } }"
              >推文與回覆</router-link
            >
          </div>
          <div class="nav-tab nav-active">喜歡的內容</div>
        </div>
      </div>
      <div class="content">
        <div class="tweet-list" v-for="tweet in users" :key="tweet.id">
          <a href="" class="tweet-avatar">
            <img :src="tweet.Tweet.User.avatar" alt="avatar" />
          </a>
          <div class="tweet-content">
            <a href="" class="tweet-title">
              <p class="tweet-name">{{ tweet.Tweet.User.name }}</p>
              <p class="tweet-id">{{ tweet.Tweet.User.account }}</p>
              <span class="dot"></span>
              <p class="tweet-time">{{ tweet.Tweet.createdAt | fromNow }}</p>
            </a>
            <div class="tweet-text">
              <p>
                {{ tweet.Tweet.description }}
              </p>
            </div>
            <div class="tweet-activity">
              <a href="#" class="tweet-comment">
                <img
                  src="../../public/img/commentIcon.svg"
                  alt="comments"
                  class="icon"
                />
                <span>{{ tweet.Tweet.Replies.length }}</span>
              </a>
              <a href="#" class="tweet-like">
                <img
                  src="../../public/img/likeIcon.svg"
                  alt="likes"
                  class="icon"
                />
                <span>{{ tweet.Tweet.Likes.length }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";
import { fromNowFilter, emptyImageFilter } from "./../utils/mixins";
import { mapState } from "vuex";

export default {
  data() {
    return {
      users: [],
      isEditing: false,
      id: -1,
      name: "",
    };
  },
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUsers(id);
  },
  methods: {
    async fetchUsers(id) {
      try {
        const response = await userAPI.getLike({ id });
        console.log(response);
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.users = response.data;
        this.name = response.data.users.name;
        this.id = response.data.users.id;
      } catch (e) {
        Toast.fire({
          icon: "error",
          title: "無法取得Followers，請稍後再試",
        });
        console.log(e);
      }
    },
    editProfile() {
      if (this.isEditing === true) {
        this.isEditing = false;
      } else {
        this.isEditing = true;
      }
    },
    async handleSubmit(e) {
      try {
        const form = e.target;
        const formData = new FormData(form);
        const { data } = await userAPI.userEdit.editSetting({
          id: this.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.fetchCurrentUser();
        Toast.fire({
          icon: "success",
          title: "儲存成功",
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法修改資料,請稍後再試",
        });
      }
    },
  },

  mixins: [fromNowFilter, emptyImageFilter],
};
</script>
<style scoped>
.tweet-card {
  position: relative;
}
.top-right {
  position: absolute;
  top: -11rem;
  right: 1rem;
}
a {
  text-decoration: none; /* 拿掉底線 */
}
.edit-button {
  width: 180px;
  height: 45px;
  border-radius: 210px;
  margin: 0;
  padding: 0;
  border: 1px solid #ff6600;
  outline: none;
  color: #ff6600;
  margin-top: 10px;
}
.followers-item-button {
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
.editorMode {
  position: absolute;
  top: 0;
  right: 1rem;
}
.nonEditorMode {
  display: flex;
}
.editing {
  z-index: 100;
  position: absolute;
  top: -200px;
  left: -10px;
  height: 645px;
  width: 520px;
  background-color: #fff;
  position: relative;
}
.popup-title {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
}
.close {
  height: 15px;
  width: 15px;
  margin-top: 5px;
  margin-right: 10px;
}
.button {
  position: absolute;
  top: -2.5rem;
  right: 1rem;
}
.popup-pic {
  position: absolute;
  top: 3rem;
}
.popup-cover img {
  height: 200px;
  width: 520px;
  object-fit: cover;
}
.popup-avatar img {
  height: 120px;
  width: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #fff;
  position: relative;
  top: -4rem;
  left: 1rem;
}

.popup-info {
  position: relative;
  top: 20rem;
  left: 2rem;
  background-color: #e5e5e5;
  font-size: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  width: 460px;
}
.popup-info p {
  padding-top: 0.6rem;
  padding-left: 0.6rem;
  color: rgba(101, 119, 134, 1);
}
.popup-info .popup-intro input {
  height: 100px;
}
input {
  background-color: #e5e5e5;
  border: none;
  border-style: none;
  height: 2rem;
  padding-left: 1rem;
  border-radius: 1rem;
  width: 300px;
}
textarea:focus,
input:focus,
button:focus {
  outline: none;
}
.seperation {
  height: 2px;
  background-color: rgba(101, 119, 134, 1);
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 1rem;
}
.email {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #ff6600;
  margin-right: 1rem;
}
.email img {
  padding-top: 0.5rem;
  padding-left: 0.5rem;
}
.bell {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #ff6600;
  margin-right: 1rem;
}
.bell img {
  padding-top: 0.4rem;
  padding-left: 0.4rem;
}
.nav {
  height: 3rem;
  background-color: #fff;
  margin-bottom: 3rem;
}
.nav-tabs {
  display: flex;
  justify-content: right;
  align-content: center;
  width: 600px;
  border-bottom: 1px solid #e6ecf0;
  margin-top: 8.5rem;
  padding-top: 2rem;
}
.nav-tab {
  width: 130px;
  height: 3rem;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
}
.nav-tab a {
  color: #657786;
}
.nav-active {
  border-bottom: 3px solid #ff6600;
}
.nav-active a {
  color: #ff6600;
}
.content {
  margin-top: 3rem;
}
.tweet-list {
  padding: 1rem 0;
  width: 600px;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
}
.tweet-name {
  font-weight: 500;
}
.tweet-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 25px;
}
.tweet-content {
  padding-left: 1.5rem;
}
.tweet-title {
  display: flex;
}
.tweet-name {
  margin-right: 20px;
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
  margin: 0 0.5rem;
}
.tweet-activity span {
  color: #657786;
}
.tweet-comment img {
  padding-right: 1rem;
}
.tweet-comment {
  padding-right: 1.5rem;
}
.tweet-like img {
  padding-right: 1rem;
}
</style>