<template>
  <div class="follower-page">
    <NavBar />
    <div class="follower-container">
      <Follower :user="user" />
    </div>
    <RecommendUsers />
  </div>
</template>

<script>
import RecommendUsers from "./../components/RecommendUsers";
import NavBar from "./../components/Navbar";
import Follower from "./../components/Follower";
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      user: [],
    };
  },
  components: {
    RecommendUsers,
    NavBar,
    Follower,
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
        this.user = response.data;
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
/* main tweets */
.follower-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.follower-container {
  width: 600px;
  height: 100%;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  margin-right: 30px;
}
</style>
