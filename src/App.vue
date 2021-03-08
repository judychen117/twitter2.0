<template>
  <div id="twitter-forum">
    <main role="main" class="bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  components: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;500&display=swap');

#twitter-forum,
.bg-white {
  height: 100%;
  width: 100%;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
}
html {
  scroll-behavior: smooth;
}
body {
  background-color: #f6f7f8;
  font-family: "Noto Sans TC", sans-serif; /* 設定字型 */
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  line-height: 0.9;
}
p {
  margin: 0;
  color: black;
}
ul,
li {
  list-style-type: none; /* 拿掉前方圈圈 */
  margin: 0;
  padding: 0;
  border: 0px;
}
a {
  text-decoration: none; /* 拿掉底線 */
}
</style>