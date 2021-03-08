<template>
  <div class="follower-page">
    <NavBar />
    <div class="follower-container">
      <UserProfileCard />
      <UserProfileTweet :info="info" />
    </div>
    <RecommendUsers />
  </div>
</template>

 <script>
import RecommendUsers from "./../components/RecommendUsers";
import NavBar from "./../components/Navbar";
import UserProfileCard from "./../components/UserProfileCard";
import UserProfileTweet from "./../components/UserProfileTweet";
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      info: [],
    };
  },
  components: {
    RecommendUsers,
    NavBar,
    UserProfileCard,
    UserProfileTweet,
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUsers(id);
  },
  methods: {
    async fetchUsers(id) {
      try {
        const response = await userAPI.user.get({ id });
        console.log(response);
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.info = response.data;
      } catch (e) {
        Toast.fire({
          icon: "error",
          title: "無法取得Followers，請稍後再試",
        });
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000000;
}
.follower-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.follower-container {
  width: 600px;
  height: 800px;
  overflow: scroll;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  margin-right: 30px;
}
</style>
