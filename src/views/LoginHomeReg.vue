<template>
	<div class="rge">
		<div class="logIn">
			<div class="logInCenter">
				<div class="logInText">
					<div class="accounts">开始免费试用</div>
					<div class="information">
						<v-form v-model="valid">
							<v-container style="padding:0;">
								<v-row>
									<v-col>
									<v-text-field
										v-model="phone"
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
											v-model="code"
											:rules="vecRules"
											label="验证码"
											placeholder="请输入验证码"
											required
											class="mt-4"
										>
											<v-btn slot="append" color="#4f6ef7" width="120" height="38">获取验证码</v-btn>
										</v-text-field>
									</v-col>
									<v-col
									cols="24"
									md="12"
									>
									<v-text-field
										v-model="pword"
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
                    <img src="./../assets/img/shouyeioc_03.jpg" alt="">
                </div>
                <div class="bottomImg">
                    <img src="./../assets/img/shouyeioc_05.jpg" alt="">
                </div>
                <div class="bottomImg">
                    <img src="./../assets/img/shouyeioc_07.jpg" alt="">
                </div>
            </div>
            <div class="siteName">
                <p>© 2020 shoubibao.com</p>
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
			phone: '',
			code: '',
			pword: '',
			phoneRules: [
				v => !!v || '请输入手机号',
				v => v.length <= 11 || 'Name must be less than 11 characters',
			],
			pwRules: [
				v => !!v || '请输入密码',
				v => v.length <= 6 || 'Name must be less than 6 characters',
			],
			vecRules: [
				v => !!v || '请输入验证码',
				v => v.length <= 8 || 'Name must be less than 8 characters',
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
	.logInCenter{
		padding 20px
		box-sizing border-box
		.logInText{
			.accounts{
				padding 30px 0!important
				font-size 22px!important
			}
			margin 0!important
			.information{
				padding 0 20px!important
			}
		}
		padding-bottom 100px
	}
	.login-btn{
		margin-top 20px!important
	}
	.download-more{
		display flex!important
	}
	.download{
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
.rge{
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
				margin 70px 0 0 0;
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
		position fixed
		width 100%
		bottom 0
		left 0
		background-color: #000829;
		.bottomCenter{
			display: flex;
			justify-content: center;
			align-items: center;
			.bottomImg{
				padding: 15px 5px 5px;
				display flex
				img{
					width: 27px;
					height: 27px;
				}
			}
		}
		.siteName{
			text-align: center;
			font-size: 12px;
			color: #fff;
			padding-bottom 3px
		}
	}
}
</style>
