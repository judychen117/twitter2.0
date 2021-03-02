<template>
  <div class="recommend-bar mt-3">
    <h3 class="recommend-title">跟隨誰</h3>
    <div class="recommend-followers">
      <ul class="recommend-followers-list">
        <li class="recommend-followers-item">
          <div class="tweets-avatar">
            <i>頭像</i>
          </div>
          <div class="recommend-followers-name">
            <a href="">
              <p>jason</p>
              <p>＠jason</p>
            </a>
          </div>
          <button>跟隨</button>
        </li>
      </ul>
      <ul class="recommend-followers-list">
        <li class="recommend-followers-item">
          <div class="tweets-avatar">
            <i>頭像</i>
          </div>
          <div class="recommend-followers-name">
            <a href="">
              <p>jason</p>
              <p>＠jason</p>
            </a>
          </div>
          <button>跟隨</button>
        </li>
      </ul>
    </div>
    <a href="" class="recommend-fotter">顯示更多</a>
  </div>
</template>

<script>
export default {};
</script>

<style >
/* Recommend Bar */
.recommend-bar {
  border-radius: 10px;
  padding: 15px;
  width: 350px;
  height: 100%;
  background-color: #f5f8fa;
}
.recommend-bar {
  background-color: #f5f8fa;
}
.recommend-followers-item {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>