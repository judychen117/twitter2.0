<template>
  <div class="main-tweets">
    <AdminNavBar />
    <div class="tweets-container">
        <div class="page-title">
          <p>使用者列表</p>
        </div>
        <div class="divider"></div>
        <AdminUserCard />
    </div>
  </div>
</template>

<script>
// const dummyData = {};
import AdminNavBar from "./../components/AdminNavbar";
import AdminUserCard from "./../components/AdminUserCard";

export default {
  components: {
    AdminNavBar,
    AdminUserCard,
  },
};
</script>

<style scoped>
a {
  text-decoration: none; /* 拿掉底線 */
  color: #000000;
}
/* main tweets */
.main-tweets {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* padding: 3rem 0;   */
}
.tweets-container {
  width: 950px;
  height: 100%;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  margin-right: 30px;
}
.page-title {
  font-size: 18px;
  padding: 1rem 1rem;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: #e6ecf0;
}
</style>