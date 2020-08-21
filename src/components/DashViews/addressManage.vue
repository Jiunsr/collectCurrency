<template>
	<v-container
		fluid
		grid-list-xl 
	>
	
		<div class="page-title">
			<div class="page-item">地址管理</div>
		</div>
		<v-layout wrap>
			<v-flex
				md12
				sm12
				lg12
				class="pl-8 pr-8 pb-8"
			>  
				<v-card class="mx-auto pl-5 pr-5" max-width="100%" :elevation="6">
					<div class="address">
						<div class="recordCenter">
							<div class="recordBg"></div>
							<div class="recordText">地址管理</div>
							<div class="Text">
                <Input v-model="value" placeholder="请输入关键词" style=" width: 300px; margin:0 10px" />
								<v-btn width="90" class="mr-4" color="#4f6ef7" style="height: 32px;">搜索</v-btn>
								<v-btn width="120" class="mr-4" color="#4f6ef7" style="height: 32px;">更新</v-btn>
								<v-btn width="120" color="#4f6ef7" style="height: 32px;">创建新地址</v-btn>
							</div>
						</div>
					</div>
					<Table stripe :columns="columns" :data="list" :loading="loading"></Table>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: 'addressManage',
	data () {
		return {
            value: '',
			page: 1,
			pageCount: 1,
			itemsPerPage: 10,
			loading: false,
			list: [
				{ number:'点滴上链', area1:'BTC(原生)', payNum1:'ID1',  time1:'2020-05-08', time2:'2020-05-27', status: 0},
				{ number:'点滴上链', area1:'BTC(原生)', payNum1:'ID1',  time1:'2020-05-08', time2:'2020-05-27', status: 0},
				{ number:'点滴上链', area1:'BTC(原生)', payNum1:'ID1',  time1:'2020-05-08', time2:'2020-05-27', status: 0},
			],
            columns: [
                {
                    title: '地址',
                    key: 'name',
                    minWidth: 320,
                    className: "bg-blue",
                    render(h, param) {
                        return [
							h('div', {}, '1LL1KA2Z6Z1XJDP JBIR4B9RH476XKQB1IQ'),
						]
                    },
                },
                {
                    title: '应用',
                    key: 'number',
                    minWidth: 140,
                    className: "bg-blue",
                    align:'center'
                },
                {
                    title: '币种',
                    key: 'areaNum',
                    minWidth: 140,
                    className: "bg-blue",
                    align:'center',
                    render(h, param) {
                      let area1 = param.row.area1
                      return h('span',{}, `${area1}`)
                    },
                },
                {
                    title: '备注',
                    key: 'payNum1',
                    minWidth: 150,
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
                        label: '监听中',
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
                      let option = ['监听中', '已停止', '已到期'];
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

                        let manage = h('Button', {
                            props: { type:'text', size:'default' },
                            class: ['text-blue'],
                            on: {
                                click: () => {
                                    // this.$router.push({name:'contractTaskView', query:{id:params.row.id}});
                                }
                            }
                        }, '停止');
                        
                        let monitor = h('Button', {
                            props: { type:'text', size:'default' },
                            class: ['text-blue'],
                            on: {
                                click: () => {
									
                                }
                            }
						}, '补录');
						
                        let stop = h('Button', {
                            props: { type:'text', size:'default' },
                            class: ['text-blue'],
                            on: {
                                click: () => {
									
                                }
                            }
						}, '监控');
                        let renewals = h('Button', {
                            props: { type:'text', size:'default' },
                            class: ['text-blue'],
                            on: {
                                click: () => {
									
                                }
                            }
						}, '续费');
						

                        let btns = [];
                        btns.push(manage, monitor, stop, renewals);
                        return btns;
                    }
                }
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
th.bg-blue{
	color #fff !important
	background-color #4F6EF7 !important
}
.address{
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
