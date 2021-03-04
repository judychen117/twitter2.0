<template>
  <div class="recommend-bar">
    <div class="recommend mt-3">
      <h3 class="recommend-title">跟隨誰</h3>
      <div class="recommend-followers">
        <ul class="recommend-followers-list">
          <li class="recommend-followers-item">
            <div class="tweets-avatar">
              <img src="../../public/img/UserAvatar.svg" alt="avatar" />
            </div>
            <div class="recommend-followers-name">
              <a href="">
                <p>jason</p>
                <p>＠jason</p>
              </a>
            </div>
            <button class="followers-item-button">跟隨</button>
          </li>
          <li class="recommend-followers-item">
            <div class="tweets-avatar">
              <img src="../../public/img/UserAvatar.svg" alt="avatar" />
            </div>
            <div class="recommend-followers-name">
              <a href="">
                <p>jason</p>
                <p>＠jason</p>
              </a>
            </div>
            <button class="followers-item-button">跟隨</button>
          </li>
        </ul>
      </div>
      <a href="" class="recommend-fotter">顯示更多</a>
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
  padding: 15px;
  height: auto;
  background-color: #f5f8fa;
}
.recommend-followers-item {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.followers-item-button {
  width: 62px;
  height: 30px;
  border-radius: 62px;
  background: #ff6600;
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  color: #ffffff;
}
</style>