<template>
	<v-container
		fluid
		grid-list-xl 
		class="applyManageInfoManage"
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
							<FormItem label="ID：" style="margin-top:30px">
								<Input value="i-j6d5c7zn" disabled></Input>
							</FormItem>
							<FormItem label="名称：" style="margin-top:30px">
								<Input value="点滴上链" disabled></Input>
							</FormItem>
							<FormItem label="创建时间：" style="margin-top:30px">
								<Input value="2020-08-21" disabled></Input>
							</FormItem>
							<FormItem label="到期时间："  class="other">
								<Input value="2020-08-21" disabled placeholder="请输入地址设置数量"></Input>
								<div class="locate"> 
									<v-btn width="90" class="mr-0" color="#4f6ef7" height="32" @click="toRenewals()">续费</v-btn>	
								</div>
							</FormItem>
							<FormItem label="状态：">
								<Input value="监听中" disabled></Input>
							</FormItem>
							<FormItem label="地址设置：" class="other">
								<Input></Input>
								<div class="locate">
									<div class="theAmount mr-2">已用：<span style="color:#000;font-weight:bold;">200</span>;</div>
									<div class="theAmount">可用：<span style="color:#39f;font-weight:bold;">1000</span>;</div>
								</div>
							</FormItem>
							<FormItem label="币种设置：">
								<Input ></Input>
							</FormItem>
							<FormItem label="币种设置：">
								<i-select placeholder="请选择币种">
									<Option value="beijing">条目一</Option>
									<Option value="shanghai">条目二</Option>
									<Option value="shenzhen">条目三</Option>
								</i-select>
							</FormItem>
						</Form>
					</div>
					<div class="line2"></div>
					<div class="information">
						<Form label-position="right" :label-width="100" inline>
							<FormItem label="币种名称：" class="mr-0">
								<Input  placeholder="请输入"></Input>
							</FormItem>
							<FormItem label="入账阈值：" class="mr-0">
								<Input  placeholder="请输入"></Input>
							</FormItem>
							<FormItem label="入账阈值：" class="mr-0">
								<Input  placeholder="请输入"></Input>
							</FormItem>
						</Form>
						<div class="action-item">
							<Checkbox>充币允许</Checkbox>
							<Checkbox style="margin 0 25px 0 0">提币允许</Checkbox>
							<v-btn width="90" class="mr-0" color="#4f6ef7">添加</v-btn>
						</div>
					</div>
					<div class="nameList">
						<Table stripe :columns="columns" :data="list" :loading="loading"></Table>
					</div>
					<v-btn width="120" color="#4f6ef7" style="height: 35px;margin: 40px auto 20px;display: block;">确定</v-btn>
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
				{ number:'BTC', area1:100, area2:200, payNum1:0.1, payNum2:0.5, charge:'是', status: 0},
				{ number:'BTC', area1:100, area2:200, payNum1:0.1, payNum2:0.5, charge:'是', status: 1},
				{ number:'BTC', area1:100, area2:200, payNum1:0.1, payNum2:0.5, charge:'是', status: 0},
			],
            columns: [
                {
                    title: '名称',
                    key: 'number',
					minWidth: 130,
					className: "bg-blue",
					align:'center'
                },
                {
                    title: '入账阈值',
                    key: 'payNum1',
					minWidth: 130,
					className: "bg-blue",
					align:'center',
                },
                {
                    title: '出账限额',
                    key: 'payNum2',
					minWidth: 160,
					className: "bg-blue",
					align:'center',
                },
                {
                    title: '允许充币',
                    key: 'charge',
					minWidth: 160,
					className: "bg-blue",
					align:'center',
					render(h, param) {
						let status = param.row.status;
						let option = ['#02D4B4', '#FE6767']
						return h('span', { style:`color:${option[status]}` }, param.row.charge)
					},
                },
                {
                    title: '允许充币',
                    key: 'charge',
					minWidth: 160,
					className: "bg-blue",
					align:'center',
					render(h, param) {
						let status = param.row.status;
						let option = ['#02D4B4', '#FE6767']
						return h('span', { style:`color:${option[status]}` }, param.row.charge)
					},
                },

                
            ],
		}
	},
	methods: {
		complete (index) {
			this.list[index] = !this.list[index]
		},
		toRenewals(){
			let url = 'i-JDJC43AZ'
			let name = '点滴上链';
			this.$router.push({ name:'applyManageInfoRenew', query:{ appName: `${url} ${name}` } })
		}
	}
}
</script>
<style lang="stylus">
.applyManageInfoManage{
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
	.inputBox{
		width 500px
	}
	.information{
		margin 20px 0
		display flex
		.ivu-form-inline .ivu-form-item{
			width 230px
			max-width 300px
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
