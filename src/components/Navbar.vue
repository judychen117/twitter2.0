<template>
  <div class="nav-bar">
    <div class="mt-3">
      <router-link :to="{ name: 'tweets-main' }" class="nav-logo">
        <img src="../../public/img/alphaCampIcon.svg" alt="" />
      </router-link>
      <ul class="nav-list">
        <li class="nav-item nav-home">
          <router-link :to="{ name: 'tweets-main' }">
            <i class="nav-icon fas fa-home"></i>
            <p>首頁</p>
          </router-link>
        </li>
        <li class="nav-item nav-profile">
          <!-- TODO:要把ＩＤ換成currentUserId -->
          <router-link to="/users/1/tweet">
            <i class="nav-icon fas fa-user-alt"></i>
            <p>個人資料</p>
          </router-link>
        </li>
        <li class="nav-item nav-setting">
          <a href="#">
            <i class="nav-icon fas fa-cog"></i>
            <p>設定</p></a
          >
        </li>
        <li>
          <button
            class="nav-teweet-button button"
            @click.stop.prevent="addPost"
          >
            推文
          </button>
        </li>
      </ul>
      <router-link :to="{name:'login'}" class="nav-item nav-sign-out" @click="logout">
        <i class="nav-icon fas fa-sign-out-alt"></i>
        <p>登出</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: "post",
    };
  },
  methods: {
    addPost() {
      this.showModal = "post";
      this.$emit("show-post-modal", this.showModal);
    },
    logout () {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/signin')
    }
  },
};
</script>

<style scoped>
.nav-bar {
  margin-right: 40px;
  width: 235px;
  height: 100%;
  position: relative;
  /* border: 2px solid red; */
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
  /* border: 2px solid wheat; */
  font-size: 18px;
}
.nav-item > a {
  width: 235px;
  height: 60px;
  display: flex;
  /* border: 2px solid red; */
  align-items: center;
}
.nav-icon {
  margin-right: 20px;
  color: #1c1c1c;
}
.nav-teweet-button {
  width: 210px;
  height: 45px;
  border-radius: 210px;
  background: #ff6600;
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  color: #ffffff;
  margin-top: 10px;
}
.nav-sign-out {
  position: absolute;
  bottom: 0px;
  left: 0px;
}
</style>