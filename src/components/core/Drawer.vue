<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
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
          <img :src="logo" class="logo"/>
        </v-list>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :active-class="color"
          color="#86a1fe"
        >
          <v-list-item-action class="mr-3">
            <img :src="link.icon" class="action-icon">
          </v-list-item-action>
          <v-list-item-action-text style="color:#fff;font-weight:bold;" v-text="link.text" />
        </v-list-item>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script> 
import { mdiChartBox, mdiCube, mdiMapMarker, mdiDatabaseImport, mdiDatabaseExport, mdiCashUsd, mdiCogBox, mdiLightbulbOn } from '@mdi/js';
import { mapMutations, mapState } from 'vuex'
export default {
  data: () => ({
    logo: require('@/assets/img/shouye_03.png'),
    links: [
      {
        to: '/dashboard/console',
        icon: require('./../../assets/img/tubiao_03.png'),
        text: '概况'
      },
      {
        to: '/dashboard/applyManage',
        icon: require('./../../assets/img/tubiao_06.png'),
        text: '应用管理'
      },
      {
        to: '/dashboard/addressManage',
        icon: require('./../../assets/img/tubiao_08.png'),
        text: '地址管理'
      },
      {
        to: '/dashboard/houstonManage',
        icon: require('./../../assets/img/tubiao_10.png'), 
        text: '进账管理'
      },
  
      {
        to: '/dashboard/outAccountsManage',
        icon: require('./../../assets/img/tubiao_12.png'),
        text: '出账管理'
      },
      {
        to: '/dashboard/financial-affairs',
        icon: require('./../../assets/img/tubiao_14.png'),
        text: '财务管理'
      },
      {
        to: '/dashboard/systemSettings',
        icon: require('./../../assets/img/tubiao_16.png'),
        text: '系统设置'
      },
      {
        to: '/dashboard/help',
        icon: require('./../../assets/img/tubiao_18.png'),
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
  #app-drawer.v-navigation-drawer{
    box-shadow: none!important;
  }
  #app-drawer {
    .logo{
      width: 100px;
      object-fit: cover;
    }
    .action-icon{
      width: 19px;
      height: 19px;
      object-fit: cover;
    }
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
    .v-list .v-list-item--active{
      background: #344b9b!important;
    }
  }
</style>
