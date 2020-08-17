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
        next('/dashboard')
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
    beforeEnter: (to, from, next) => {
      if (store.getters.authorized) {
        next('/dashboard')
      } else {
        next()
      }
    },
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
    ]
  },
  // add any extra routes that you want rendered in the dashboard as a child below. Change toolbar names here
  {
    path: '/dashboard',
    meta: {
      name: '仪表板视图',
      requiresAuth: true
    },
    component: () => import(`@/views/DashboardView.vue`),
    children: [
      {
        path: '/',
        meta: {
          name: '仪表板',
        },
        component: () => import(`@/components/DashViews/Dashboard.vue`)
      },
      {
        path: 'user-profile',
        meta: {
          name: '用户资料',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/UserProfile.vue`)
      },
      {
        path: 'table-list',
        meta: {
          name: 'Table List',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/SimpleTables.vue`)
      },
      {
        path: 'user-tables',
        meta: {
          name: 'User Table',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/UsersTable.vue`)
      },
      {
        path: 'tablestest',
        meta: {
          name: 'Complex Tables test',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/TableList.vue`)
      },
      {
        path: 'typography',
        meta: {
          name: 'Typography',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/Typography.vue`)
      },
      {
        path: 'icons',
        meta: {
          name: 'Icons',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/Icons.vue`)
      },
      {
        path: 'maps',
        meta: {
          name: 'Maps',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/Maps.vue`)
      },
      {
        path: 'notifications',
        meta: {
          name: 'Notifications',
          requiresAuth: true
        },
        component: () => import(`@/components/DashViews/Notifications.vue`)
      }
    ]
  }
]
