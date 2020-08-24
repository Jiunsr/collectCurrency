<template>
	<v-toolbar
		id="core-toolbar"
		style="background: #fff;flex:0 0 auto;"
		height="90"
	>
		<div class="v-toolbar-title">
			<v-toolbar-title class="font-weight-light text-subtitle-1 ml-8">
				<v-btn
					v-if="responsive"
					class="default v-btn--simple"
					icon
					@click.stop="onClickBtn">
					<v-icon>mdi-view-list</v-icon>
				</v-btn>
				<div class="back-home" @click="backHome">首页</div>
			</v-toolbar-title>
		</div>

		<v-spacer/>
		<v-toolbar-items>
			<v-flex
				align-center
				layout
				py-2
			>

				<v-tabs
					class="cd-list"
					height="60" slider-size="4"
					background-color="accent-4"
					v-model="tabsState"
					slider-color="#4f6ef7"
					active-class="tabsActive"
				>
					<v-tab @click="toPage(0)">
						<div class="download active" >
							<span>钱包下载</span>
							<v-img :src="downLoad" max-height="16" max-width="15" class="ml-2"/>
						</div>
					</v-tab>
					<v-tab  @click="toPage(1)">
						<div class="minw-100">工单</div>
					</v-tab>
					<v-tab @click="toPage(2)">
						<div class="minw-100">消息</div>
					</v-tab>
					<v-tab @click="toPage(3)">
						<div class="minw-100">个人中心</div>
					</v-tab>
					<v-tab @click="toPage(4)">
						<div class="minw-100">控制台</div>
					</v-tab>
				</v-tabs>
				<div class="logout-box">
					<v-btn text color="primary" height="60" @click="logout">注销</v-btn>
				</div>
				<!-- <v-icon class="toolbar-items" color>mdi-power</v-icon> -->
			</v-flex>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
	data: () => {
		return {
			downLoad: require('@/assets/img/shouye_06.png'),
			notifications: [
				'Mike, Thanos is coming',
				'5 new avengers joined the team',
				"You're now friends with Capt",
				'Another Notification',
				'Another One - Dj Khalid voice'
			],
			title: "",
			responsive: false,
			responsiveInput: false,
			tabsState: 4,
			pathOption: [ 'personalDownPackage', 'personalWorkorder', 'personalMeg',  'personal', "console"],
			pathAddres: ["/dashboard/personalDownPackage", "/dashboard/personalWorkorder", "/dashboard/personalMeg", "/dashboard/personal", "/dashboard/console"],
			routeName: null,
		}
	},

	computed: {
		...mapGetters(['authorized'])
	},

	watch: {
		$route: {
			immediate: true,
			handler(route){
				this.title = route.meta.name;
				this.notChange = false;
				console.warn("测试:", route.name, route);
				
				if(route.name){
					this.routeName = route.name;
					if(this.pathOption.includes(route.name)){
						this.tabsState = this.pathOption.indexOf(route.name);
					}else {
						this.tabsState = 4;
					}
				}
			}
		},
	},

	mounted () {
		this.onResponsiveInverted()
		window.addEventListener('resize', this.onResponsiveInverted)
	},
	beforeDestroy () {
		window.removeEventListener('resize', this.onResponsiveInverted)
	},

	methods: {
		...mapMutations('app', ['setDrawer', 'toggleDrawer']),
		onClickBtn () {
			this.setDrawer(!this.$store.state.app.drawer)
		},
		onClick () {
			//
		},
		onResponsiveInverted () {
			if (window.innerWidth < 991) {
				this.responsive = true
				this.responsiveInput = false
			} else {
				this.responsive = false
				this.responsiveInput = true
			}
		},
		logout: function () {
			this.$store.dispatch('logout').then(() => {
				this.$router.push('/')
			})
		},
		toPage(status){
			this.$router.push(this.pathAddres[status])
		},
		backHome(){
			this.$router.push('/');
		},
	}
}
</script>
<style lang="stylus">
	#core-toolbar a {
		text-decoration: none;
	}
	#core-toolbar .v-toolbar__content{
		box-shadow: 0 0 20px rgb(232, 232, 232, .9)!important;
		box-sizing: border-box;
	}
	.v-sheet.v-toolbar:not(.v-sheet--outlined){
		box-shadow: none!important;
	}
	.back-home{
		line-height 45px
		min-width 45px
		cursor pointer;
	}
	.logout-box{
		margin-left 40px
		padding-left 15px
		box-sizing border-box
		position relative
		&::after{
			position absolute
			left 0
			top 50%
			display inline-block
			width 1px 
			height 30px
			content ""
			background #e5e5e5
			transform translateY(-50%)
		}
	}
	#core-toolbar{
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
</style>
