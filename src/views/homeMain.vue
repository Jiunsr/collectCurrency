<template>
	<div class="center">
		<div class="head">
			<div class="logo">
				<img src="../assets/img/shouye_03.png" alt="">
			</div>
			<div class="label">
				<v-tabs
					class="cd-list"
					height="45" slider-size="2" slider-width="2"
					background-color="deep-purple accent-4"
					v-model="tabsState"
					slider-color="#4f6ef7"
					active-class="tabsActive"
				>
					<v-tab :to="{name:'home'}">
						<div class="minw-85">首页</div>
					</v-tab>
					<v-tab :to="{name:'product'}">
						<div class="minw-100">产品价格</div>
					</v-tab>
					<v-tab :to="{name:'document'}">
						<div class="minw-100">开发者文档</div>
					</v-tab>
					<v-tab :to="{name:'help'}">
						<div class="minw-100">帮助中心</div>
					</v-tab>
					<v-tab :to="{name:'download'}" style="display:none;">
						<div class="minw-100">下载中心</div>
					</v-tab>
				</v-tabs>
			</div>
			<v-btn class="cd-more" color="#4f6ef7" @click="setDrawer">
				<v-icon>{{mdiFormatListBulleted}}</v-icon>
			</v-btn>
			<div class="download" :class="{ active:tabsState==4||tabsState=='/download'}" @click="toDownload">
				<span>钱包下载</span>
				<img src="../assets/img/shouye_06.png" alt="" :style="{filter:tabsState==4||tabsState=='/download'?'grayscale(0)':'grayscale(1)'}">
			</div>
			<v-btn color="#4f6ef7" class="log-in white--text" style="margin-left:30px;" @click="goLogin">
				登录
			</v-btn>
			<v-btn class="log-in" style="color:#212529!important;border:1px solid #4f6ef7; margin-left: 20px;background-color: #fff;" @click="goReg">
				注册
			</v-btn>
			
		</div>
		<router-view/>
		<v-navigation-drawer
			v-model="drawer"
			fixed
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
	</div>
</template>

<script>
import { mdiFormatListBulleted, mdiHomeCircle, mdiLayers, mdiTextBox, mdiHelpCircle, mdiDownload, mdiAccountArrowRight, mdiAccountEditOutline } from '@mdi/js';
export default {
	data: function () {
		return {
			mdiFormatListBulleted,
			drawer: false,
			moreItem: 1,
			items: [
				{ title: '首页', icon: mdiHomeCircle, name: 'home' },
				{ title: '产品价格', icon: mdiLayers, name: 'product' },
				{ title: '开发者文档', icon: mdiTextBox, name: 'document' },
				{ title: '帮助中心', icon: mdiHelpCircle, name: 'help' },
				// { title: '钱包下载', icon: mdiDownload, class:"download-more", name: 'download' },
				{ title: '登录', icon: mdiAccountArrowRight, class:"download-more", name:'loginHome' },
				{ title: '注册', icon: mdiAccountEditOutline, class:"download-more", name:'loginHomeReg' },
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
				v => !!v || '请输入密码',
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
	watch: {
		$route:{
			immediate: true,
			handler(route){
				let names = ['home', 'product', 'document', 'help', 'download'];
				if(names.includes(route.name)){
					this.tabsState = names.indexOf(route.name);
					console.warn({tabs: this.tabsState});
				}
			}
		}
	},
  // Sends action to Vuex that will log you in and redirect to the dash otherwise, error
	methods: {
		goReg(){
			this.$router.push({ name:'loginHomeReg' });
		},
		goLogin(){
			this.$router.push({ name:'loginHome' });
		},
		setDrawer(){
			this.drawer = !this.drawer;
		},
		openMoreItem(item){
			console.warn({item})
			let name = item.name;
			this.$router.push({ name });
			this.setDrawer();
		},
		toDownload(){
			this.$router.push({ name:'download' });
		},
	},
	metaInfo () {
		return {
		}
	}
}
</script>

<style lang="stylus" scoped>
@media only screen and (max-width: 1264px){
	.label{
		display none 
	}
	.cd-more{
		display block!important
	}
	.download-more{
		display flex!important
	}
	.download{
		display none!important
	}
	.log-in{
		display none;
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
.v-navigation-drawer{
	z-index 999
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
	min-width 90px
}
.minw-85{
	min-width 50px
}
.tabsActive{
	color #000
	font-weight bold
}
.center{
	font-family: Arial, Helvetica, sans-serif;
	padding-top 80px
	box-sizing border-box
	.head{
		box-sizing border-box
		z-index 20
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
			padding 20px 0 20px 25px
			box-sizing border-box
			li{
				list-style: none;
				display: inline-block;
				color: #acacac;
				padding: 0 70px 0 0;
				font-size: 16px;
			}
			.v-tabs{
				.v-tabs-bar{
					// height: 90px;
					.v-slide-group__content{
						.v-tabs-slider-wrapper{
							height 2px
							left 15px
							width 100px
							bottom 18px
						}
					}
				}
			}
		}
		.download.active{
			color #4f6ef7
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
				margin :133px 0 240px 0;
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
}
</style>
