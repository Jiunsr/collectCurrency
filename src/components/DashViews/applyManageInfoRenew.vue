<template>
	<v-container
		fluid
		grid-list-xl 
		class="applyManageInfoAPI"
	>
	
		<div class="page-title">
			<div class="page-item">应用管理</div>
			<div class="page-item">续费</div>
		</div>
		<v-layout wrap>
			<v-flex
				md12
				sm12
				lg12
				class="pl-8 pr-8 pb-8"
			>  
				<v-card class="mx-auto pl-5 pr-5" max-width="100%" :elevation="6">
					<div class="usersTable">
						<div class="recordCenter">
							<div class="recordBg"></div>
							<div class="recordText">续费</div>
						</div>
					</div>
					<div class="line"></div>

					<div>续费</div>
					<div>续费</div>
					<v-btn color="#4f6ef7" :to="{name:'applyManageInfoPay'}">去支付</v-btn>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: 'Dashboard',
	data () {
		return {
			page: 1,
			pageCount: 1,
			itemsPerPage: 10,
			loading: false,
		}
	},
	methods: {}
}
</script>
<style lang="stylus">
.applyManageInfoAPI{

	th.bg-blue{
		color #fff !important
		background-color #4F6EF7 !important
	}
	.usersTable{
		.recordCenter{
			display flex
			align-items center
			padding-left 0
			padding-top 10px
			padding-bottom 10px
			.recordBg{
				width 18px
				height 18px
				border 4px solid rgba(79,110,247,0.5)
				border-radius 50%
				// background-color #4f6ef7
				&::after{
					content ""
					display block
					width 100%
					height 100%
					border-radius 50%
					background-color #4f6ef7
				}
			}
			.recordText{
				font-size: 16px;
				padding 0 15px 0 6px
				font-weight bold
			}
			.Text{
				flex 1
				display flex
				justify-content flex-end
				align-items center
				font-size 14px
				.hour{
					padding-right 40px
					padding-bottom 20px
				}
				.day{
					padding-right 40px
				}
				.day1{
					padding-right 40px
				}
			}
		}
	}
	.line{
		border-bottom 1px solid #efefef
		width 97%
		margin 0 auto
	}
}
	
</style>
