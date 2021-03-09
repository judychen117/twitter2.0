<template>
  <div class="modal-box">
    <div
      class="tweets-header"
      @click.stop.prevent="closeModal"
      style="cursor: pointer"
    >
      X
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
  </div>
</template>

<script>
import TweetsAPI from "./../apis/tweets";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      text: "",
      showModal: "none",
    };
  },
  methods: {
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
        this.$emit("close-post-modal", this.showModal);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法新增推文,請稍後再試",
        });
      }
    },
    closeModal() {
      // this.showModal = "none";
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
.tweets-post-card {
  margin: 15px;
}

.tweets-post {
  height: 100%;
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
  /* 暫時先設定固定高度 */
  height: 500px;
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
/* modal */
.modal-box {
  width: 600px;
  height: 300px;
  position: fixed;
  top: 5%;
  background-color: white;
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