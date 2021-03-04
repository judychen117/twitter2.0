<template>
  <div class="main-tweets">
    <NavBar />
    <div class="tweets-container">
      <div class="tweets-header">
        <a href="">首頁</a>
      </div>
      <div class="tweets">
        <div class="tweets-post-card">
          <div class="tweets-post">
            <a href="" class="tweets-avatar">
              <img src="../../public/img/UserAvatar.svg" alt="avatar" />
            </a>
            <form class="tweets-form">
              <div class="tweets-text">
                <label for="text"></label>
                <textarea class="form-control" rows="3" name="text" />
              </div>
              <div class="tweets-submit">
                <button type="submit" class="tweets-button">推文</button>
              </div>
            </form>
          </div>
        </div>
        <div class="divider"></div>
        <div class="tweets-list">
          <TweetCard />
        </div>
      </div>
    </div>
    <RecommendUsers />
  </div>
</template>

<script>
// const dummyData = {};
import RecommendUsers from "./../components/RecommendUsers";
import NavBar from "./../components/Navbar";
import TweetCard from "./../components/TweetCard";

export default {
  components: {
    RecommendUsers,
    NavBar,
    TweetCard,
  },
};
</script>

<style scoped>
/* main tweets */
.main-tweets {
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  /* flex-wrap: wrap; */
}

.tweets-container {
  width: 600px;
  height: 100%;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  margin-right: 30px;
}
.tweets-header {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
}
.tweets-post {
  height: auto;
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
  height: 100%;
}
.tweets-card {
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  padding: 10px;
}
.tweets-title {
  display: flex;
}
.tweets-title > h5 {
  margin-right: 10px;
}
.tweets-form {
  width: 100%;
  margin-bottom: 50px;
}
.tweets-text {
  width: 100%;
}
.tweets-submit {
  bottom: 0px;
  right: 0px;
  position: absolute;
}
.tweet {
  padding: 5px;
}
.divider {
  width: 100%;
  height: 10px;
  background-color: #e6ecf0;
}

.tweets-like {
  margin-left: 80px;
}
.tweets-button {
  width: 64px;
  height: 40px;
  border-radius: 64px;
  background: #ff6600;
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  color: #ffffff;
}
</style>