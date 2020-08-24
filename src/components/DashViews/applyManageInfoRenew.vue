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
				<v-card class="mx-auto pl-5 pr-5 pb-5" max-width="100%" :elevation="6">
					<div class="apiTable">
						<div class="recordCenter">
							<div class="recordBg"></div>
							<div class="recordText">续费</div>
						</div>
					</div>
					<div class="ee"></div>
					<div class="single">
						<Form label-position="right" :label-width="170">
							<FormItem label="ID：" style="margin-top:50px">
								<Input></Input>
							</FormItem>
							<FormItem label="名称：">
								<Input></Input>
							</FormItem>
							<FormItem label="有效地址数：">
								<Input></Input>
							</FormItem>
							<FormItem label="当前地址即将到期时间：" :label-width="170">
								<Input></Input>
							</FormItem>
							<FormItem label="续费时长：">
								<Row>
									<Col span="7" v-for="(item, index) in timeList" :key="index">
										<v-btn
											width="120"
											:color="item.key==activeStatus?'#4f6ef7':'#ffffff'"
											@click="activeStatus=item.key"
											:style="{height:'35px', margin: '5px', display: 'block', color:item.key==activeStatus?'':'#333!important'}"
										>{{item.label}}</v-btn>
									</Col>
								</Row>
								<div class="maturity">续费后到期时间为：<span style="color:#4f6ef7;">2020年9月11日 23：59：59</span></div>
							</FormItem>

						</Form>
					</div>
					<div class="cc"></div>
					<div class="data-list">
						<div class="list1">
							<div class="listText2">续费费用：</div>
							<div class="price">￥100.00</div>
						</div>
					</div>
					<div class="options">
						<Checkbox v-model="single" >阅读并阅读了<span style="color:#4f6ef7;">《收币宝服务协议》</span></Checkbox>
					</div>
					<v-btn 
						width="150" color="#4f6ef7" 
						style="height: 35px;margin: 25px auto 40px;display: block;"
						@click="toPayPage"
					>去支付</v-btn>
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
			single: false,
			activeStatus: 1,
			timeList: [
				{ key:1, label:'1周' },
				{ key:2, label:'2周' },
				{ key:3, label:'3周' },
				{ key:4, label:'1月' },
				{ key:5, label:'2月' },
				{ key:6, label:'1年' },
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
	.cc{
		border-bottom 1px solid #d7d7d7
		width 800px
		margin 0 auto
	}
	.single{
		width 600px
		margin 0 auto
		.ivu-input{
			max-width: 360px;
    		height: 35px;
		}
	}
	.data-list{
		max-width 800px
		margin 0 auto
		.list1{
			display flex
			align-items center
			padding-top 20px
			padding-left 120px
			.listText2{
				font-size 16px
				font-weight bold
			}
			.price{
				font-size 25px
				font-weight bold
				color #4f6ef7
				padding-left 10px
			}
		}
	}
	.options{
	display flex
	justify-content center
	align-items center
	padding-top 40px
	}
}
	
</style>
