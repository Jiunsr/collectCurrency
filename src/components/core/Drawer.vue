<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    width="260"
    absolute
    style="background:#1b283d;"
  >
    <v-img
      :src="image"
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
        :dark="false"
      >
        <v-list style="background:#fff;" height="90" class="d-flex justify-center align-center">
          <v-img :src="logo" height="100%" max-height="42" max-width="92" />
        </v-list>
        <!-- <v-divider/> -->
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :active-class="color"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-action-text v-text="link.text" />
        </v-list-item>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  data: () => ({
    logo: require('@/assets/img/shouye_03.png'),
    links: [
      {
        to: '/dashboard/console',
        icon: 'mdi-view-dashboard',
        text: '概况'
      },
      {
        to: '/dashboard/applyManage',
        icon: 'mdi-account',
        text: '应用管理'
      },
      {
        to: '/dashboard/addressManage',
        icon: 'mdi-format-font',
        text: '地址管理'
      },
      {
        to: '/dashboard/houstonManage',
        icon: 'mdi-chart-bubble',
        text: '进账管理'
      },
  
      {
        to: '/dashboard/outAccountsManage',
        icon: 'mdi-table-edit',
        text: '出账管理'
      },
      {
        to: '/dashboard/financial-affairs',
        icon: 'mdi-table-edit',
        text: '财务管理'
      },
      {
        to: '/dashboard/systemSettings',
        icon: 'mdi-map-marker',
        text: '系统设置'
      },
      {
        to: '/dashboard/help',
        icon: 'mdi-bell',
        text: '帮助中心'
      }
    ],
    responsive: false
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },
  mounted () {
    this.onResponsiveInverted()
    // window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    // window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
</style>
