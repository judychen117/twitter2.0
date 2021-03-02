<template>
  <div class="nav-bar mt-3">
    <a href="" class="nav-logo">
      <i>logo</i>
    </a>
    <ul class="nav-list">
      <li class="nav-item">
        <a href="#">
          <i class="fas fa-home"></i>
          <p>首頁</p>
        </a>
      </li>
      <li class="nav-item">
        <a href="#">
          <i class="fas fa-user-alt"></i>
          <p>個人資料</p></a
        >
      </li>
      <li class="nav-item">
        <a href="#">
          <i class="fas fa-cog"></i>
          <p>設定</p></a
        >
      </li>
      <li>
        <button class="btn btn-lg btn-primary btn-block mb-3">推文</button>
      </li>
    </ul>
    <a href="" class="nav-sign-out">
      <i class="fas fa-sign-out-alt"></i>
      <p>登出</p>
    </a>
  </div>
</template>

<style >
.nav-bar {
  margin-right: 40px;

  width: 235px;
  height: 100%;
}
.nav-item > a {
  width: 235px;
  height: 60px;
  display: flex;
}
</style>