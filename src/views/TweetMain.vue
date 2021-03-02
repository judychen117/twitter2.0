<template>
  <div class="main-tweets">
    <NavBar />
    <div class="tweets">
      <div class="tweets-post-card">
        <div class="tweets-header">
          <a href="">首頁</a>
        </div>
        <div class="tweets-post">
          <i class="tweets-avatar">頭像</i>
          <form class="tweets-form">
            <div class="tweets-text">
              <label for="text"></label>
              <textarea class="form-control" rows="3" name="text" />
            </div>
            <div class="tweets-submit">
              <button type="submit" class="btn btn-primary mr-0">推文</button>
            </div>
          </form>
        </div>
      </div>
      <div class="divider"></div>
      <div class="tweets-list">
        <div class="tweets-card">
          <div class="tweets-avatar">
            <i>頭像</i>
          </div>
          <div class="tweets-content">
            <a href="" class="tweet tweets-title">
              <h5 class="tweets-name">jason</h5>
              <h5 class="tweets-id">@jason</h5>
              <h5 class="tweets-time">3hr</h5>
            </a>
            <div class="tweet tweets-text">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div class="tweet tweets-footer">
              <a href="#" class="tweets-comment">
                <i class="fas fa-comment"></i>
                <span>33</span>
              </a>
              <a href="#" class="tweets-like">
                <i class="fas fa-heart"></i>
                <span>11</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RecommendUsers />
  </div>
</template>

<script>
import RecommendUsers from "./../components/RecommendUsers";
import NavBar from "./../components/Navbar";
export default {
  components: {
    RecommendUsers,
    NavBar,
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
}
html {
  scroll-behavior: smooth;
}
body {
  background-color: #f6f7f8;
  font-family: "Noto Sans TC", sans-serif; /* 設定字型 */
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  line-height: 0.9;
}
p {
  margin: 0;
  color: black;
}
ul,
li {
  list-style-type: none; /* 拿掉前方圈圈 */
  margin: 0;
  padding: 0;
  border: 0px;
}
a {
  text-decoration: none; /* 拿掉底線 */
}

/* main tweets */
.main-tweets {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tweets {
  width: 600px;
  /* height: 100%; */
  border-left: 1px solid #8d8a8a;
  border-right: 1px solid #8d8a8a;
  margin-right: 30px;
  padding: 5px;
}
.tweets-header {
  height: 55px;
  /* border: 2px solid palegoldenrod; */
}
.tweets-post {
  height: auto;
  border-top: 1px solid #8d8a8a;
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
  border-bottom: 1px solid #8d8a8a;
  display: flex;
  padding: 10px;
}
.tweets-title {
  display: flex;
}
.tweets-title > h5 {
  /* margin-right: 100px; */
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
</style>