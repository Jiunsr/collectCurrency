<template>
	<v-container
		fluid
		grid-list-xl 
		class="applyManageInfoAPI"
	>
	
		<div class="page-title">
			<div class="page-item">应用管理</div>
			<div class="page-item">续费</div>
			<div class="page-item">支付</div>
		</div>
		<v-layout wrap>
			<v-flex
				md12
				sm12
				lg12
				class="pl-8 pr-8 pb-8"
			>  
				<v-card class="mx-auto pl-5 pr-5 pb-5" max-width="100%" :elevation="6">
					<div class="apiTable">
						<div class="recordCenter">
							<div class="recordBg"></div>
							<div class="recordText">支付</div>
						</div>
					</div>
					<div class="ee"></div>
					<div class="single">
						<Form label-position="right" :label-width="170">
							<FormItem label="订单号：" style="margin-top:50px">
								<Input></Input>
							</FormItem>
							<FormItem label="产品：">
								<Input></Input>
							</FormItem>
							<FormItem label="时长：">
								<Input></Input>
							</FormItem>
							<FormItem label="金额：" :label-width="170">
								<Input></Input>
							</FormItem>
							<FormItem label="支付方式:">
								<Row>
									<Col span="8" v-for="(item,index) in payOption" :key="index">
										<v-btn 
											width="120" :color="item.key==payActive?'#4f6ef7':'#ffffff'" 
											:style="{height:'42px', color:item.key==payActive?'':'#333!important' }"
											@click="payActive=item.key"
										>
											<img class="icon mr-2" :src="item.icon">
											{{item.label}}
										</v-btn>
									</Col>
								</Row>
							</FormItem>
						</Form>
					</div>
					<div class="theWay">
						<div class="theWayImg">
							<img src="./../../assets/img/zhifu_10.png" alt="">
						</div>
					</div>
					<div class="options">
						<div>USDT支付地址：<span style="color:#4f6ef7;">1LL1KA2Z6Z1XJDPJBIR4B9RH476XKQB1IQ</span></div>
					</div>
					<v-btn 
						width="150" color="#4f6ef7" 
						style="height: 35px;margin: 25px auto 40px;display: block;"
						@click="toPayPage"
					>确定</v-btn>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
const alipay = require('@/assets/img/zhifu_03.jpg');
const wxpay = require('@/assets/img/zhifu_05.jpg');
export default {
	name: 'Dashboard',
	data () {
		return {
			alipay,
			wxpay,
			payActive: 1,
			payOption: [
				{ key:1, label:'UBDT', },
				{ key:2, label:'支付宝', icon:alipay },
				{ key:3, label:'微信', icon:wxpay},
			],
		}
	},
	methods: {
		toPayPage(){
			this.$router.push({ name:'applyManageInfoPay' });
		}
	}
}
</script>
<style lang="stylus">
.applyManageInfoAPI{

	th.bg-blue{
		color #fff !important
		background-color #4F6EF7 !important
	}
	.apiTable{
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
	.ee{
		border-bottom 1px solid #d7d7d7
		width 97%
		margin 0 auto
	}
	.single{
		width 600px
		margin 0 auto
		.ivu-input{
			max-width: 360px;
    		height: 35px;
		}
		.icon{
			border-radius 5px
		}
	}

	.options{
	display flex
	justify-content center
	align-items center
	margin-left: 190px;
	}
	.theWay{
		.theWayImg{
			border 1px solid #f5f5f5
			border-radius 5px
			width 180px
			height 180px
			display flex
			justify-content center
			align-items center
			margin 10px auto
		}
	}
}
	
</style>
