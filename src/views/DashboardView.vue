<template>
  <v-app id="dashboard-view" :class="{'no-padding':responsive}">
    <core-filter />

    <core-toolbar />

    <core-drawer />

      <v-fade-transition mode="out-in">
        <router-view id="main"/>
      </v-fade-transition>

    <core-footer v-if="$route.meta.name !== 'Maps'" />

  </v-app>
</template>

<script>
export default {
  name: 'DashboardView',
  metaInfo () {
    return {
      title: '收币宝',
    }
  },
  data(){
    return {
      responsive: false
    }
  },
  mounted(){
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    onResponsiveInverted () {
      this.responsive = window.innerWidth < 1264
    }
  },
}
</script>
<style>
#dashboard-view .v-application--wrap{
  box-sizing: border-box;
  padding-left: 260px;
  padding-bottom: 82px;
}
#dashboard-view.no-padding .v-application--wrap{
  padding: 0;
}
</style>
