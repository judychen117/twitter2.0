<template>
  <div class="following-card">
    <div class="arrow-left">
      <img src="../../public/img/Vector.svg" alt="vector" />
    </div>
    <p class="name">{{ user.name }}</p>
    <p class="tweets">{{ user.Tweets.length }} 推文</p>
    <FollowNavTab :id="user.id" />
    <div class="divider"></div>
    <div
      class="following-list"
      v-for="following in followings"
      :key="following.id"
    >
      <div class="user">
        <a href="" class="user-avatar">
          <img :src="following.avatar | emptyPicture" alt="avatar" />
        </a>
        <div class="user-content">
          <div class="user-name">{{ following.name }}</div>
          <div class="user-id">{{ following.account }}</div>
          <div class="user-text">
            <p class="card-text">{{ following.introduction }}</p>
          </div>
          <div class="user-button">
            <button
              type="button"
              class="followings-item-button"
              v-if="following.isFollowed"
              @click.stop.prevent="deleteFollowing(following.id)"
            >
              正在跟隨
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import followAPI from "./../apis/follow";
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";
import { emptyImageFilter } from "./../utils/mixins";
import FollowNavTab from "./../components/FollowNavTab.vue";

export default {
  components: {
    FollowNavTab,
  },
  data() {
    return {
      followings: [],
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchFollowings(id);
  },
  methods: {
    async fetchFollowings(id) {
      try {
        const response = await followAPI.getFollowing({ id });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.followings = response.data;
      } catch (e) {
        Toast.fire({
          icon: "error",
          title: "無法取得Followings，請稍後再試",
        });
        console.log(e);
      }
    },
    async deleteFollowing(followingId) {
      try {
        const { data } = await userAPI.deleteFollowing({ followingId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        //重新render畫面
        const { id } = this.$route.params;
        this.fetchFollowings(id);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法取消追隨,請稍後再試",
        });
      }
    },
    mixins: [emptyImageFilter],
  },
};
</script>
<style scoped>
.arrow-left {
  display: inline-block;
  padding-left: 2rem;
}
.name {
  font-size: 19px;
  font-weight: 500;
  padding: 0.5rem 0 0 1rem;
  display: inline-block;
}
.tweets {
  font-size: 13px;
  font-weight: 100;
  color: #657786;
  padding: 0 0 0.5rem 4rem;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: #e6ecf0;
}
.following-card {
  height: 750px;
  overflow-y: auto;
}
.following-list {
  height: 8rem;
  padding-top: 1.5rem;
  border-bottom: 1px solid #e6ecf0;
  position: relatve;
}
.followings-item-button {
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
.user-content {
  padding-left: 100px;
}
.user-button {
  position: absolute;
  top: 0;
  right: 2rem;
}
.user {
  height: 50px;
  position: relative;
}
.user-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
  display: inline-block;
  position: absolute;
  left: 1rem;
  top: 0.5rem;
}
.user-name {
  font-size: 1rem;
  font-weight: 500;
}
.user-id {
  font-size: 1rem;
  font-weight: 100;
  color: #657786;
}
.user-text {
  font-size: 1rem;
  font-weight: 300;
}
</style>