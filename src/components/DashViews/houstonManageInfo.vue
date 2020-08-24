<template>
	<v-container
		fluid
		grid-list-xl 
		class="houstonManageInfo"
	>
	
		<div class="page-title">
			<div class="page-item">进账管理</div>
			<div class="page-item">详情</div>
		</div>
		<v-layout wrap>
			<v-flex
				md12
				sm12
				lg12
				class="pl-8 pr-8 pb-8"
			>  
				<v-card class="mx-auto pl-5 pr-5 pb-5" max-width="100%" :elevation="6">
					<div class="usersTable">
						<div class="recordCenter">
							<div class="recordBg"></div>
							<div class="recordText">详情</div>
						</div>
					</div>
					<div class="line1"></div>
					<div class="inputBox1">
						<div class="input0">
							<Form label-position="right" :label-width="100">
								<FormItem label="时间：" style="margin-top:30px; margin-bottom: 10px;">
									<Input  disabled></Input>
								</FormItem>
								<FormItem label="地址：" style="margin-bottom: 10px;">
									<Input  disabled></Input>
								</FormItem>
								<FormItem label="应用：" style="margin-bottom: 10px;">
									<Input  disabled></Input>
								</FormItem>
								<FormItem label="金额：" style="margin-bottom: 10px;">
									<Input  disabled></Input>
								</FormItem>
								<FormItem label="备注：" style="margin-bottom: 10px;">
									<Input  disabled></Input>
								</FormItem>
								<FormItem label="HASH：" style="margin-bottom: 10px;">
									<Input  disabled></Input>
								</FormItem>
								<FormItem label="确认次数："  class="other" style="margin-bottom: 10px;">
									<Input  disabled ></Input>
									<div class="locate"> 
										<v-btn width="80" class="mr-0" color="#4f6ef7" height="32">检查</v-btn>	
									</div>
								</FormItem>
								<FormItem label="归集：" style="margin-bottom: 10px;">
									<Input  disabled></Input>
								</FormItem>
								<FormItem label="归集HASH：" style="margin-bottom: 10px;">
									<Input  disabled></Input>
								</FormItem>
								<FormItem label="归集状态："  class="other" style="margin-bottom: 10px;">
									<Input  disabled></Input>
									<div class="locate"> 
										<v-btn width="80" class="mr-0" color="#4f6ef7" height="32">检查</v-btn>	
									</div>
								</FormItem>
								<FormItem label="状态：" style="margin-bottom: 30px;">
									<Input  disabled></Input>
								</FormItem>
							</Form>
						</div>
					</div>
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
.houstonManageInfo{
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
	.line1{
		border-bottom 1px solid #d7d7d7
		margin 0 auto
	}
	.line2{
		border-bottom 1px solid #d7d7d7
		width 95%
		margin 0 auto
	}
	.inputBox1{
		width 100%
		display flex
		justify-content center
		align-items center
		.input0{
			width 600px
		}
	}
	.information{
		margin 0 0

		.ivu-form-inline .ivu-form-item{
			min-width 400px
		}
		.action-item{
			flex 1
			display flex
			align-items center
			justify-content flex-end

			.v-btn{
				height 30px
				margin-left 30px !important;
				margin-right 40px !important;
			}
		}

	}
	.mr-0{
		margin 0 !important
	}
	.nameList{
		max-width 95%
		margin 0 auto
	}
	.other{
		position relative
		.locate{
			position absolute
			min-width 300px
			margin-right -300px
			top 0
			right 0
			display flex
			align-items center
			justify-content flex-start
			padding-left 20px
		}
	}
}
	
</style>
