<template>
	<v-container
		fluid
		grid-list-xl 
		class="applyManageInfoAPI"
	>
	
		<div class="page-title">
			<div class="page-item">应用管理</div>
			<div class="page-item">API管理</div>
		</div>
		<v-layout wrap>
			<v-flex
				md12
				sm12
				lg12
				class="pl-8 pr-8 pb-8"
			>  
				<v-card class="mx-auto pl-5 pr-5 pb-5" max-width="100%" :elevation="6" height="650">
					<div class="apiTable">
						<div class="recordCenter">
							<div class="recordBg"></div>
							<div class="recordText">API管理</div>
						</div>
					</div>
					<div class="ee"></div>
					<div class="single">
						<Form label-position="right" :label-width="100">
							<FormItem label="ID：" style="margin-top:50px">
								<Input></Input>
							</FormItem>
							<FormItem label="名称：">
								<Input></Input>
							</FormItem>
							<FormItem label="APIKEY：">
								<Row>
									<Col span="18">
										<Input type="text"></Input>
									</Col>
									<Col span="4">
										<v-btn width="100" color="#4f6ef7" style="height: 32px;margin:0">重置</v-btn>
									</Col>
								</Row>
							</FormItem>
						</Form>
					</div>
					<div class="cc"></div>
					<div class="data-list">
						<div class="list">
							<div class="listText">API白名单</div>
							<v-btn width="100" color="#4f6ef7">添加</v-btn>
						</div>
						<Table stripe :columns="columns" :data="list" :loading="loading" align="center"></Table>
					</div>
					<v-btn width="120" color="#4f6ef7" style="height: 35px;margin: 40px auto 0;display: block;">确定</v-btn>
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
			list: [
				{ number:'TEST1', payNum1:'111.193.210.180,111.193.210.180'},
				{ number:'TEST1', payNum1:'111.193.210.180,111.193.210.180'},
				{ number:'TEST1', payNum1:'111.193.210.180,111.193.210.180'},
			],
            columns: [
                {
                    title: '备注',
                    key: 'number',
					minWidth: 10,
					className: "bg-blue",
					align:'center'
                },
                {
                    title: 'IP列表',
                    key: 'payNum1',
					minWidth: 10,
					className: "bg-blue",
                },
            ],
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
		.list{
			display flex
			align-items center
			.listText{
				flex 1
				font-size 16px
				font-weight bold
			}
			.v-btn {
				height 30px
				margin 20px 0
			}
		}
	}
}
	
</style>
