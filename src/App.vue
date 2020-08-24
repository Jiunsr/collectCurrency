<template>
  <transition mode="out-in">
    <router-view/>
  </transition>
</template>

<style lang="scss">
  /* eslint-disable */
	@import "@/styles/index.scss";
  /* eslint-disable */
	.v-datatable thead th.column.sortable i {
		vertical-align: unset;
  }
	input[disabled="disabled"]{
		color: #333!important;
	}
  .v-text-field > .v-input__control > .v-input__slot:after{
    border-color: #4f6ef7;
  }
  .theme--light.v-messages.error--text{
    color: #ff5252;
  }
  .v-text-field.error--text{
    color: #ff5252;
  }
  .v-application .error--text {
      color: #ff5252 !important;
      caret-color: #ff5252 !important;
  }
  .v-sheet.v-card:not(.v-sheet--outlined){
    box-shadow: 0 0 20px rgb(232, 232, 232, .9)!important;
  }
  .ivu-form .ivu-form-item-label{
    color: #000!important;
  }
  .page-title{
    padding: 5px 20px;
    display: flex;
    justify-content: flex-start;
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
  .page-box{
    padding: 20px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .ivu-page{
      .ivu-page-prev,.ivu-page-next{
        line-height: 25px;
      }
    }
  }
	.other{
		position: relative;
		.locate{
			position: absolute;
			min-width: 300px;
			margin-right :-300px;
			top: 0;
			right: 0;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			padding-left: 20px;
		}
	}
</style>
<script>
/* eslint-disable */
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
