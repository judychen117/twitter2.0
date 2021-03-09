import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Regist from '../views/Regist.vue'
import store from './../store'

Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'nav-active',
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

router.beforeEach(async (to, from, next) => {
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated

  // 比較 localStorage 和 store 中的 token 是否一樣
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }
  const pathsWithoutAuthentication = ['sign-up', 'sign-in']

  // 如果 token 無效則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/login')
    return
  }

  // 如果 token 有效則轉址到餐廳首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/tweets')
    return
  }

  next()
})


export default router
