<template>
	<v-container
		fill-height
		fluid
		grid-list-xl 
	>
	
		<div class="page-title">
			<div class="page-item">应用管理</div>
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
							<div class="recordText">应用管理</div>
							<div class="Text">
								<v-btn width="120" class="mr-5" color="#4f6ef7" :loading="loading" @click="renewData">更新</v-btn>
								<v-btn width="120" class="mr-5" color="#4f6ef7" :to="{ name:'applyManageInfoNewApp' }">创建新应用</v-btn>
							</div>
						</div>
					</div>
					<Table stripe :columns="columns" :data="list" :loading="loading"></Table>
					<div class="page-box">
						<Page :total="100" :current.sync="current" />
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
			current: 2,
			pageCount: 1,
			itemsPerPage: 10,
			loading: false,
			list: [
				{ number:8, areaNum:6, area1:100, area2:200, payNum1:30, payNum2:60, time1:'2020-05-08', time2:'2020-05-27', status: 0},
				{ number:8, areaNum:6, area1:100, area2:200, payNum1:30, payNum2:60, time1:'2020-05-08', time2:'2020-05-27', status: 0},
				{ number:8, areaNum:6, area1:100, area2:200, payNum1:30, payNum2:60, time1:'2020-05-08', time2:'2020-05-27', status: 0},
			],
            columns: [
                {
                    title: '名称',
                    key: 'name',
					minWidth: 250,
					className: "bg-blue",
                    render: (h, param) => {
						let url = param.row.url || 'i-JDJC43AZ'
						let name = param.row.name || '点滴上链';
                        return [
							h('a', {
								on:{
									click: ()=>{
										console.warn("跳转");
										// this.$router.push({ name:'applyManageInfo', query:{ appName: `${url} ${name}` } })
									}
								}
							}, url),
							h('div', {}, name),
						]
                    },
                },
                {
                    title: '币种数量',
                    key: 'number',
					minWidth: 130,
					className: "bg-blue",
					align:'center'
                },
                {
                    title: '地址数量',
                    key: 'areaNum',
					minWidth: 130,
					className: "bg-blue",
					align:'center',
					render(h, param) {
						let area1 = param.row.area1
						let area2 = param.row.area2
						return h('span',{}, `${area1}/${area2}`)
					},
                },
                {
                    title: '进账笔数',
                    key: 'payNum1',
					minWidth: 130,
					className: "bg-blue",
					align:'center',
                },
                {
                    title: '出账笔数',
                    key: 'payNum2',
					minWidth: 160,
					className: "bg-blue",
					align:'center',
                },
                {
                    title: '时间信息',
                    key: 'status',
					minWidth: 250,
					className: "bg-blue",
                    render: (h, param) => {
						let { time1, time2 } = param.row;
                        return h('span', {}, `${time1}创建 - ${time2}到期`)
                    },
                },
                {
                    title: '状态',
                    key: 'status',
					minWidth: 130,
					className: "bg-blue",
					align:'center',
					filters: [
						{
							label: '进行中',
							value: 1
						},
						{
							label: '已停止',
							value: 2
						},
						{
							label: '已到期',
							value: 3
						}
					],
					filterMultiple: false,
					filterMethod (value, row) {
						// TODO
						console.warn(value);
						return true
					},
                    render: (h, param) => {
						let option = ['进行中', '已停止', '已到期'];
                        return h('span', {}, option[param.row.status])
                    },
                },
                {
                    title: '操作',
                    key: 'operating',
					minWidth: 340,
					align: 'center',
					className: "bg-blue",
                    render: (h, params) => {

						let url = params.row.url || 'i-JDJC43AZ'
						let name = params.row.name || '点滴上链';

                        let manage = h('Button', {
                            props: { type:'text', size:'default' },
                            class: ['text-blue'],
                            on: {
                                click: () => {
                                    this.$router.push({name:'applyManageInfoManage', query:{id:1}});
                                }
                            }
                        }, '管理');
                        
                        let monitor = h('Button', {
                            props: { type:'text', size:'default' },
                            class: ['text-blue'],
                            on: {
                                click: () => {
									this.$router.push({ name:'applyManageInfo', query:{ appName: `${url} ${name}` } })
                                }
                            }
						}, '监控');
						
                        let stop = h('Button', {
                            props: { type:'text', size:'default' },
                            class: ['text-blue'],
                            on: {
                                click: () => {
									
									this.$Modal.confirm({
										title: '温馨提醒',
										content: '确认要停止吗',
										onOk: () => {
											this.$Modal.remove();
										},
										onCancel: () => {
											console.warn("取消")
										}
									});
                                }
                            }
						}, '停止');

                        let apiPage = h('Button', {
                            props: { type:'text', size:'default' },
                            class: ['text-blue'],
                            on: {
                                click: () => {
									this.$router.push({ name:'applyManageInfoAPI', query:{ appName: `${url} ${name}` } })
                                }
                            }
						}, 'API');

                        let renewals = h('Button', {
                            props: { type:'text', size:'default' },
                            class: ['text-blue'],
                            on: {
                                click: () => {
									this.$router.push({ name:'applyManageInfoRenew', query:{ appName: `${url} ${name}` } })
                                }
                            }
						}, '续费');
						

                        let btns = [];
                        btns.push(manage, monitor, stop, apiPage, renewals);
                        return btns;
                    }
                }
            ],
		}
	},
	methods: {
		complete (index) {
			this.list[index] = !this.list[index]
		},
		renewData(){
			this.loading = true;
			setTimeout(()=>{
				this.loading = false;
			},500);
		}
	}
}
</script>
<style lang="stylus">
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
	
</style>
