<template>
	<v-container
		fill-height
		fluid
		grid-list-xl 
	>
	
		<div class="page-title">
			<div class="page-item">系统设置</div> 
		</div>
		<v-layout wrap style="width:100%;">
			<v-flex
				md12
				sm12
				lg12
				class="pl-8 pr-8 pb-8"
			>  
				<v-card class="mx-auto pl-5 pr-5" max-width="100%" :elevation="4">
					<div class="settings">
            <Tabs :animated="false">
                <TabPane label="参数配置">
                  <div class="parameter">
                      <Form :model="formRight" :label-width="100">
                        <FormItem label="参数1：" style="margin-bottom:15px;margin-top:50px">
                            <Input placeholder="请输入"></Input>
                        </FormItem>
                      </Form>
                  </div>
                  <div class="parameter">
                      <Form :model="formRight" :label-width="100">
                        <FormItem label="参数2：" style="margin-bottom:15px;">
                            <Input placeholder="请输入"></Input>
                        </FormItem>
                      </Form>
                  </div>
                  <div class="parameter">
                      <Form :model="formRight" :label-width="100">
                        <FormItem label="参数3：" style="margin-bottom:15px;">
                            <Input placeholder="请输入"></Input>
                        </FormItem>
                      </Form>
                  </div>
                  <div class="parameter">
                      <Form :model="formRight" :label-width="100">
                        <FormItem label="参数4：" style="margin-bottom:15px;">
                            <Input placeholder="请输入"></Input>
                        </FormItem>
                      </Form>
                  </div>
                  <div class="parameter">
                      <Form :model="formRight" :label-width="100">
                        <FormItem label="参数5：" style="margin-bottom:15px;">
                            <Input placeholder="请输入" style="width 70%"></Input>
                        </FormItem>
                      </Form>
                  </div>
                  <div class="parameter">
                      <Form :model="formRight" :label-width="100">
                        <FormItem label="参数6：" style="margin-bottom:15px;">
                            <Input placeholder="请输入"></Input>
                        </FormItem>
                      </Form>
                  </div>
                  <v-btn width="120" color="#4f6ef7" style="height: 32px;display: block;margin-left:auto;margin-right:auto;margin-top:50px" >确定</v-btn>
                </TabPane>
                <TabPane label="员工配置">
                  <Table stripe :columns="columns" :data="list" :loading="loading"></Table>
                </TabPane>
            </Tabs>
					</div>
          <div class="line"></div>
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
        { number:'18001023040', area1:'管理员', status: 0},
				{ number:'18001023040', area1:'管理员', status: 0},
				{ number:'18001023040', area1:'管理员', status: 0},
			],
            columns: [
                {
                    title: '姓名',
                    key: 'name',
                    minWidth: 200,
                    className: "bg-blue",
                    align:'center',
                    render(h, param) {
                        return [
							h('div', {}, 'HELLO'),
						]
                    },
                },
                {
                    title: '手机号',
                    key: 'number',
                    minWidth: 200,
                    className: "bg-blue",
                },
                {
                    title: '角色',
                    key: 'areaNum',
                    minWidth: 200,
                    className: "bg-blue",
                    render(h, param) {
                      let area1 = param.row.area1
                      return h('span',{}, `${area1}`)
                    },
                },
                {
                    title: '状态',
                    key: 'status',
                    minWidth: 200,
                    className: "bg-blue",
                    align:'center',
                    filters: [
                      {
                        label: '正常',
                        value: 1
                      },
                      {
                        label: '异常',
                        value: 2
                      },
                    ],
                    filterMultiple: false,
                    filterMethod (value, row) {
                      // TODO
                      console.warn(value);
                      return true
                    },
                              render: (h, param) => {
                      let option = ['正常', '异常'];
                                  return h('span', {}, option[normal.abnormal])
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
.settings{
  height 570px
  .ivu-tabs-bar{
    margin: 16px 0;
    border-bottom none;
  }
  .ivu-tabs-nav{
    .ivu-tabs-tab-active{
      color #4f6ef7
    }
  } 
  .ivu-tabs-nav{
    .ivu-tabs-ink-bar{
      background-color: #4f6ef7;
    }
  }
}
</style>
