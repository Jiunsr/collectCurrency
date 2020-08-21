<template>
	<v-container
		fill-height
		fluid
		grid-list-xl 
	>
	
		<div class="page-title">
			<div class="page-item">出账管理</div>
		</div>
		<v-layout wrap>
			<v-flex
				md12
				sm12
				lg12
				class="pl-8 pr-8 pb-8"
			>  
				<v-card class="mx-auto pl-5 pr-5" max-width="100%" :elevation="6">
					<div class="theAccount">
						<div class="recordCenter">
							<div class="recordBg"></div>
							<div class="recordText">出账管理</div>
							<div class="Text">
                <Input v-model="value" placeholder="请输入关键词" style=" width: 300px; margin:0 10px" />
								<v-btn width="90" class="mr-4" color="#4f6ef7" style="height: 32px;">搜索</v-btn>
								<v-btn width="120" color="#4f6ef7" style="height: 32px;">更新</v-btn>
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
	name: 'Dashboard',
	data () {
		return {
      value: '',
			page: 1,
			pageCount: 1,
			itemsPerPage: 10,
			loading: false,
			list: [
				{ number:'1LL1KA2Z6Z1XJDP JBIR4B9RH476XKQB1IQ', area1:'点滴上链', payNum1:'1 BTC', status: 0, note:'ID1',confirmation:'12',Imputation:'是'},
				{ number:'1LL1KA2Z6Z1XJDP JBIR4B9RH476XKQB1IQ', area1:'点滴上链', payNum1:'1 BTC', status: 0, note:'ID1',confirmation:'12',Imputation:'否'},
				{ number:'1LL1KA2Z6Z1XJDP JBIR4B9RH476XKQB1IQ', area1:'点滴上链', payNum1:'1 BTC', status: 0, note:'ID1',confirmation:'12',Imputation:'是'},
			],
            columns: [
                {
                    title: '时间',
                    key: 'name',
                    minWidth: 170,
                    className: "bg-blue",
                    render(h, param) {
                        return [
							h('div', {}, '2010-09-12 12:00:00'),
						]
                    },
                },
                {
                    title: '地址',
                    key: 'number',
                    minWidth: 315,
                    className: "bg-blue",
                },
                {
                    title: '应用',
                    key: 'areaNum',
                    minWidth: 95,
                    className: "bg-blue",
                    align:'center',
                    render(h, param) {
                      let area1 = param.row.area1
                      return h('span',{}, `${area1}`)
                    },
                },
                {
                    title: '金额',
                    key: 'payNum1',
                    minWidth: 80,
                    className: "bg-blue",
                    align:'center',
                },
                {
                    title: '备注',
                    key: 'note',
                    minWidth: 80,
                    className: "bg-blue",
                    align:'center',
                },
                {
                    title: 'HASH',
                    key: 'name',
                    minWidth: 290,
                    className: "bg-blue",
                    render(h, param) {
            return [
                h('div', {}, '00B98899935901D2227903E15D029AF7'),
                h('div', {}, '141114802786F125D9600F3497286ACE'),
						]
                    },
                },
                {
                  title: '确认次数',
                  key: 'confirmation',
                  minWidth: 100,
                  className: "bg-blue",
                  align:'center',
                },
                {
                  title: '归集',
                  key: 'Imputation',
                  minWidth: 80,
                  className: "bg-blue",
                  align:'center',
                },
                {
                    title: '状态',
                    key: 'status',
                    minWidth: 80,
                    className: "bg-blue",
                    align:'center',
                    filters: [
                      {
                        label: '已到账',
                        value: 1
                      },
                      {
                        label: '确认中',
                        value: 2
                      },
                      {
                        label: '已驳回',
                        value: 3
                      },
                      {
                        label: '已到期',
                        value: 4
                      }
                    ],
                    filterMultiple: false,
                    filterMethod (value, row) {
                      // TODO
                      console.warn(value);
                      return true
                    },
                              render: (h, param) => {
                      let option = ['已到账', '确认中', '已失败'];
                                  return h('span', {}, option[param.row.status])
                              },
                },
                {
                    title: '操作',
                    key: 'operating',
                    minWidth: 200,
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
                        }, '详情');
                        
                        let monitor = h('Button', {
                            props: { type:'text', size:'default' },
                            class: ['text-blue'],
                            on: {
                                click: () => {
									
                                }
                            }
						}, '通知');
                        let btns = [];
                        btns.push(manage, monitor);
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
.theAccount{
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
