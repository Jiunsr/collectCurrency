<template>
	<v-container
		fill-height
		fluid
		grid-list-xl 
		class="applyManageInfo"
	>
		<div class="page-title">
			<div class="page-item">应用管理</div>
			<div class="page-item">{{$route.query.appName}} 监控</div>
		</div>
		<v-layout wrap style="width:100%;">

			<v-flex
				md12
				sm12
				lg6
				class="pl-8 pr-0"
			> 
				<v-card class="mx-auto" height="288" :elevation="4" mar>
					<div class="dashboard">
						<div class="fiscalCenter">
							<div class="bg"></div>
							<div class="fiscalText">资源概况</div>
						</div>
						<div class="line"></div>
						<div class="balanceBox">
							<div class="balance">
								<div class="money" style="font-size: 26px;">23/</div>
								<div class="money" style="font-size: 26px;">100</div>
								<div class="available">地址数量</div>
							</div>
							<div class="line2"></div>
							<div class="balance">
								<div class="money" style="font-size: 40px;">9</div>
								<div class="available">应用数量</div>
							</div>
							<div class="line2"></div>
							<div class="balance">
								<div class="money" style="font-size: 26px;">23/</div>
								<div class="money" style="font-size: 26px;">100</div>
								<div class="available">币种数量</div>
							</div>
							<div class="line2"></div>
							<div class="balance">
								<div class="money" style="font-size: 18px;">10010/</div>
								<div class="money" style="font-size: 18px;">￥10000.00</div>
								<div class="available">进账资产</div>
							</div>
							<div class="line2"></div>
							<div class="balance">
								<div class="money" style="font-size: 18px;">10010/</div>
								<div class="money" style="font-size: 18px;">￥10000.00</div>
								<div class="available">出账资产</div>
							</div>
						</div>
					</div>
					<v-btn small color="#4f6ef7" height="30" width="130px" style="font-size:14px;display:block;margin:10px auto;">购买地址数量</v-btn>
				</v-card>
			</v-flex>

			<v-flex
				md12
				sm12
				lg3
				class="pl-8 pr-4"
			>  
				<v-card class="mx-auto" height="288" max-width="100%" :elevation="4">
					<div class="dashboard">
						<div class="fiscalCenter">
							<div class="bg"></div>
							<div class="fiscalText">待续费</div>
						</div>
						<div class="line"></div>
						<div class="balanceBox">
							<div class="balance">
								<div class="money" style="font-size:40px;">100</div>
								<div class="available" >地址数量</div>
							</div>
							<div class="line2"></div>
							<div class="balance">
								<div class="money" style="font-size:40px;">110</div>
								<div class="available">应用数量</div>
							</div>
						</div>
					</div>
					<v-btn small color="#4f6ef7" height="30" width="80px" style="font-size:14px;display:block;margin:10px auto;">续费</v-btn>
				</v-card>
			</v-flex>
			<v-flex
				md12
				sm12
				lg3
				class="pr-8 pl-4"
			>  
				<v-card class="mx-auto" height="288" max-width="100%" :elevation="4">
					<div class="dashboard">
						<div class="fiscalCenter">
							<div class="bg"></div>
							<div class="fiscalText">待出账</div>
						</div>
						<div class="line"></div>
						<div class="balanceBox">
							<div class="balance">
								<div class="money" style="font-size:40px;">0</div>
								<div class="available">待出账数量（笔）</div>
							</div>
						</div>
					</div>
					<v-btn small color="#4f6ef7" height="30" width="80px" style="font-size:14px; display:block;margin:10px auto;">处理</v-btn>
				</v-card>
			</v-flex>

			<v-flex
				md12
				sm12
				lg12
				class="pl-8 pr-8 pb-8"
			>  
				<v-card class="mx-auto pl-5 pr-5" max-width="100%" :elevation="4">
					<div class="dasText">
						<Tabs :animated="false">
								<TabPane label="最近20小时">
									33
									
								</TabPane>
								<TabPane label="最近7天">
									22
								</TabPane>
								<TabPane label="最近30天">
									11
								</TabPane>
						</Tabs>
					</div>
					<div class="line"></div>
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
			dailySalesChart: {
				data: {
					labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
					series: [
						[12, 17, 7, 17, 23, 18, 38]
					]
				},
				options: {
					lineSmooth: this.$chartist.Interpolation.cardinal({
						tension: 0
					}),
					low: 0,
					high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
					chartPadding: {
						top: 0,
						right: 0,
						bottom: 0,
						left: 0
					}
				}
			},
			dataCompletedTasksChart: {
				data: {
					labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
					series: [
						[230, 750, 450, 300, 280, 240, 200, 190]
					]
				},
				options: {
					lineSmooth: this.$chartist.Interpolation.cardinal({
						tension: 0
					}),
					low: 0,
					high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
					chartPadding: {
						top: 0,
						right: 0,
						bottom: 0,
						left: 0
					}
				}
			},
			emailsSubscriptionChart: {
				data: {
					labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
					series: [
						[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

					]
				},
				options: {
					axisX: {
						showGrid: false
					},
					low: 0,
					high: 1000,
					chartPadding: {
						top: 0,
						right: 5,
						bottom: 0,
						left: 0
					}
				},
				responsiveOptions: [
					['screen and (max-width: 768x)', {
						seriesBarDistance: 5,
						axisX: {
							labelInterpolationFnc: function (value) {
								return value[0]
							}
						}
					}]
				]
			},
			headers: [
				{
					sortable: false,
					text: 'ID',
					value: 'id'
				},
				{
					sortable: false,
					text: 'Name',
					value: 'name'
				},
				{
					sortable: false,
					text: 'Salary',
					value: 'salary',
					align: 'right'
				},
				{
					sortable: false,
					text: 'Country',
					value: 'country',
					align: 'right'
				},
				{
					sortable: false,
					text: 'City',
					value: 'city',
					align: 'right'
				}
			],
			items: [
				{
					name: 'Dakota Rice',
					country: 'Niger',
					city: 'Oud-Tunrhout',
					salary: '$35,738'
				},
				{
					name: 'Minerva Hooper',
					country: 'Curaçao',
					city: 'Sinaai-Waas',
					salary: '$23,738'
				}, {
					name: 'Sage Rodriguez',
					country: 'Netherlands',
					city: 'Overland Park',
					salary: '$56,142'
				}, {
					name: 'Philip Chanley',
					country: 'Korea, South',
					city: 'Gloucester',
					salary: '$38,735'
				}, {
					name: 'Doris Greene',
					country: 'Malawi',
					city: 'Feldkirchen in Kārnten',
					salary: '$63,542'
				}
			],
			tabs: 0,
			list: {
				0: false,
				1: false,
				2: false
			}
		}
	},
	methods: {
		complete (index) {
			this.list[index] = !this.list[index]
		}
	}
}
</script>
<style lang="stylus">
.applyManageInfo{
	.dashboard{
		display flex
		flex-direction column
		.fiscalCenter{
			display flex
			align-items center
			padding 10px 0 10px 20px
			.bg{
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
			.fiscalText{
				font-size: 16px;
				padding-left 5px; 
				padding: 0 15px 0 6px;
				font-weight: bold;
			}
		}
		
		.line{
			border-bottom 1px solid #efefef
			width 91%
			margin 0 auto
		}

		.balanceBox{
			flex 1
			display flex
			.balance{
				width 325px
				margin 30px auto
				text-align center
				display flex
				flex-direction column
				min-height 100px
				.money{
					font-size 36px
					color #4f6ef7
					flex 1
					font-weight bold
				}
				.available{
					font-size 16px
					color #212529
					font-weight bold
				}
			}
			.line2{
				border-right 1px solid #efefef
				height 50px
				margin auto
			}
		}
		
		.setUp{
				display flex
				justify-content center
				align-items center
				height 232px
			.setUpText{
				font-size 16px
				font-weight bold
			}
			
		}
		
		.pushButton{
			height 232px
			padding 40px 55px
		}
	}
	.dasText{
		height 570px
		.ivu-tabs-bar{
			margin: 16px 0;
			border-bottom none;
		}
		.ivu-tabs-nav{
			.ivu-tabs-tab-active{
				color #4f6ef7
			}
		} 
		.ivu-tabs-nav{
			.ivu-tabs-ink-bar{
				background-color: #4f6ef7;
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
