<template>
  <div class="recommend-bar">
    <div class="recommend mt-3">
      <div class="recommend-title">
        <p>跟隨誰</p>
      </div>
      <div class="recommend-followers">
        <ul class="recommend-followers-list">
          <li class="recommend-followers-item">
            <a href="" class="recommend-followers-title">
              <img
                src="../../public/img/UserAvatar.svg"
                alt="avatar"
                class="tweets-avatar"
              />
              <div>
                <p class="recommend-followers-name">jason</p>
                <p class="recommend-followers-id">＠jason</p>
              </div>
            </a>
            <button class="followers-item-button">正在跟隨</button>
          </li>
          <li class="recommend-followers-item">
            <a href="" class="recommend-followers-title">
              <img
                src="../../public/img/UserAvatar.svg"
                alt="avatar"
                class="tweets-avatar"
              />
              <div>
                <p class="recommend-followers-name">jason</p>
                <p class="recommend-followers-id">＠jason</p>
              </div>
            </a>
            <button class="followers-item-button">跟隨</button>
          </li>
          <li class="recommend-followers-item">
            <a href="" class="recommend-followers-title">
              <img
                src="../../public/img/UserAvatar.svg"
                alt="avatar"
                class="tweets-avatar"
              />
              <div>
                <p class="recommend-followers-name">jason</p>
                <p class="recommend-followers-id">＠jason</p>
              </div>
            </a>
            <button class="followers-item-button">跟隨</button>
          </li>
          <li class="recommend-followers-item">
            <a href="" class="recommend-followers-title">
              <img
                src="../../public/img/UserAvatar.svg"
                alt="avatar"
                class="tweets-avatar"
              />
              <div>
                <p class="recommend-followers-name">jason</p>
                <p class="recommend-followers-id">＠jason</p>
              </div>
            </a>
            <button class="followers-item-button">跟隨</button>
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
export default {};
</script>

<style scoped>
/* Recommend Bar */
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