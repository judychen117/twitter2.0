import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Regist from '../views/Regist.vue'

Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/login'
    },
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./../views/Login.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('./../views/Setting.vue')
    },
    {
      path: '/tweets/:tweet_id',
      name: 'tweet-reply',
      component: () => import('./../views/TweetReply.vue')
    },
    {
      path: '/tweets',
      name: 'tweets-main',
      component: () => import('./../views/TweetMain.vue')
    },
    {
      path: '/users/:id/followers',
      name: 'user-follower',
      component: () => import('./../views/UserFollower.vue')
    },
    {
      path: '/users/:id/followings',
      name: 'user-following',
      component: () => import('./../views/UserFollowing.vue')
    },
    {
      path: '/users/:id/tweet',
      name: 'user-profile',
      component: () => import('./../views/UserProfileTweets.vue')
    },
    {
      path: '/users/:id/like',
      name: 'user-profile',
      component: () => import('./../views/UserProfileLikes.vue')
    },
    {
      path: '/admin',
      name: 'admin-login',
      component: () => import('./../views/AdminLogin.vue')
    },
    {
      path: '/admin_tweets',
      name: 'admin-tweets',
      component: () => import('./../views/AdminTweets.vue')
    },
    {
      path: '/admin_users',
      name: 'admin-users',
      component: () => import('./../views/AdminUsers.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
