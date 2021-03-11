<template>
  <div>
    <div>
      <div class="top-bar">
        <div class="arrow-left">
          <router-link :to="{ name: 'tweets-main' }">
            <img src="../../public/img/Vector.svg" alt="vector" />
          </router-link>
        </div>
        <p class="name">{{ info.name }}</p>
        <p class="tweets">{{ info.Tweets.length }} 推文</p>
      </div>
      <div class="divider"></div>
      <div class="user-card">
        <div class="user-pic">
          <img :src="info.cover" class="user-cover" alt="cover" />
          <a href="#" class="user-avatar">
            <img :src="info.avatar | emptyImage" alt="avatar" />
          </a>
        </div>
        <div class="user-content">
          <a href="#">
            <div class="user-name">{{ info.name }}</div>
            <div class="user-id">{{ info.account }}</div>
            <div class="user-introduction">{{ info.introduction }}</div>
          </a>
          <div class="user-follow">
            <router-link
              :to="{
                name: 'user-following',
                params: {
                  id: info.id,
                },
              }"
            >
              <span>{{ info.Followings.length }}個</span>跟隨中
            </router-link>
            <router-link
              :to="{
                name: 'user-follower',
                params: {
                  id: info.id,
                },
              }"
            >
              <span>{{ info.Followers.length }}位</span>跟隨者
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import userAPI from "./../apis/user";
// import { Toast } from "./../utils/helpers";

export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.info,
    };
  },
  // created() {
  //   const { id } = this.$route.params;
  //   this.fetchUsers(id);
  // },
  // methods: {
  //   async fetchUsers(id) {
  //     try {
  //       const response = await userAPI.user.get({ id });
  //       console.log(response);
  //       if (response.statusText !== "OK") {
  //         throw new Error(response.statusText);
  //       }
  //       this.user = response.data;
  //     } catch (e) {
  //       Toast.fire({
  //         icon: "error",
  //         title: "無法取得Users，請稍後再試",
  //       });
  //       console.log(e);
  //     }
  //   },
  // },
};
</script>
<style scoped>
.top-bar {
  padding: 0.5rem 0;
}
.arrow-left {
  display: inline-block;
  position: relative;
  top: 0.5rem;
  padding-left: 2rem;
}
.name {
  font-size: 19px;
  font-weight: 500;
  display: inline-block;
  padding-left: 1rem;
}
.tweets {
  font-size: 13px;
  font-weight: 100;
  color: #657786;
  padding: 0 0 0 4rem;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: #e6ecf0;
}
.user-card {
  height: 400px;
  width: 598px;
  background: #f6f7f8;
  position: relative;
}
.user-pic img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}
.user-avatar img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 5px solid #fff;
  position: absolute;
  top: 8rem;
  left: 1.5rem;
}
.user-content {
  padding-top: 5rem;
  padding-left: 2rem;
}
.user-name {
  color: #1c1c1c;
  font-weight: 500;
}
.user-id {
  color: #657786;
  font-weight: 300;
}
.user-introduction {
  color: #1c1c1c;
  font-weight: 300;
  padding: 0.5rem 0;
}
.user-follow {
  font-size: 14px;
  display: flex;
}
.user-follow p {
  font-weight: 300;
  padding-right: 1rem;
}
.user-follow span {
  font-weight: 500;
}
</style>