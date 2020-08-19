<template>
  <transition mode="out-in">
    <router-view/>
  </transition>
</template>

<style lang="scss">
	@import "@/styles/index.scss";

	/* Remove in 1.2 */
	.v-datatable thead th.column.sortable i {
		vertical-align: unset;
  }
  .page-title{
    padding: 5px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .page-item{
      color: #000;
      font-size: 18px;
      font-weight: 600;
    }
    .page-item+.page-item{
      padding-left: 10px;
      color: #000;
      font-size: 14px;
      &::before{
        content: ">";
        color: #000;
        font-size: 16px;
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
</style>
<script>
// checks to see if auth jwt token is valid or has expired, if it gets back 401 error log out
export default {
  created: function () {
    this.$http.interceptors.response.use((response) => {
      return response
    }, (error) => {
      if (error.response.status === 401) {
        if (this.$store.getters.authorized) {
          this.$store.dispatch('refreshtoken')
        } else {
          return Promise.reject(error)
        }
      } else {
        return Promise.reject(error)
      }
    })
  }
}
</script>
