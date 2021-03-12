<template>
  <div class="nav-bar">
    <div class="mt-3">
      <router-link to="/admin_tweets" class="nav-logo">
        <img src="../../public/img/alphaCampIcon.svg" alt="" />
      </router-link>
      <ul class="nav-list">
        <li class="nav-item nav-home">
          <router-link :to="{ name: 'admin-tweets' }">
            <i class="nav-icon fas fa-home"></i>
            <p>推文清單</p>
          </router-link>
        </li>
        <li class="nav-item nav-profile">
          <router-link :to="{ name: 'admin-users' }">
            <i class="nav-icon fas fa-user-alt"></i>
            <p>使用者列表</p></router-link
          >
        </li>
      </ul>
      <a href="" class="nav-item nav-sign-out">
        <i class="nav-icon fas fa-sign-out-alt"></i>
        <p @click="logout">登出</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.nav-bar {
  margin-right: 40px;
  width: 235px;
  height: 100%;
  position: relative;
  padding-top: 3rem;
}
.nav-logo {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.nav-list {
  margin-top: 100px;
}
.nav-item {
  font-size: 18px;
}
.nav-item > a {
  width: 235px;
  height: 60px;
  display: flex;
  align-items: center;
}
.nav-icon {
  margin-right: 20px;
  color: #1c1c1c;
}
.nav-sign-out {
  position: absolute;
  bottom: 0px;
  left: 0px;
}
</style>