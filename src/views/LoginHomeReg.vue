<template>
	<div class="center">
		<div class="head">
			<div class="logo">
				<img src="../assets/img/shouye_03.png" alt="">
			</div>
			<div class="label">
				<v-tabs
					height="80" slider-size="4"
					background-color="deep-purple accent-4"
					v-model="tabsState"
					active-class="tabsActive"
				>
					<v-tabs-slider color="#4f6ef7"></v-tabs-slider>
					<v-tab>
						<div class="minw-100">首页</div>
					</v-tab>
					<v-tab>
						<div class="minw-100">产品价格</div>
					</v-tab>
					<v-tab>
						<div class="minw-100">开发者文档</div>
					</v-tab>
					<v-tab>
						<div class="minw-100">帮助中心</div>
					</v-tab>

				</v-tabs>
			</div>
			<div class="download">
				<span>钱包下载</span>
				<img src="../assets/img/shouye_06.png" alt="">
			</div>
			<v-btn
				color="#4f6ef7"
				class="white--text"
				style="margin-left:30px;"
			>
				登录
			</v-btn>
			<v-btn style="color:#4f6ef7!important;border:1px solid #4f6ef7;" >
				注册
			</v-btn>
			
		</div>
		
		<div class="logIn">
			<div class="logInCenter">
				<div class="logInText">
					<div class="accounts">开始免费试用</div>
					<div class="information">
						<v-form v-model="valid">
							<v-container style="padding:0;">
								<v-row>
									<v-col
									class="mt-4"
									>
									<v-text-field
										v-model="firstname"
										:rules="phoneRules"
										label="手机"
										placeholder="请输入手机号"
										required
									></v-text-field>
									</v-col>

									<v-col
									cols="24"
									md="12"
									>
									<v-text-field
										v-model="firstname"
										:rules="vecRules"
										label="验证码"
										placeholder="请输入验证码"
										required
										class="mt-4"
									>
									<v-btn slot="append" color="#4f6ef7">获取验证码</v-btn>
									</v-text-field>
									</v-col>
									<v-col
									cols="24"
									md="12"
									>
									<v-text-field
										v-model="lastname"
										:rules="pwRules"
										label="密码"
										placeholder="请输入密码"
										required
										class="mt-4"
									></v-text-field>
									</v-col>
									<v-btn color="#4f6ef7" :block="true" :large="true" class="mt-5">立即注册</v-btn>
								</v-row>
							</v-container>
							<div class="protocol">注册表明您已经阅读并同意收币宝的《使用协议》和《隐藏协议》</div>
							<div class="thatLog">已有账号？<a style="color:#4f6ef7; font-weight: bold;">立即登录</a></div>
						</v-form>
					</div>
				</div>
			</div>
		</div>

	<div class="bottom">
		<div class="bottomCenter">
			<div class="bottomImg">
				<img src="../assets/img/shouyeioc_03.jpg" alt="">
			</div>
			<div class="bottomImg">
				<img src="../assets/img/shouyeioc_05.jpg" alt="">
			</div>
			<div class="bottomImg">
				<img src="../assets/img/shouyeioc_07.jpg" alt="">
			</div>
		</div>
		<div class="siteName">
			<div>© 2020 shoubibao.com</div>
		</div>
	</div>
</div>


</template>

<script>
export default {
	data: function () {
		return {
			username: '',
			password: '',
			errorMessages: 'Incorrect login info',
			snackbar: false,
			color: 'general',
			showPassword: false,
			
			valid: false,
			firstname: '',
			lastname: '',
			phoneRules: [
				v => !!v || '请输入手机号',
				v => v.length <= 10 || 'Name must be less than 10 characters',
			],
			pwRules: [
				v => !!v || '请输入密码',
				v => v.length <= 10 || 'Name must be less than 10 characters',
			],
			vecRules: [
				v => !!v || '请输入验证码',
				v => v.length <= 10 || 'Name must be less than 10 characters',
			],
			email: '',
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+/.test(v) || 'E-mail must be valid',
			],
			tabsState: 0
		}
	},

  // Sends action to Vuex that will log you in and redirect to the dash otherwise, error
	methods: {
	},
	metaInfo () {
		return {
		}
	}
}
</script>

<style lang="stylus" scoped>
@media only screen and (max-width: 1264px){
	.test-1{
		display none!important
	}
}
@media (max-width: 960px){
	.test-2{
		display none!important
	}
}
@media (max-width: 600px){
	.test-3{
		display none!important
	}
}
.minw-100{
	min-width 100px
}
.tabsActive{
	color #000
	font-weight bold
}
.center{
	font-family: Arial, Helvetica, sans-serif;
	.head{
		padding 0 5%
		box-sizing border-box
		min-height 45px;
		display flex;
		align-items center;
		box-shadow 0 4px 10px #e5e5e5;
		background-color #fff;
		margin-bottom 20px;
		width 100%;
		.logo{
			width 10%
			display flex
			justify-content center
			img{
				width 90px;
			}
		}
		.label{
			flex 1;
			li{
				list-style none;
				display inline-block;
				color #acacac;
				padding 0 70px 0 0;
				font-size 16px;
			}
		}
		.download{
			cursor pointer
			user-select none
			display flex;
			border-right 1px solid #e5e5e5;
			padding-right 20px;
			justify-content center;
			align-items center;
			min-width 130px
			img{
				// width: 12px;
				// height: 14px;
				padding-left: 10px;
			}
			samp{
				font-size 16px;
				padding-right 10px;
			}
		}
	}
	.logIn{
		.logInCenter{
			display flex;
			justify-content center;
			align-items center;
			margin auto;
			.logInText{
				width 520px;
				box-shadow 0 4px 10px #e5e5e5;
				margin 133px 0 240px 0;
				.accounts{
					font-size 30px;
					letter-spacing 3px;
					font-weight bold;
					color #4f6ef7;
					text-align center;
					padding 50px 0 40px 0;
				}
				.information{
					padding 0 80px;
					.protocol{
						font-size 12px;
						font-weight bold;
						text-align center;
					}
					.thatLog{
						font-size 16px;
						padding 68px 0 38px 0;
						text-align center;
					}
				}
			}
		}
	}

	.bottom{
		height 70px;
		background-color #000829;
		.bottomCenter{
			display flex;
			justify-content center;
			align-items center;
			.bottomImg{
				padding 15px 10px 3px 0;
				img{
					width 27px;
					height 27px;
				}
			}
		}
		.siteName{
			text-align center;
			p{
				font-size 12px;
				color #fff;
			}
		}
	}
}
</style>
