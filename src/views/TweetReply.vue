<template>
  <div class="main-tweets">
    <NavBar />
    <div class="tweets-container">
      <div class="tweets-header">
        <a href="">
          <img src="../../public/img/icon_back.svg" alt="" />
          <span>推文 </span>
        </a>
      </div>
      <div class="tweets">
        <div class="tweets-post-card">
          <div class="tweets-post">
            <div class="tweet-title">
              <a href="" class="tweets-avatar">
                <img src="../../public/img/UserAvatar.svg" alt="avatar" />
              </a>
              <a class="tweets-name">
                <div class="name">jason</div>
                <div class="id">@jason</div>
              </a>
            </div>
            <div class="tweet-replay-container">
              <div class="tweet-push-content">
                <p>
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum.
                </p>
              </div>
              <div class="tweet-push-time">
                <p>上午 10:05・2020年6月10日</p>
              </div>
              <div class="tweet-status">
                <div class="re-tweet">
                  <span>34</span>
                  <span>回覆</span>
                </div>
                <div class="like">
                  <span>100</span>
                  <span>喜歡次數</span>
                </div>
              </div>
              <div class="tweet-status-icon">
                <a href="" class="re-tweet-icon">
                  <i class="fas fa-comment"></i>
                </a>
                <a href="" class="like-icon">
                  <i class="fas fa-heart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="tweets-list">
          <div class="tweets-card">
            <div class="tweets-avatar">
              <img src="../../public/img/UserAvatar.svg" alt="avatar" />
            </div>
            <div class="tweets-content">
              <a href="" class="tweets tweets-title">
                <div class="tweets-reply-name">jason</div>
                <div class="tweets-reply-id id">@jason・</div>
                <div class="tweets-reply-time">3hr</div>
              </a>
              <div class="">
                <span>回覆</span>
                <span> <a href="" class="tweets-post-user">@122334 </a></span>
              </div>
              <div class="tweet tweets-text">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
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

<style scoped>
a {
  text-decoration: none; /* 拿掉底線 */
  color: #000000;
}
.tweets-header > a {
  line-height: 50px;
}
.tweets-header > a > img {
  margin-left: 15px;
}
.tweets-header a > span {
  margin-left: 40px;
}
.main-tweets {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
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
  position: relative;
  padding: 15px 15px 0 15px;
  border-bottom: 1px solid #e6ecf0;
}
.tweets-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: palegreen;
  margin-right: 10px;
}
.tweet-title {
  display: flex;
}
.tweet-status {
  display: flex;
  padding: 20px 0px 20px 0px;
}
.like {
  padding-left: 20px;
}
.like-icon {
  padding-left: 150px;
}
.re-tweet-icon,
.like-icon {
  width: 30px;
  height: 30px;
}
.tweets-name > .name {
  margin-bottom: 5px;
}
.tweet-status-icon {
  padding: 15px 0px 15px 0px;
}
.tweet-push-time {
  padding: 15px 0 15px 0;
}
.tweet-push-time > p {
  color: #657786;
}

.tweets-reply-name {
  margin-right: 5px;
}
.tweet-push-time,
.tweet-status {
  border-bottom: 1px solid #e6ecf0;
}
.tweets-post-user {
  padding-left: 5px;
}
.tweet-push-content {
  margin-top: 15px;
}
.tweets-post-user {
  color: #ff6600;
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
  margin: 4px 0 4px 0;
}
.tweets-title > h5 {
  margin-right: 10px;
}
.id,
.tweets-reply-time {
  color: #657786;
}
</style>