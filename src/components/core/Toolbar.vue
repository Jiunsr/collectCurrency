<template>
	<v-toolbar
		id="core-toolbar"
		style="background: #fff;flex:0 0 auto;"
		height="90"
	>
		<div class="v-toolbar-title">
			<v-toolbar-title class="font-weight-light text-subtitle-1 pl-8">
				<v-btn
					v-if="responsive"
					class="default v-btn--simple"
					icon
					@click.stop="onClickBtn">
					<v-icon>mdi-view-list</v-icon>
				</v-btn>
				{{ title }}
			</v-toolbar-title>
		</div>

		<v-spacer/>
		<v-toolbar-items>
			<v-flex
				align-center
				layout
				py-2
			>
				<!-- <router-link
					v-ripple
					class="toolbar-items"
					to="/">
					<v-icon color>mdi-home</v-icon>
				</router-link>
				<v-menu
					bottom
					left
					content-class
					offset-y
					transition="slide-y-transition">
					<router-link
						v-ripple
						slot="activator"
						class="toolbar-items"
						to="/dashboard/notifications"
					>
						<v-badge
							color="error"
							overlap>
							<template slot="badge">{{ notifications.length }}</template>
							<v-icon color>mdi-bell</v-icon>
						</v-badge>
					</router-link>
					<v-card>
						<v-list dense>
							<v-list-tile
								v-for="notification in notifications"
								:key="notification"
								@click="onClick">
								<v-list-tile-title v-text="notification"/>
							</v-list-tile>
						</v-list>
					</v-card>
				</v-menu>
				<router-link
					v-ripple
					class="toolbar-items"
					to="/dashboard/user-profile">
					<v-icon color>mdi-account</v-icon>
				</router-link> -->
				
				<div class="download active" @click="toDownload">
					<span>钱包下载</span>
					<v-img :src="downLoad" max-height="16" max-width="15" class="ml-2"/>
				</div>

				<v-tabs
					class="cd-list"
					height="60" slider-size="4"
					background-color="accent-4"
					v-model="tabsState"
					slider-color="#4f6ef7"
					active-class="tabsActive"
				>
					<v-tab >
						<div class="minw-100">工单</div>
					</v-tab>
					<v-tab >
						<div class="minw-100">消息</div>
					</v-tab>
					<v-tab >
						<div class="minw-100">个人中心</div>
					</v-tab>
					<v-tab >
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
	data: () => ({
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
		tabsState: 3,
	}),

	computed: {
		...mapGetters(['authorized'])
	},

	watch: {
		$route: {
			immediate: true,
			handler(route){
				this.title = route.meta.name;
			}
		}
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
		toDownload(){
			this.$router.push({ name:'download' });
		},
	}
}
</script>
<style lang="stylus">
	#core-toolbar a {
		text-decoration: none;
	}
	#core-toolbar .v-toolbar__content{
		box-shadow: 0 0 10px #eee;
		box-sizing: border-box;
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
