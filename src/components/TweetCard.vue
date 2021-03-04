<template>
  <div class="tweets-card">
    <a href="" class="tweets-avatar">
      <img src="../../public/img/UserAvatar.svg" alt="avatar" />
    </a>
    <div class="tweets-content">
      <a href="" class="tweet tweets-title">
        <div class="tweets-name">jason</div>
        <div class="tweets-id">@jason・</div>
        <div class="tweets-time">3hr</div>
      </a>
      <div class="tweet tweets-text">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <div class="tweet tweets-footer">
        <a href="#" class="tweets-comment">
          <img src="../../public/img/commentIcon.svg" alt="" class="icon" />
          <span>33</span>
        </a>
        <a href="#" class="tweets-like">
          <img src="../../public/img/likeIcon.svg" alt="" class="icon" />
          <span>11</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none; /* 拿掉底線 */
  color: #000000;
}
.tweets-card {
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  padding: 15px;
}
.tweets-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: palegreen;
  margin-right: 10px;
}
.tweets-title {
  display: flex;
  margin: 4px 0 4px 0;
}
.tweets-title > h5 {
  margin-right: 10px;
}
.tweet {
  padding: 5px;
}
.tweets-like {
  margin-left: 80px;
}
.tweets-name {
  margin-right: 5px;
}
.tweets-id,
.tweets-time {
  color: #657786;
}
.icon {
  margin-right: 10px;
  width: 15;
  height: 15px;
}
</style>