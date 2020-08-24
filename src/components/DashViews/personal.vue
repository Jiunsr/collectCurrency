<template>
	<v-container
		fluid
		grid-list-xl 
		class="personal"
	>
	
		<div class="page-title">
			<div class="page-item">应用管理</div>
			<div class="page-item">管理应用</div>
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
							<div class="recordText">管理应用</div>
						</div>
					</div>
					<div class="line1"></div>
					<div class="inputBox">
						<Form label-position="right" :label-width="100">
							<FormItem label="手机：" style="margin-top:30px">
								<Input value="1800103526" disabled></Input>
							</FormItem>
							<FormItem label="邮箱：" style="margin-top:30px" class="other">
								<Input placeholder="请输入"></Input>
								<div class="locate"> 
									<v-btn width="90" class="mr-0" color="#4f6ef7" height="32">确认</v-btn>	
								</div>
							</FormItem>
							<FormItem label="旧密码：" style="margin-top:30px">
								<Input placeholder="请输入"></Input>
							</FormItem>
							<FormItem label="旧密码" >
								<Input placeholder="请输入"></Input>
							</FormItem>
							<FormItem label="确认密码：">
								<Input placeholder="请输入"></Input>
							</FormItem>
							<FormItem label="确认密码：">
								<Input placeholder="请输入"></Input>
							</FormItem>
						</Form>
					</div>
					<v-btn width="120" color="#4f6ef7" style="height: 35px;margin: 20px auto 25px;display: block;">确定</v-btn>
					<div class="line2 mb-6"></div>
					<div class="inputBox">
						<Form label-position="right" :label-width="100">
							<FormItem label="二次验证："  class="other">
								<Row>
									<Col span="8">
									    <v-btn 
                                            width="120" class="mr-0" color="#fff" 
                                            style="pointer-events:none;border:1px solid #4f6ef7; color:#4f6ef7!important;border-radius:36px;"
                                        >状态：开启</v-btn>	
									</Col>
									<Col span="4" offset="1">
									    <v-btn class="mr-0" color="#4f6ef7" height="32">关闭二次验证</v-btn>	
									</Col>
								</Row>
							</FormItem>
							<FormItem label=""  class="other">
								<Row>
									<Col span="10">
                                        <div class="theWayImg">
                                            <img src="./../../assets/img/zhifu_10.png" alt="">
                                        </div>
									</Col>
									<Col span="13" offset="1">
                                        <Input placeholder="请输入验证码"></Input>
									    <v-btn class="mt-4" color="#4f6ef7" height="32">确定</v-btn>	
                                        <div class="tips">
                                            获取二维码来关闭二次验证，或是扫码关闭二次验证
                                        </div>
									</Col>
								</Row>
								<div class="locate"> 
									<v-btn width="90" class="mr-0" color="#4f6ef7" height="32">获取二维码</v-btn>	
								</div>
							</FormItem>
						</Form>
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
	methods: {
		complete (index) {
			this.list[index] = !this.list[index]
		}
	}
}
</script>
<style lang="stylus">
.personal{
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
		width 600px
		margin 0 auto
	}
	.inputBox{
		width 500px
        margin 0 auto;
	}
	.information{
		margin 20px 0
		display flex
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
    .theWayImg{
        border 1px solid #f5f5f5
        border-radius 5px
        width 160px
        height 160px
        display flex
        justify-content center
        align-items center
        margin 0
    }
    .tips {
        font-size 14px
        line-height 24px
        color #333
        margin-top 25px
    }
}
	
</style>
