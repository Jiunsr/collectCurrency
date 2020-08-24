<template>
  <v-footer
    id="core-footer"
    app
    absolute
    height="82"
    dark
    style="background:#010827;"
  >
    <!-- <v-spacer/> -->
    <div class="footer-items">
      <div class="line-item">
        <img src="./../../assets/img/shouyeioc_03.jpg" alt="">
        <img src="./../../assets/img/shouyeioc_05.jpg" alt="">
        <img src="./../../assets/img/shouyeioc_07.jpg" alt="">
      </div>
      <span class="shoubibao">
        &copy;
        {{ (new Date()).getFullYear() }}
        <a
          href="https://twitter.com/Cleesus"
          target="_blank">shoubibao.com</a>
      </span>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Home', Link: '/dashboard/console' },
      { name: 'Demo', Link: 'https://clintoxx.github.io/vuetify-admin-dashboard/' },
      { name: 'GitHub', Link: 'https://github.com/ClintOxx' }
    ]
  })
}
</script>
<style lang="stylus">
#core-footer {
  z-index: 2;
  .footer-items{
    display flex
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width 200px
    margin 0 auto
    .line-item{
      img{ cursor: pointer; }
      img+img{
        margin-left 10px
      }
    }
    .shoubibao{
      font-size 14px
      color #ffffff
      font-weight 600
      a{
        font-size 14px
        color #ffffff
        font-weight 600
      }
    }
  }
}
</style>
