<template>
	<v-container
		fluid
		grid-list-xl 
		class="addressManageCreate"
	>
	
		<div class="page-title">
			<div class="page-item">应用管理</div>
			<div class="page-item">创建新地址</div>
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
							<div class="recordText">创建新地址</div>
						</div>
					</div>
					<div class="ee"></div>
					<div class="single">
						<Form label-position="right" :label-width="170">
							<FormItem label="备注：" style="margin-top:90px">
								<Input type="textarea" :autosize="{ minRows:3, maxRows:3 }"   placeholder="请输入"></Input>
							</FormItem>
							<FormItem label="应用：">
								<i-select>
									<Option value="beijing">条目一</Option>
									<Option value="shanghai">条目二</Option>
									<Option value="shenzhen">条目三</Option>
								</i-select>
							</FormItem>
							<FormItem label="币种：">
								<i-select>
									<Option value="beijing">条目一</Option>
									<Option value="shanghai">条目二</Option>
									<Option value="shenzhen">条目三</Option>
								</i-select>
							</FormItem>
						</Form>
					</div>
					<div class="theWay">剩余可创建地址：<span style="color:#4f6ef7;font-weight bold;">1000</span></div>
					<v-btn 
						width="110" color="#4f6ef7" 
						style="height: 35px;margin: 25px auto 70px;display: block;"
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
			single: false,
			page: 1,
			pageCount: 1,
			itemsPerPage: 10,
			loading: false,
			activeStatus: 1,
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
.addressManageCreate{

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
		border-radius 5px
		display flex
		justify-content center
		align-items center
		margin 90px auto 20px

	}
}
	
</style>
