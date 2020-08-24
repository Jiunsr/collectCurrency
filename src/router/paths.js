import store from '../store'
export default [
  {
    path: '*',
    meta: {
      name: '',
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if (store.getters.authorized) {
        next({name:'console'})
      } else {
        next()
      }
    },
    redirect: {
      name: 'home'
    }
  },
  // This  allows you to have pages apart of the app but no rendered inside the dash
  {
    path: '/',
    meta: {
      name: '',
      requiresAuth: false
    },
    component: () => import(`@/views/homeMain.vue`),
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          name: '首页',
          requiresAuth: false
        },
        component: () => import(`@/views/home.vue`),
      },
      {
        path: '/product',
        name: 'product',
        meta: {
          name: '产品介绍',
          requiresAuth: false
        },
        component: () => import(`@/views/product.vue`),
      },
      {
        path: '/document',
        name: 'document',
        meta: {
          name: '开发者文档',
          requiresAuth: false
        },
        component: () => import(`@/views/document.vue`),
      },
      {
        path: '/help',
        name: 'help',
        meta: {
          name: '帮助中心',
          requiresAuth: false
        },
        component: () => import(`@/views/help.vue`),
      },
      {
        path: '/download',
        name: 'download',
        meta: {
          name: '钱包下载',
          requiresAuth: false
        },
        component: () => import(`@/views/download.vue`),
      },
      {
        path: '/loginHomeReg',
        name: 'loginHomeReg',
        meta: {
          name: '注册',
          requiresAuth: false
        },
        component: () => import(`@/views/LoginHomeReg.vue`),
      },
      {
        path: '/loginHome',
        name: 'loginHome',
        meta: {
          name: '登录',
          requiresAuth: false
        },
        component: () => import(`@/views/LoginHome.vue`),
      },
      {
        path: '/LoginHomeOnceAgain',
        name: 'LoginHomeOnceAgain',
        meta: {
          name: '再次验证',
          requiresAuth: false
        },
        component: () => import(`@/views/LoginHomeOnceAgain.vue`),
      },
    ]
  },
  // add any extra routes that you want rendered in the dashboard as a child below. Change toolbar names here
  {
    path: '/dashboard',
    meta: {
      name: '控制台',
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      console.warn({ to, from });
      if (!store.getters.authorized) {
        next({name:'home'})
        return
      }
      next()
    },
    component: () => import(`@/views/DashboardView.vue`),
    children: [
      {
        path: '/dashboard/console',
        name: 'console',
        meta: {
          name: '概况',
        },
        component: () => import(`@/components/DashViews/Dashboard.vue`)
      },
      {
        path: 'applyManage',
        name: 'applyManage',
        meta: {
          name: '应用管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/applyManage.vue`)
      },
      {
        path: '/applyManageInfo',
        name: 'applyManageInfo',
        meta: {
          name: '应用管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/applyManageInfo.vue`),
      },
      {
        path: '/applyManageInfoManage',
        name: 'applyManageInfoManage',
        meta: {
          name: '应用管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/applyManageInfoManage.vue`),
      },
      {
        path: '/applyManageInfoAPI',
        name: 'applyManageInfoAPI',
        meta: {
          name: '应用管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/applyManageInfoAPI.vue`),
      },
      {
        path: '/applyManageInfoRenew',
        name: 'applyManageInfoRenew',
        meta: {
          name: '应用管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/applyManageInfoRenew.vue`),
      },
      {
        path: '/applyManageInfoPay',
        name: 'applyManageInfoPay',
        meta: {
          name: '应用管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/applyManageInfoPay.vue`),
      },
      {
        path: '/applyManageInfoNewApp',
        name: 'applyManageInfoNewApp',
        meta: {
          name: '应用管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/applyManageInfoNewApp.vue`),
      },
      {
        path: 'addressManage',
        name: 'addressManage',
        meta: {
          name: '地址管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/addressManage.vue`)
      },
      {
        path: '/addressManageCreate',
        name: 'addressManageCreate',
        meta: {
          name: '地址管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/addressManageCreate.vue`)
      },
      {
        path: '/addressManageMonitor',
        name: 'addressManageMonitor',
        meta: {
          name: '地址管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/addressManageMonitor.vue`)
      },
      {
        path: 'houstonManage',
        name: 'houstonManage',
        meta: {
          name: '进账管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/houstonManage.vue`)
      },
      {
        path: '/houstonManageInfo',
        name: 'houstonManageInfo',
        meta: {
          name: '进账管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/houstonManageInfo.vue`)
      },
      {
        path: '/houstonManageInfoMeg',
        name: 'houstonManageInfoMeg',
        meta: {
          name: '进账管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/houstonManageInfoMeg.vue`)
      },

      {
        path: 'outAccountsManage',
        name: 'outAccountsManage',
        meta: {
          name: '出账管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/outAccountsManage.vue`)
      },
      {
        path: '/outAccountsManageInfo',
        name: 'outAccountsManageInfo',
        meta: {
          name: '出账管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/outAccountsManageInfo.vue`)
      },
      {
        path: '/outAccountsManageInfoMeg',
        name: 'outAccountsManageInfoMeg',
        meta: {
          name: '出账管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/outAccountsManageInfoMeg.vue`)
      },
      {
        path: 'financial-affairs',
        name: 'financial-affairs',
        meta: {
          name: '财务管理',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/financialAffairs.vue`)
      },
      {
        path: 'systemSettings',
        name: 'systemSettings',
        meta: {
          name: '系统设置',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/systemSettings.vue`)
      },
      {
        path: 'help',
        name: 'help',
        meta: {
          name: '帮助中心',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/help.vue`)
      },
      {
        path: '/dashboard/personal',
        name: 'personal',
        meta: {
          name: '个人中心',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/personal.vue`)
      },
      {
        path: '/dashboard/personalMeg',
        name: 'personalMeg',
        meta: {
          name: '消息',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/personalMeg.vue`)
      },
      {
        path: '/dashboard/personalWorkorder',
        name: 'personalWorkorder',
        meta: {
          name: '工单',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/personalWorkorder.vue`)
      },
      {
        path: '/dashboard/personalDownPackage',
        name: 'personalDownPackage',
        meta: {
          name: '钱包下载',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/personalDownPackage.vue`)
      },
    ]
  }
]
