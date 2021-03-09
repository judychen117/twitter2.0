<template>
  <div class="nav">
    <div class="nav-tab">
      <router-link :to="{ name: 'user-follower', params: { id } }"
        >跟隨者</router-link
      >
    </div>
    <div class="nav-tab">
      <router-link :to="{ name: 'user-following', params: { id } }"
        >正在跟隨</router-link
      >
    </div>
  </div>
</template>


<script>
export default {
  props: {
    id: {
      true: Number,
      required: true,
    },
  },
};
</script>
<style scoped>
.nav {
  height: 3rem;
}
.nav-tab {
  width: 130px;
  height: 3rem;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
}
.nav-tab a {
  color: #657786;
}
.nav-active {
  border-bottom: 3px solid #ff6600;
}
.nav-active a {
  color: #ff6600;
}
</style>