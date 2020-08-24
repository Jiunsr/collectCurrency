<template>
	<v-container
		fluid
		grid-list-xl 
        class="outAccountsManageInfoMeg"
	>
	
		<div class="page-title">
			<div class="page-item">出账管理</div>
			<div class="page-item">通知</div>
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
							<div class="recordText">39457239475193845239</div>
							<div class="Text">
								<v-btn width="90" class="mr-4" color="#4f6ef7" style="height: 32px;">再通知</v-btn>
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
				{ number:'2010-09-12 12：00：00', payNum1:'10', result:'成功'},
				{ number:'2010-09-12 12：00：00', payNum1:'10', result:'成功'},
				{ number:'2010-09-12 12：00：00', payNum1:'10', result:'成功'},
			],
            columns: [
                {
                    align:"center",
                    title: '时间',
                    key: 'number',
                    className: "bg-blue",
                },
                {
                    title: '确认次数',
                    key: 'payNum1',
                    className: "bg-blue",
                    align:'center',
                },
                {
                    title: '通知结果',
                    key: 'result',
                    className: "bg-blue",
                    align:'center',
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
th.bg-blue{
	color #fff !important
	background-color #4F6EF7 !important
}
.{
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
    .ivu-table-wrapper{

    }
}
	
</style>
