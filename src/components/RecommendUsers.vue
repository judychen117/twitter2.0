<template>
  <div class="recommend-bar">
    <div class="recommend mt-3">
      <div class="recommend-title">
        <p>跟隨誰</p>
      </div>
      <div class="recommend-followers">
        <ul class="recommend-followers-list">
          <li
            class="recommend-followers-item"
            v-for="recommendUser in recommendUsers"
            :key="recommendUser.id"
          >
            <a href="" class="recommend-followers-title">
              <img
                :src="recommendUser.avatar"
                alt="avatar"
                class="tweets-avatar"
              />
              <div>
                <p class="recommend-followers-name">{{ recommendUser.name }}</p>
                <p class="recommend-followers-id">
                  {{ recommendUser.account }}
                </p>
              </div>
            </a>
            <button
              class="followers-item-button"
              v-if="recommendUser.isFollowed"
              @click.stop.prevent="deleteFollowing(recommendUser.id)"
            >
              正在跟隨
            </button>
            <button
              v-else
              class="followers-item-button"
              @click.stop.prevent="addFollowing(recommendUser.id)"
            >
              跟隨
            </button>
          </li>
        </ul>
      </div>
      <div class="recommend-fotter">
        <a href="">顯示更多</a>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      recommendUsers: [],
    };
  },
  created() {
    this.fetcgRecomendUsers();
  },
  methods: {
    async fetcgRecomendUsers() {
      try {
        const { data } = await userAPI.users.get();
        this.recommendUsers = data.users;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法獲取推薦名單,請稍後再試",
        });
      }
    },
    async deleteFollowing(followingId) {
      try {
        const { data } = await userAPI.deleteFollowing({ followingId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.recommendUsers = this.recommendUsers.map((recommendUser) => {
          if (recommendUser.id !== followingId) {
            return recommendUser;
          } else {
            return {
              ...recommendUser,
              followerCount: recommendUser.followerCount - 1,
              isFollowed: false,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法取消追隨,請稍後再試",
        });
      }
    },
    async addFollowing(id) {
      try {
        const { data } = await userAPI.addFollowing({
          id,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.recommendUsers = this.recommendUsers.map((recommendUser) => {
          if (recommendUser.id !== id) {
            return recommendUser;
          } else {
            return {
              ...recommendUser,
              followerCount: recommendUser.followerCount + 1,
              isFollowed: true,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "暫時無法追隨,請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
/* Recommend Bar */
.recommend-bar {
  height: 517px;
}
.recommend {
  border-radius: 10px;
  width: 350px;
  height: auto;
  background-color: #f5f8fa;
}
.recommend-followers-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e6ecf0;
}
.recommend-followers-title {
  display: flex;
}
.recommend-followers-id {
  color: #657786;
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
.recommend-title {
  padding-left: 15px;
  height: 40px;
  font-size: 18px;
  border-bottom: 1px solid #e6ecf0;
}
.recommend-title > p {
  line-height: 40px;
}
.tweets-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  margin-right: 10px;
}
.recommend-fotter {
  padding: 15px;
}
.recommend-fotter > a {
  color: #ff6600;
}
</style>