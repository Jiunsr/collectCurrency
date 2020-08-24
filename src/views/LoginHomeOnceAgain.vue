<template>
	<div class="loginHome">
		<div class="logIn">
			<div class="logInCenter">
				<div class="logInText">
					<div class="accounts">请输入您的Google验证码</div>
					<div class="information">	
					<v-form v-model="valid">
						<v-container style="padding:0 0 40px;">
							<v-row>
								<v-col
								cols="24"
								md="12"
								>
								<v-text-field
									v-model="pword"
									:rules="pwRules"
									label="验证码"
									placeholder="请输入验证码"
									required
									class="mt-4"
								></v-text-field>
								</v-col>
								<v-btn 
									color="#4f6ef7" 
									:block="true" :large="true" 
									class="login-btn"
									@click="submitLogin"
								>确认</v-btn>
							</v-row>
						</v-container>
					</v-form>
					</div>
				</div>
			</div>
		</div>
		<v-navigation-drawer
			v-model="drawer"
			absolute
			left
			temporary
		>
			<v-list>
				<v-list-item-group v-model="moreItem" color="primary">
					<v-list-item
						v-for="item in items"
						:key="item.title"
						link
						@click="openMoreItem(item)"
						:class="item.class||''"
					>
						<v-list-item-icon class="cd-more-mr">
							<v-icon color="#4f6ef7">{{ item.icon }}</v-icon>
						</v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
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
			<div class="siteName">© 2020 shoubibao.com</div>
		</div>
	</div>
</template>

<script>
import { mdiFormatListBulleted, mdiHomeCircle, mdiLayers, mdiTextBox, mdiHelpCircle, mdiDownload } from '@mdi/js';
import { mapActions } from 'vuex';
export default {
	data: function () {
		return {
			mdiFormatListBulleted,
			drawer: false,
			moreItem: 1,
			items: [
				{ title: '首页', icon: mdiHomeCircle },
				{ title: '产品价格', icon: mdiLayers },
				{ title: '开发者文档', icon: mdiTextBox },
				{ title: '帮助中心', icon: mdiHelpCircle },
				{ title: '钱包下载', icon: mdiDownload, class:"download-more" },
			],
			errorMessages: 'Incorrect login info',
			snackbar: false,
			color: 'general',
			showPassword: false,
			
			valid: false,
			phone: '',
			pword: '',
			phoneRules: [
				v => !!v || '请输入手机号',
				v => v.length <= 10 || 'Name must be less than 10 characters',
			],
			pwRules: [
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
		...mapActions([ 'login' ]),
		goReg(){
			this.$router.push({ path:'/LoginHomeReg' });
		},
		setDrawer(){
			this.drawer = !this.drawer;
		},
		openMoreItem(item){
			this.setDrawer();
			console.warn({item})
		},
		submitLogin(){
			let phone = this.phone;
			let pword = this.pword;
			let param = {phone, pword}
			this.login(param).then((result) => {
				this.$router.push({ name:"console" });
			}).catch((err) => {
				console.warn(err);
			});
		},
	},
	metaInfo () {
		return {
		}
	}
}
</script>

<style lang="stylus" scoped>
html,body {
	height 100%
}
.center{
	height 100%
}
@media only screen and (max-width: 1264px){
	.cd-list{
		display none 
	}
	.cd-more{
		display block!important
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
.download-more{
	display none
}
.cd-more-mr{
	margin-right 10px
}
.cd-more{
	display none 
}
.login-btn{
	margin-top 48px
}
.minw-100{
	min-width 100px
}
.tabsActive{
	color #000
	font-weight bold
}
.loginHome{
	font-family: Arial, Helvetica, sans-serif;
	box-sizing border-box
	padding-bottom 150px
	.head{
		position fixed
		top 0
		width 100%
		padding 0 5%
		box-sizing border-box
		min-height: 45px;
		display: flex;
		align-items: center;
		box-shadow: 0 4px 10px #e5e5e5;
		background-color: #fff;
		margin-bottom: 20px;
		width: 100%;
		.logo{
			display flex
			justify-content center
			margin-right 20px
			img{
				width: 90px;
			}
		}
		.label{
			flex: 1;
			li{
				list-style: none;
				display: inline-block;
				color: #acacac;
				padding: 0 70px 0 0;
				font-size: 16px;
			}
		}
		.download{
			cursor pointer
			user-select none
			display: flex;
			border-right: 1px solid #e5e5e5;
			padding-right: 20px;
			justify-content: center;
			align-items: center;
			min-width 130px
			img{
				// width: 12px;
				// height: 14px;
				padding-left: 10px;
			}
			samp{
				font-size: 16px;
				padding-right: 10px;
			}
		}
	}
	.logIn{
		.logInCenter{
			display: flex;
			justify-content: center;
			align-items: center;
			margin :auto;

			.logInText{
				width: 520px;
				// height: 550px;
				box-shadow: 0 4px 10px #e5e5e5;
				margin :70px 0 0 0;
				.accounts{
					font-size: 30px;
					letter-spacing: 3px;
					font-weight: bold;
					color: #4f6ef7;
					text-align :center;
					padding 50px 0;
				}
				.information{
					padding :0 80px;
					.bookInformation{
						display flex;
						.thatLog{
							font-size 14px;
							padding 5px 0 38px 0;
							flex 1;
						}
						.forget{
							font-size 14px;
							color #9d9d9d;
							padding 5px 0 38px 0;
						}
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
