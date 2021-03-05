<template>
  <div class="main-tweets">
    <NavBar />
    <div class="tweets-container">
      <div class="tweets-header">
        <a href="">首頁</a>
      </div>
      <div class="tweets">
        <div class="tweets-post-card">
          <div class="tweets-post">
            <a href="">
              <img
                src="../../public/img/UserAvatar.svg"
                alt="avatar"
                class="tweets-avatar"
              />
            </a>
            <form class="tweets-form">
              <div class="tweets-text">
                <label for="text"></label>
                <textarea class="form-control" rows="3" name="text">
                有什麼新鮮事？
                </textarea>
              </div>
              <div class="tweets-submit">
                <button type="submit" class="tweets-button">推文</button>
              </div>
            </form>
          </div>
        </div>
        <div class="divider"></div>
        <div class="tweets-list">
          <TweetCard />
        </div>
      </div>
    </div>
    <RecommendUsers />
  </div>
</template>

<script>
// const dummyData = {
//   users: [
//     {
//       id: 1,
//       email: "user1@example.com",
//       password: "$2a$10$rRG8l0ek0WvGbXHfestB6eNWlUZmFNBgyeKytmPfV8VN66CUjPtge",
//       name: "user1",
//       avatar: "https://loremflickr.com/320/240/user/?lock=71.88970419746622",
//       introduction: null,
//       role: "user",
//       account: null,
//       cover: null,
//       createdAt: "2021-03-03T14:08:28.000Z",
//       updatedAt: "2021-03-03T14:08:28.000Z",
//       Followers: [],
//       FollowerCount: 0,
//       isFollowed: false,
//     },
//     {
//       id: 2,
//       email: "user2@example.com",
//       password: "$2a$10$q3.A3pJtu1afMaxQpIHcMenidTkpAzNLPjZNRIjVpL1Z3ggznUiei",
//       name: "user2",
//       avatar: "https://loremflickr.com/320/240/user/?lock=47.84394218399848",
//       introduction: null,
//       role: "user",
//       account: null,
//       cover: null,
//       createdAt: "2021-03-03T14:08:28.000Z",
//       updatedAt: "2021-03-03T14:08:28.000Z",
//       Followers: [],
//       FollowerCount: 0,
//       isFollowed: false,
//     },
//     {
//       id: 3,
//       email: "user3@example.com",
//       password: "$2a$10$wPxvczmzGNszLSeHCKXJ2.7D.IUqIFtY6fjBpQqPO45JDCOaca7.i",
//       name: "user3",
//       avatar: "https://loremflickr.com/320/240/user/?lock=0.8636325727364724",
//       introduction: null,
//       role: "user",
//       account: null,
//       cover: null,
//       createdAt: "2021-03-03T14:08:29.000Z",
//       updatedAt: "2021-03-03T14:08:29.000Z",
//       Followers: [],
//       FollowerCount: 0,
//       isFollowed: false,
//     },
//     {
//       id: 4,
//       email: "user4@example.com",
//       password: "$2a$10$KW/SklIW36fQskmvb9empuNF/VMP5kIW.UDNu75yE47QqQl9gdtKq",
//       name: "user4",
//       avatar: "https://loremflickr.com/320/240/user/?lock=33.60284782451577",
//       introduction: null,
//       role: "user",
//       account: null,
//       cover: null,
//       createdAt: "2021-03-03T14:08:29.000Z",
//       updatedAt: "2021-03-03T14:08:29.000Z",
//       Followers: [],
//       FollowerCount: 0,
//       isFollowed: false,
//     },
//     {
//       id: 5,
//       email: "user5@example.com",
//       password: "$2a$10$EQTKVtMYxmAHpnx.66WjR.ptHVkM6xpsgz8lMzlSz6fsX5.xHUPjO",
//       name: "user5",
//       avatar: "https://loremflickr.com/320/240/user/?lock=23.613565054849772",
//       introduction: null,
//       role: "user",
//       account: null,
//       cover: null,
//       createdAt: "2021-03-03T14:08:29.000Z",
//       updatedAt: "2021-03-03T14:08:29.000Z",
//       Followers: [],
//       FollowerCount: 0,
//       isFollowed: false,
//     },
//   ],
// };
import RecommendUsers from "./../components/RecommendUsers";
import NavBar from "./../components/Navbar";
import TweetCard from "./../components/TweetCard";
import UsersAPI from "./../apis/user";
// import authorizationAPI from "./../apis/authorization";
// import { Toast } from "./../utils/helpers";

export default {
  components: {
    RecommendUsers,
    NavBar,
    TweetCard,
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await UsersAPI.get();
        console.log("data", data);
      } catch (error) {
        console.log("error");
      }
    },
    // fetchUsers() {},
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
  width: 600px;
  height: 100%;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  margin-right: 30px;
}
.tweets-header {
  line-height: 55px;
  padding-left: 15px;
  height: 55px;
  font-size: 18px;
  border-bottom: 1px solid #e6ecf0;
}
.tweets-post-card {
  margin: 15px;
}

.tweets-post {
  height: auto;
  display: flex;
  position: relative;
}
.tweets-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: palegreen;
  margin-right: 10px;
}
.tweets-list {
  height: 100%;
}

.tweets-form {
  width: 100%;
}
textarea {
  border: 0px;
  resize: none;
}
.tweets-text {
  width: 100%;
}
.tweets-submit {
  bottom: 0px;
  right: 0px;
  position: absolute;
}

.divider {
  width: 100%;
  height: 10px;
  background-color: #e6ecf0;
}
.tweets-button {
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
</style>